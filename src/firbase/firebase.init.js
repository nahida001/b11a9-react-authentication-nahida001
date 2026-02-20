// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOHwxgOWSolfyuG2PyEKh5Ek2wsfnJ_eE",
  authDomain: "conferences-8cbea.firebaseapp.com",
  projectId: "conferences-8cbea",
  storageBucket: "conferences-8cbea.firebasestorage.app",
  messagingSenderId: "488204823188",
  appId: "1:488204823188:web:390f9f2ac5134da1c72281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;