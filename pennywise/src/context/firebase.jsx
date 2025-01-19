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
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD87WXfVYRUirN0p7q9d2daWMT07ntNaIQ",
  authDomain: "pennywise-9f005.firebaseapp.com",
  projectId: "pennywise-9f005",
  storageBucket: "pennywise-9f005.appspot.com",
  messagingSenderId: "478808999063",
  appId: "1:478808999063:web:35d1469217532149e2d5d2",
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
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Ensure 2 digits
    return `${year}-${month}`;
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

    const currentUserRef = doc(firestore, "users", currentUser.uid);
    const monthlyExpenseRef = doc(
      collection(currentUserRef, "expenses"),
      getDateInYearMonthFormat() // Use Year-Month format for collection name
    );

    const dailyExpensesCollection = collection(
      monthlyExpenseRef,
      "dailyExpenses"
    );

    const timestamp = new Date(); // Current timestamp

    try {
      const docRef = await addDoc(dailyExpensesCollection, {
        description,
        amount: parseFloat(amount),
        date: timestamp,
      });
      console.log("Expense Added Successfully");
      return {
        id: docRef.id,
        description,
        amount: parseFloat(amount),
        date: timestamp,
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
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
