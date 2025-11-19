// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQ7z2cmWnvcmhLqt1XO2_BVt-JdI4O4gg",
  authDomain: "floodalert-bdb4a.firebaseapp.com",
  projectId: "floodalert-bdb4a",
  storageBucket: "floodalert-bdb4a.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",

  // 👇 Add this line with your correct region-based DB URL
  databaseURL: "https://floodalert-bdb4a-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
