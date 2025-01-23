import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { Loader2 } from "lucide-react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

const FirebaseContext = createContext(null);

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Set persistence to LOCAL
setPersistence(auth, browserLocalPersistence);

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
      });

      await setDoc(doc(firestore, "users", user.uid), {
        username,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      setCurrentUser(user);
      return user;
    } catch (error) {
      console.error("Error in signup:", error);
      throw error;
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  };

  const withGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(
        doc(firestore, "users", user.uid),
        {
          username: user.displayName,
          email: user.email,
          updatedAt: new Date(),
        },
        { merge: true }
      );

      setCurrentUser(user);
      return user;
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const getDateInYearMonthFormat = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  };

  const addExpense = async (description, amount) => {
    if (!currentUser) throw new Error("No authenticated user!");
    try {
      const expenseData = {
        description,
        amount: Number(amount),
        userId: currentUser.uid,
        yearMonth: getDateInYearMonthFormat(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const docRef = await addDoc(
        collection(firestore, "expenses"),
        expenseData
      );
      return { id: docRef.id, ...expenseData };
    } catch (error) {
      console.error("Error adding expense:", error);
      throw error;
    }
  };

  const fetchExpenses = async () => {
    if (!currentUser) throw new Error("No authenticated user!");
    try {
      const currentYearMonth = getDateInYearMonthFormat();
      const expensesRef = collection(firestore, "expenses");
      const q = query(
        expensesRef,
        where("userId", "==", currentUser.uid),
        where("yearMonth", "==", currentYearMonth)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching expenses:", error);
      throw error;
    }
  };

  const updateExpense = async (expenseId, description, amount) => {
    if (!currentUser) throw new Error("No authenticated user!");
    try {
      const expenseRef = doc(firestore, "expenses", expenseId);
      await updateDoc(expenseRef, {
        description,
        amount: Number(amount),
        updatedAt: new Date(),
      });
      return true;
    } catch (error) {
      console.error("Error updating expense:", error);
      throw error;
    }
  };

  const deleteExpense = async (expenseId) => {
    if (!currentUser) throw new Error("No authenticated user!");
    try {
      const expenseRef = doc(firestore, "expenses", expenseId);
      await deleteDoc(expenseRef);
      return true;
    } catch (error) {
      console.error("Error deleting expense:", error);
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-8 w-8 text-secondary" />
      </div>
    );
  }

  const value = {
    currentUser,
    loading,
    signUpWithEmail,
    signInWithEmail,
    forgotPassword,
    withGoogle,
    logOut,
    addExpense,
    fetchExpenses,
    deleteExpense,
    updateExpense
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};