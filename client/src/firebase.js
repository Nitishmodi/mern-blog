// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8d6bc.firebaseapp.com",
  projectId: "mern-blog-8d6bc",
  storageBucket: "mern-blog-8d6bc.appspot.com",
  messagingSenderId: "33939838503",
  appId: "1:33939838503:web:ed9aa14a9271f3aa196002"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);