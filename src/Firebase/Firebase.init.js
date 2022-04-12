// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLsyCYh_ZQLJEgsl17bLjlXxFoBHEiikg",
  authDomain: "tech-geeks-f1524.firebaseapp.com",
  projectId: "tech-geeks-f1524",
  storageBucket: "tech-geeks-f1524.appspot.com",
  messagingSenderId: "646364890326",
  appId: "1:646364890326:web:9fcceb4f90cd9d9aa3f577",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
