import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

const FirebaseContext = createContext(null);

// Initialize Firebase App if not already initialized
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
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
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); 
    return `${year}-${month}`;
  };

  //Delete Expense
  const deleteExpense = async (userId , expenseId) => {
    if (!currentUser) return; // Ensure currentUser is not null
    const expenseDocRef = doc(
      firestore,
      "users",
      userId,
      "expenses",
      getDateInYearMonthFormat(),
      "dailyExpenses",
      expenseId
    );
    
    try {
      await deleteDoc(expenseDocRef);
      console.log("Document successfully deleted!", expenseId);
      alert("Expense deleted successfully!");
      return "Document successfully deleted!" + expenseId;
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete expense. Please try again.");
      return "Error deleting document: " + error;
    }
  };

  // Fetch expenses
  const fetchExpenses = async (userId) => {
    try {
      const dailyExpensesCollection = collection(
        firestore,
        "users",
        userId,
        "expenses",
        getDateInYearMonthFormat(),
        "dailyExpenses"
      );

      const q = query(dailyExpensesCollection, orderBy("date", "asc"));
      const querySnapshot = await getDocs(q);

      const expenses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return expenses;
    } catch (error) {
      console.error("Error fetching expenses:", error);
      return [];
    }
  };

  // Function to add expense to the Firestore structure
  const addExpense = async (description, amount) => {
    if (!currentUser) return; // Ensure currentUser is not null

    const dailyExpensesCollection = collection(
      firestore,
      "users",
      currentUser.uid,
      "expenses",
      getDateInYearMonthFormat(),
      "dailyExpenses"
    );

    try {
      const docRef = await addDoc(dailyExpensesCollection, {
        description,
        amount: parseFloat(amount),
        date: new Date(),
      });
      console.log("Expense Added Successfully");
      return {
        id: docRef.id,
        description,
        amount: parseFloat(amount),
        date: new Date(),
      }; // Return the new expense
    } catch (e) {
      console.error("Error adding Expense", e);
    }
  };

  const saveUserToFirestore = async (user) => {
    if (!user) return;
    const userRef = doc(firestore, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      createdAt: new Date(),
    });
  };

  const signUpUserWithEmailAndPassword = async (fullName, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      user.displayName = fullName;
      setCurrentUser(user); // Update current user state
      await saveUserToFirestore(user);
      console.log("User Registration Successful");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setCurrentUser(userCredential.user); // Update current user state
      console.log("Current User", userCredential.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const withGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );
      setCurrentUser(userCredential.user); // Update current user state
      await saveUserToFirestore(userCredential.user);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const logOut = () => {
    signOut(firebaseAuth);
    setCurrentUser(null); // Update current user state on logout
  };

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        signUpUserWithEmailAndPassword,
        signInWithEmail,
        withGoogle,
        logOut,
        addExpense, // Expose addExpense function
        fetchExpenses,
        deleteExpense,

      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
