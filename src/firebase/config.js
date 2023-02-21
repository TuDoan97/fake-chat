import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByUE59ME3nbjeKnll5wS38lqgXeyJ31aA",
  authDomain: "chat-app-d51ec.firebaseapp.com",
  projectId: "chat-app-d51ec",
  storageBucket: "chat-app-d51ec.appspot.com",
  messagingSenderId: "53021164086",
  appId: "1:53021164086:web:45434ab16594ef920b0e97",
  measurementId: "G-BEJP2JL561",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
