import { createContext, useContext, useState, useEffect } from "react";

// firebase imports
import { auth, db } from "../firebase";
// auth
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// context
export const FirebaseContext = createContext(null);

// sign in with google
const googleProvider = new GoogleAuthProvider();
const signinWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

// signup
const createUser = async (email, password, name) => {
  try {
    console.log("creating user...");
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName: name,
    });

    console.log("Successfully created user", newUser);
  } catch (error) {
    console.error(error);
  }
};

// signin with email and password
const signinWithEmailPassword = async (email, password) => {
  try {
    console.log("Login start");
    const res = await signInWithEmailAndPassword(auth, email, password);

    console.log("successfully logged", res);
  } catch (error) {
    console.error(error);
  }
};

// signOut
const loggingOut = async () => {
  try {
    const res = await signOut(auth);

    console.log("successfully signedout", res);
  } catch (error) {
    console.error(error);
  }
};

// provider
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // detecting user login or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        createUser,
        signinWithEmailPassword,
        signinWithGoogle,
        isLoggedIn,
        loggingOut,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// custom hook for using context
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export default FirebaseProvider;
