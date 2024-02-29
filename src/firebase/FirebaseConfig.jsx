// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8HHkGwkvl7TuIEgU7y3Ww5VqK3CwguEU",
  authDomain: "e-commerce-website-a2299.firebaseapp.com",
  projectId: "e-commerce-website-a2299",
  storageBucket: "e-commerce-website-a2299.appspot.com",
  messagingSenderId: "173881355880",
  appId: "1:173881355880:web:f2fd2a1faf6d418f3855dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireBD = getFirestore(app);
const auth = getAuth(app);

export { fireBD, auth };
