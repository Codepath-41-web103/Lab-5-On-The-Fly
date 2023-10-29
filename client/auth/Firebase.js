import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUUOhaRRD5u87whOiJC5vIMu-fI0ypUeM",
  authDomain: "onthefly-cbbed.firebaseapp.com",
  projectId: "onthefly-cbbed",
  storageBucket: "onthefly-cbbed.appspot.com",
  messagingSenderId: "879596370370",
  appId: "1:879596370370:web:4d60a49cc55aa03992be5b",
  measurementId: "G-JV8N7CLJSQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
