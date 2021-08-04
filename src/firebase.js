import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyAUKDXijoQdwFk_yP6PR_7xbofrX5ANx0M",
  authDomain: "fir-c5749.firebaseapp.com",
  projectId: "fir-c5749",
  storageBucket: "fir-c5749.appspot.com",
  messagingSenderId: "899526868501",
  appId: "1:899526868501:web:8e3c4419afa36bab21181c",
  measurementId: "G-LNRWRJWH0H"
};

const db =firebase.firestore()
const auth = firebase.auth()
export {db,auth}