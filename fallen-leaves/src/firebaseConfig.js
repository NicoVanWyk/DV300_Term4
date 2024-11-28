// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBa8_XMOepbKu5tPeA0sZXVnuDOzcu_Hgo",
    authDomain: "fallenleaves-9338c.firebaseapp.com",
    projectId: "fallenleaves-9338c",
    storageBucket: "fallenleaves-9338c.appspot.com",
    messagingSenderId: "487173373243",
    appId: "1:487173373243:web:c97ac37ab10b071745cb1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (if using Firestore)
const db = getFirestore(app);

// Export Firebase authentication module
const auth = getAuth(app);

export { db, auth };