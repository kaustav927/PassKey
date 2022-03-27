import 'firebase/firestore';
import firebase from 'firebase/app';
import { CreateUserDB } from './CreateUserDB';

export function CreateUserAuth (fName, lName, email, address, phoneNumber){

var config = {apiKey: "AIzaSyBj1YR2bV63Low7vGWYhIw8M71cdrE7ywA",
    authDomain: "bcg-firebase.firebaseapp.com",
    databaseURL: "https://bcg-firebase-default-rtdb.firebaseio.com"};
var secondaryApp = firebase.initializeApp(config, "Tertiary");

secondaryApp.auth().createUserWithEmailAndPassword(email, 'defaultpass').then(function(firebaseUser) {
    console.log("User " + firebaseUser.uid + " created successfully!");
    CreateUserDB(firebaseUser.uid, fName, lName, email, address, phoneNumber);
    secondaryApp.auth().signOut();
});
} 