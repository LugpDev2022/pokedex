// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7h058T7Ch4eQIFq9xfwz3ytPwVUp2MkM",
  authDomain: "pokedex-lugp.firebaseapp.com",
  projectId: "pokedex-lugp",
  storageBucket: "pokedex-lugp.appspot.com",
  messagingSenderId: "949727165487",
  appId: "1:949727165487:web:d6a0b3db2a41441c991ada",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
