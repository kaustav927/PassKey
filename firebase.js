import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/analytics";

//contains the firebase configurations required to use the firebase API
// Future todo: put config info into separate .env folder

const firebaseConfig = {
    apiKey: "AIzaSyCh4Fp19F_1k5Q3s3oGyEu8NGX6ejtf2Y0",
    authDomain: "lock4life-27bc1.firebaseapp.com",
    projectId: "lock4life-27bc1",
    storageBucket: "lock4life-27bc1.appspot.com",
    messagingSenderId: "730919945212",
    appId: "1:730919945212:web:adbe10a8e286877596e879",
    measurementId: "G-81ZZRG53FK"
  };

const app = firebase.initializeApp(firebaseConfig);

export default app;
