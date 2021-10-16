import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FirebaseInittialize from "./firebase.init";

FirebaseInittialize();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  const emailSignIn = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithEmail = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsbscribe;
  }, [user]);
  return {
    user,
    isLoading,
    googleSignIn,
    logOut,
    emailSignIn,
    auth,
    updateProfile,
    setUserName,
    loginWithEmail,
  };
};

export default useFirebase;
