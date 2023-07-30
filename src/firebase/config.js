// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9v-Z_9zENCOeg5hzZ937qAQN9QMeqfcs",
  authDomain: "mati-shop.firebaseapp.com",
  projectId: "mati-shop",
  storageBucket: "mati-shop.appspot.com",
  messagingSenderId: "702282755180",
  appId: "1:702282755180:web:2d4901ffa8e784f4a93c49",
  measurementId: "G-PD82Q4EJLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
//const analytics = getAnalytics(app);