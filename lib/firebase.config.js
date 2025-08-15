// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkt4p6MAwUroSYCl-Ql19TbB25A3BLWss",
  authDomain: "tastyslides-a6b25.firebaseapp.com",
  projectId: "tastyslides-a6b25",
  storageBucket: "tastyslides-a6b25.firebasestorage.app",
  messagingSenderId: "536352844069",
  appId: "1:536352844069:web:4fbf438196fc44694912cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };