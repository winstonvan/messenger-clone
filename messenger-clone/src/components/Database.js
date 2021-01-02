import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAICn1aR9oLycshcw2pvXBvPpo2-b0r4II",
  authDomain: "messenger-49479.firebaseapp.com",
  projectId: "messenger-49479",
  storageBucket: "messenger-49479.appspot.com",
  messagingSenderId: "550368525677",
  appId: "1:550368525677:web:53629bd6c03377266eee64",
  measurementId: "G-F8RNZ1MSB3",
});

const db = firebaseApp.firestore();

export default db;
