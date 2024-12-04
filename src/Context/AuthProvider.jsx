import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase.init";
import { FaSpinner } from "react-icons/fa";

import { toast, useToast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserPhoto(currentUser.photoURL);
        setUserName(currentUser.displayName);
        setUserEmail(currentUser.email);
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
        setUserEmail(user.email);
        setLoading(false);

        toast.success("Login Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
  const logInWithEmail = async (email, password, navigate) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      if (result.user) {
        navigate("/");
      }
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Failed to log in!");
    } finally {
      setLoading(false);
    }
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
  const handleEmailPassSignUp = (email, pass, name, photo, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;

        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
          email: email,
        });
      })
      .then(() => {
        setUserName(name);
        setUserPhoto(photo);
        setUserEmail(email);
        setLoading(false);
        toast.success("User registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during user registration:", error.message);
        toast.error("Registration failed: " + error.message);
        setLoading(false);
        navigate("/register");
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
    userEmail,
    setUserName,
    setUserPhoto,
    signInWithGoogle,
    logInWithEmail,
    logOut,
    handleEmailPassSignUp,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
