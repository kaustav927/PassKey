import firebase from 'firebase/app';
import 'firebase/firestore';

export function CreateUserDB (ID, fName, lName, email, address, pNumber){

    const db = firebase.firestore();

    const userData = {
        MAP_points: 0,
        MAP_points_goal: 0,
        address: address,
        badges: [],
        emailAddress: email,
        eventsConfirmed: [],
        eventsPast: [],
        eventsRegistered: [],
        fName: fName,
        image: "",
        lName: lName,
        phoneNumber: pNumber,
        skills: [],
        volunteerHours: 0,
        volunteer_hours_goal: 0 
    };

    db.collection('student_user').doc(ID).set(userData);
} 