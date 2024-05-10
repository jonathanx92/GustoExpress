import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVGtmjHGJu2CA5QE_Y8_pyzjZoriXPYjI",
  authDomain: "gustoexpress-d9df8.firebaseapp.com",
  projectId: "gustoexpress-d9df8",
  storageBucket: "gustoexpress-d9df8.appspot.com",
  messagingSenderId: "780392660960",
  appId: "1:780392660960:web:ef4c9e7e4addcaeacb7585"
};

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
