import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxFLQrmYinSJPdZ3MggGrFJ5NCaVv6opk",
  authDomain: "nexxavibe.firebaseapp.com",
  projectId: "nexxavibe",
  storageBucket: "nexxavibe.appspot.com",
  messagingSenderId: "653020022713",
  appId: "1:653020022713:web:f22637a0805223de201868",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, onAuthStateChanged };
