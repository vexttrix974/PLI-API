import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQVQ-D2xwH4kR29gCxKLfSUMNbdYozlC4",
  authDomain: "api-d71e2.firebaseapp.com",
  projectId: "api-d71e2",
  storageBucket: "api-d71e2.appspot.com",
  messagingSenderId: "462300610476",
  appId: "1:462300610476:web:51c78a59d2cc72dddb0409",
};


// initialise l'application firebase
export const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)

