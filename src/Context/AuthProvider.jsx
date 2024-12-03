import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase.init";
import { FaSpinner } from "react-icons/fa";

import { toast } from "react-toastify";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserPhoto(currentUser.photoURL);
        setUserName(currentUser.displayName);
      } else {
        setUser(null);
        setUserPhoto(null);
        setUserName(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        setUser(user);
        setUserName(user.displayName);
        setUserPhoto(user.photoURL);
        setLoading(false);

        toast.success("Login Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out!");
    } finally {
      setLoading(false);
    }
  };
  const handleEmailPassSignUp = (email, pass, name, photo) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;

        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        setUserName(name);
        setUserPhoto(photo);
        setLoading(false);
        toast.success("User registered successfully!");
      })
      .catch((error) => {
        console.error("Error during user registration:", error.message);
        toast.error("Registration failed: " + error.message);
      });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-3xl" />
      </div>
    );
  }

  const authInfo = {
    user,
    userPhoto,
    userName,
    setUserName,
    setUserPhoto,
    signInWithGoogle,
    logOut,
    handleEmailPassSignUp,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
