// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYutRwkOOtaQFpjz9dURhTYTSjP8LzEE",
  authDomain: "netflixgpt-84d85.firebaseapp.com",
  projectId: "netflixgpt-84d85",
  storageBucket: "netflixgpt-84d85.appspot.com",
  messagingSenderId: "268536776019",
  appId: "1:268536776019:web:e5939e5aa1b8318aff0da6",
  measurementId: "G-CTHREGQKT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();