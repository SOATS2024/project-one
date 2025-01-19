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
} from "firebase/firestore";

// Firebase configuration (replace with your config)
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
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  // const currentUserRef = doc(firestore, "users", currentUser.uid);
  // const monthlyExpenseRef = doc(
  //   collection(currentUserRef, "expenses"),
  //   getDateInYearMonthFormat
  // );

  // const getDateInYearMonthFormat = () => {
  //   const date = new Date();
  //   return `${date.getFullYear()}-${date.getMonth() + 1}`;
  // };

  // const dailyExpensesRef = async () => {
  //   const dailyExpensesCollection = collection(
  //     monthlyExpenseRef,
  //     "dailyExpenses"
  //   );
  //   await addDoc(dailyExpensesCollection, {
  //     title: "Groceries",
  //     amount: 50,
  //     category: "Food",
  //     date: new Date(), // Use current date
  //     note: "Weekly grocery shopping",
  //   });
  // };

  const saveUserToFirestore = async (user) => {
    if (!user) return;
    const userRef = doc(firestore, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      username: user.username || "",
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
      user.username = fullName;
      user.totalSpent = 0;
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
        dailyExpensesRef,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
