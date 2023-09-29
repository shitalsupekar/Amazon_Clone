// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7omI21jZc1QgVaXZiGmCGcoV0lJWtYOE",
  authDomain: "challenge-dea9a.firebaseapp.com",
  projectId: "challenge-dea9a",
  storageBucket: "challenge-dea9a.appspot.com",
  messagingSenderId: "396680774395",
  appId: "1:396680774395:web:f730c5f70360c9edfc265e",
  measurementId: "G-5CHD45ZT3B"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword};
