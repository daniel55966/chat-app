// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRxEErJwaHvIT2UQd2uNRX5O43doc2KY",
  authDomain: "react-chat-ac5c9.firebaseapp.com",
  projectId: "react-chat-ac5c9",
  storageBucket: "react-chat-ac5c9.appspot.com",
  messagingSenderId: "293160642197",
  appId: "1:293160642197:web:c6449e4cf446c20e795d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);