// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz5AwKq8qNs-AyOr3rImfpxN8KVGDJQ3M",
    authDomain: "edu-project-2423e.firebaseapp.com",
    databaseURL: "https://edu-project-2423e-default-rtdb.firebaseio.com",
    projectId: "edu-project-2423e",
    storageBucket: "edu-project-2423e.appspot.com",
    messagingSenderId: "389819896862",
    appId: "1:389819896862:web:adcd1bdae0180e2e1b8a0f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;