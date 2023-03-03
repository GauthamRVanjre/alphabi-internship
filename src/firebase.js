// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcCcSMC3TGWdYiVDQkXlW6er07Ph99QZc",
  authDomain: "alphabi-internship.firebaseapp.com",
  projectId: "alphabi-internship",
  storageBucket: "alphabi-internship.appspot.com",
  messagingSenderId: "668075028411",
  appId: "1:668075028411:web:579951d131a68d8a589e9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
