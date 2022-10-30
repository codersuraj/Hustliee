// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRFXgzOzdHdcpxmoaf97t3cju0BkYmZ_I",
  authDomain: "od-proj-demo.firebaseapp.com",
  projectId: "od-proj-demo",
  storageBucket: "od-proj-demo.appspot.com",
  messagingSenderId: "163830181782",
  appId: "1:163830181782:web:3f7bd1d29f1cf790a937b7",
  measurementId: "G-3STBHF8DZY"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();

export{db, auth}
