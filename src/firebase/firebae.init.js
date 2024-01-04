import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAid7wOj_GG1PXAsQuvUOHPiLrjK8A4FkI",
    authDomain: "email-pass-verification-64048.firebaseapp.com",
    projectId: "email-pass-verification-64048",
    storageBucket: "email-pass-verification-64048.appspot.com",
    messagingSenderId: "1078432310392",
    appId: "1:1078432310392:web:4423c29ff815d2a792798d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;