// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOrv2fku_YJu0cpoKrdkJIAaWvgTq9nus",
    authDomain: "ema-john-simple-2aa46.firebaseapp.com",
    projectId: "ema-john-simple-2aa46",
    storageBucket: "ema-john-simple-2aa46.appspot.com",
    messagingSenderId: "115971733689",
    appId: "1:115971733689:web:5b9faa6a6d33c527620368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;