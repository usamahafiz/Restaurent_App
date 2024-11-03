import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey:  "AIzaSyCNr7SKDdbBPHoWNFihy-h_Hl39MNne5Oo",
  authDomain: "e-commerce-app-001.firebaseapp.com",
  projectId: "e-commerce-app-001",
  storageBucket: "e-commerce-app-001.appspot.com",
  messagingSenderId:  "539834128246",
  appId: "1:539834128246:web:0c2138865483f128a0cc57",
  measurementId: "G-GHP0KQ5RE1"
  // apiKey: process.env.REACT_APP_FIREBASE_apikey,
  // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  // projectId: process.env.REACT_APP_FIREBASE_projectId,
  // storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBASE_appId,
  // measurementId: process.env.REACT_APP_FIREBASE_measurementId
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const storage = getStorage(app);

// Export Firebase services and functions
export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  ref,
  uploadBytes,
  uploadBytesResumable
};
