
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBfiGhtee-Y0GcwguQBaalh6MsajiW3uOI",
    authDomain: "onlinebloodbank-65c31.firebaseapp.com",
    projectId: "onlinebloodbank-65c31",
    storageBucket: "onlinebloodbank-65c31.appspot.com",
    messagingSenderId: "504643442346",
    appId: "1:504643442346:web:946c2d8997d6030747e2d3",
    measurementId: "G-RMC3WPYPES"
  });

  const db =firebaseApp.firestore();
export {db};
   