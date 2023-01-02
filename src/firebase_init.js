// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDyH4Ty84VqviTdmFXO9-k0BdPKzbJq-tE",
    authDomain: "genius-car-6a153.firebaseapp.com",
    projectId: "genius-car-6a153",
    storageBucket: "genius-car-6a153.appspot.com",
    messagingSenderId: "1045197454794",
    appId: "1:1045197454794:web:699f28891450a4b29c6333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 