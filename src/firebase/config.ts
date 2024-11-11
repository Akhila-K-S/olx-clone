import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwbKiZVZZ5zl_NeioKc8kFTrzcz3SpCXo",
    authDomain: "olx-clone-4f8d3.firebaseapp.com",
    projectId: "olx-clone-4f8d3",
    storageBucket: "olx-clone-4f8d3.appspot.com",
    messagingSenderId: "713483952397",
    appId: "1:713483952397:web:4234429a50e20f85395044",
    measurementId: "G-MRFG9NTFMS",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(firebase);

// Initialize Firestore and export it
export const db = getFirestore(firebase);

export default firebase;
