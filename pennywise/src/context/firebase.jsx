import { createContext, useContext } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD87WXfVYRUirN0p7q9d2daWMT07ntNaIQ",
  authDomain: "pennywise-9f005.firebaseapp.com",
  projectId: "pennywise-9f005",
  storageBucket: "pennywise-9f005.appspot.com",
  messagingSenderId: "478808999063",
  appId: "1:478808999063:web:35d1469217532149e2d5d2",
};

const FirebaseContext = createContext(null);

// Fix: Prevent duplicate app initialization
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = ({ children }) => {

  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const withGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const signInWithEmail = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const logOut = () => {
    signOut(firebaseAuth)
    }

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInWithEmail,
        withGoogle,
        logOut
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);