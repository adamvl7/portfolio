
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBe61AtEEUMx31EmscDSUAh6d3BKht8By0",
  authDomain: "adamleportfolio.firebaseapp.com",
  projectId: "adamleportfolio",
  storageBucket: "adamleportfolio.firebasestorage.app",
  messagingSenderId: "434102609803",
  appId: "1:434102609803:web:5799d85c3c304f0f3f318e",
  measurementId: "G-WKWBDZ0XPG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);