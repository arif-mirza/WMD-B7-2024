// imports
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

// =============== //

export const AuthContext = createContext();
const AppContext = ({ children }) => {
  const collectionUsersRef = collection(db, "users");
  const provider = new GoogleAuthProvider();
  const [userData, setUserData] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // sigin with google
  const signInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;
      const q = query(collectionUsersRef, where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collectionUsersRef, {
          uid: user?.uid,
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          authProvider: provider.providerId,
        });
      }
      console.log("popup ==> ", popup);
    } catch (err) {
      console.error("Error signing in with Google: ", err);
      alert(err.message);
      return;
    }
  };

  // login with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  // register user
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collectionUsersRef, {
        uid: user.uid,
        name,
        providerId: "email",
        email: user.email,
      });
      navigate("/");
    } catch (err) {
      alert(err.message);
      console.log(err.message);
      
    }
  };

  // send password to user
  const sendPasswordToUser = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("New password send to your email");
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  // signOut user
  const signOutUser = async () => {
    await signOut(auth);
  };

  const userStateChanged = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collectionUsersRef, where("uid", "==", user?.uid));
         onSnapshot(q, (doc) => {
          setUserData(doc?.docs[0]?.data());
        });
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
    });
  };

  const initialState = {
    signInWithGoogle: signInWithGoogle,
    loginWithEmailAndPassword: loginWithEmailAndPassword,
    registerWithEmailAndPassword: registerWithEmailAndPassword,
    sendPasswordToUser: sendPasswordToUser,
    signOutUser: signOutUser,
    user: user,
    userData: userData,
  };
  console.log("user ====> ", user);
  console.log("userData ====> ", userData);

  useEffect(() => {
    userStateChanged();
    if (user || userData) {
      navigate("/");
    } else {
      navigate("/login");
    }

    return () =>  userStateChanged();
  }, []);
 

  return (
    <>
      <div>
        <AuthContext.Provider value={initialState}>
          {children}
        </AuthContext.Provider>
      </div>
    </>
  );
};

export default AppContext;
