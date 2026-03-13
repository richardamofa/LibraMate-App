import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB08RMqtVmN9LygWTXGawFKob2OHnFqBnk",
  authDomain: "libratemate.firebaseapp.com",
  projectId: "libratemate",
  storageBucket: "libratemate.firebasestorage.app",
  messagingSenderId: "678742848526",
  appId: "1:678742848526:web:34453f137eacfaeafd385f",
  measurementId: "G-NJY893D746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

export default app;