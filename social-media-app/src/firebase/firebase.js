// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoOxKPkPVdanX6LvUr52idm9KhPFvAPWQ",
  authDomain: "socialapp-135d5.firebaseapp.com",
  projectId: "socialapp-135d5",
  storageBucket: "socialapp-135d5.appspot.com",
  messagingSenderId: "696048194775",
  appId: "1:696048194775:web:f7a9adb5ee67c0f98b4c92",
  measurementId: "G-49MKJQY27E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
