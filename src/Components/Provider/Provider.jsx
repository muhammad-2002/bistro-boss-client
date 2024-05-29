import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import usePublicAxiosSecure from "./../CustomHook/usePublicAxiosSecure";
export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const [axiosPublicSecure] = usePublicAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createForGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  const createForGithub = () => {
    return signInWithPopup(auth, GithubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  const unSubscribe = useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const email = user.email;
          const res = await axiosPublicSecure.post("/jwt", { email });
          if (res.data.token) {
            localStorage.setItem("accessToken", res.data.token);
            setLoading(false);
            setUser(user);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setUser(null);
        localStorage.removeItem("accessToken");
        setLoading(false);
      }
    });
    return () => unSubscribe;
  }, [axiosPublicSecure]);

  const authInfo = {
    user,
    loading,
    createUser,
    createForGoogle,
    createForGithub,
    SignInEmail,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
