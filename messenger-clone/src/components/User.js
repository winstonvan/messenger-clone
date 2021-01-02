import React from "react";
import firestore from "./firestore";

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

class User extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="fullname" placeholder="Full name" />
        <input type="email" name="email" placeholder="Full name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
