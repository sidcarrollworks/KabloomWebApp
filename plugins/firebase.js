// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJkOSJNKnYmLDSMQdYNpvSGygJwe8K4w",
  authDomain: "kabloom-demo.firebaseapp.com",
  projectId: "kabloom-demo",
  storageBucket: "kabloom-demo.appspot.com",
  messagingSenderId: "534888656244",
  appId: "1:534888656244:web:35d6f5c428937a9f61d021",
  measurementId: "G-KP9YLR55SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');