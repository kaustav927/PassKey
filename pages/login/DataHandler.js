import firebase from 'firebase/app';
import 'firebase/firestore';

/*
  Example Use-Case:
  EventHandler("kyFZI9NdbiUNLwxrAN5U", "TD3iiELUZF9mRNaqimp7", "register")
  First item is the student_user ID, second the event ID, last item is the operation you'd like to perform.
  There are 5 different operations this function can perform:
        "register" = For when a student registers for an event,
                        appends to "attendeesRegistered" map with timestamp and "eventsRegistered" array with event ID.
        "reject"   = For when a registered student is rejected,
                        pops student ID from "attendeesRegistered" and event ID from "eventsRegistered" array.
        "confirm"  = For when a registered student is confirmed to attend,
                        pops student ID from "attendeesRegistered" and event ID from "eventsRegistered" array.
                        appends to "attendeesConfirmed" array with student ID and "eventsConfirmed" array with event ID.
        "attended" = For when a confirmed student has attended event,
                        pops event ID from "eventsConfirmed" array.
                        appends to "attendeesattended" array with student ID and "eventsPast" array with event ID.
        "past"     = For when a confirmed student has not attended event and event date has passed,
                        pops event ID from "eventsConfirmed" array.
*/

export function DataHandler (userID, changeCase){

    const db = firebase.firestore();

    const userReference = db.collection("user").doc(userID);


    //student initially registering for an event
    if (changeCase == "add"){

      db.collection("user").add({
        name: 'Terry',
        password: '4321'
      });

    }
}

export default DataHandler;
/*
    //student being rejected for an event
    if (changeCase == "reject"){

        userReference.update({
            eventsRegistered: firebase.firestore.FieldValue.arrayRemove(eventID)
        });

        eventReference.update({
            [keyInd] : firebase.firestore.FieldValue.delete()
        });

    }


    //Note: Perform check for student registration on activation

    //student being confirmed for an event
    if (changeCase == "confirm"){

        userReference.update({
            eventsRegistered: firebase.firestore.FieldValue.arrayRemove(eventID)
        });

        userReference.update({
            eventsConfirmed: firebase.firestore.FieldValue.arrayUnion(eventID)
        });


        eventReference.update({
            attendeesConfirmed: firebase.firestore.FieldValue.arrayUnion(userID)
        });

        eventReference.update({
            [keyInd] : firebase.firestore.FieldValue.delete()
        });
    }


    //an event completing and being denoted as past
    if (changeCase == "attended"){

        userReference.update({
            eventsPast: firebase.firestore.FieldValue.arrayUnion(eventID)
        });

        userReference.update({
            eventsConfirmed: firebase.firestore.FieldValue.arrayRemove(eventID)
        });

        eventReference.update({
            attendeesAttended: firebase.firestore.FieldValue.arrayUnion(userID)
        });
    }


    //an event completing, but the student did not attend
    if (changeCase == "past"){

        userReference.update({
            eventsConfirmed: firebase.firestore.FieldValue.arrayRemove(eventID)
        });
    }*/
