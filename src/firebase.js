import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgFdYlJmEb6bSfaV0T-F9m7AJnqwecZnI",
  authDomain: "todo-app-cp-71164.firebaseapp.com",
  projectId: "todo-app-cp-71164",
  storageBucket: "todo-app-cp-71164.appspot.com",
  messagingSenderId: "751309348610",
  appId: "1:751309348610:web:6666c9f10063d7a88f2c1b",
  measurementId: "G-G04KBY9HSM",
});



const db = firebaseApp.firestore();

export default db;