// src/firebase/firebase.config.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7EMGTH-5gqL7HR95dQMFr7vooqXRA2zg",
  authDomain: "resume-builder-37a35.firebaseapp.com",
  projectId: "resume-builder-37a35",
  storageBucket: "resume-builder-37a35.firebasestorage.app",
  messagingSenderId: "191475442805",
  appId: "1:191475442805:web:f78aaa70a615f96303443c",
  measurementId: "G-CVCW570GHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export initialized services
export { app, auth, analytics };
