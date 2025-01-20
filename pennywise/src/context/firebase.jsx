import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
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
} from "firebase/firestore";

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

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user);
        setCurrentUser(user);
      } else {
        console.log("No user logged in.");
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getDateInYearMonthFormat = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  };

  const deleteExpense = async (userId, expenseId) => {
    try {
      const expenseRef = doc(firestore, "expenses", expenseId);
      await deleteDoc(expenseRef);
      return true;
    } catch (error) {
      console.error("Error deleting expense:", error);
      throw error;
    }
  };

  const updateExpense = async (userId, expenseId, description, amount) => {
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

  const fetchExpenses = async (userId) => {
    try {
      const currentYearMonth = getDateInYearMonthFormat();
      const expensesRef = collection(firestore, "expenses");
      const q = query(
        expensesRef,
        where("userId", "==", userId),
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

  const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Current User", userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };

  const withGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
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

  const value = {
    currentUser,
    signInWithEmail,
    withGoogle,
    logOut,
    addExpense,
    fetchExpenses,
    deleteExpense,
    updateExpense,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
