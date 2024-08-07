// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpp5oQ5B9hMKYMfUW3nctEYIrGnLc4Io8",
  authDomain: "trip-planner-b2900.firebaseapp.com",
  projectId: "trip-planner-b2900",
  storageBucket: "trip-planner-b2900.appspot.com",
  messagingSenderId: "485809939508",
  appId: "1:485809939508:web:bac606fc0a98a36f78d661",
  measurementId: "G-BTR8ZJ5HTG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);