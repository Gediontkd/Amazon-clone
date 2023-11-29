// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHe2rnv305q19uAO8q_GgGS0_81cZwmqM",
  authDomain: "clone-a5508.firebaseapp.com",
  projectId: "clone-a5508",
  storageBucket: "clone-a5508.appspot.com",
  messagingSenderId: "670468544110",
  appId: "1:670468544110:web:4fa7fcc5b7fb6313dd787f",
  measurementId: "G-CWDTM4VX31"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export {auth};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };