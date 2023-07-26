// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBdMbdkFrQJyEZyBUnRQZkkttTCTOrMKg",
    authDomain: "ecommerce-app-9dbed.firebaseapp.com",
    projectId: "ecommerce-app-9dbed",
    storageBucket: "ecommerce-app-9dbed.appspot.com",
    messagingSenderId: "1005286051196",
    appId: "1:1005286051196:web:2f6c0ec1411befce21e8f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth };