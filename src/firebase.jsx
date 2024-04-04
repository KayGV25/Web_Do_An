// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGDKNM0fOFfjqhel7nKYe0rKTUUhvlSo",
  authDomain: "coolingbox-2fb54.firebaseapp.com",
  projectId: "coolingbox-2fb54",
  storageBucket: "coolingbox-2fb54.appspot.com",
  messagingSenderId: "110551528855",
  appId: "1:110551528855:web:e6d91238171cc2d9ff40d2",
  measurementId: "G-WXJVT7DH8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);