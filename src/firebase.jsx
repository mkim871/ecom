import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4jE7D6BvrKpdoWOMBzWTx5_qItjFjjDM",
  authDomain: "ecom-410fe.firebaseapp.com",
  databaseURL: "https://ecom-410fe.firebaseio.com",
  projectId: "ecom-410fe",
  storageBucket: "ecom-410fe.appspot.com",
  messagingSenderId: "950442764055",
  appId: "1:950442764055:web:2873b1f027efd04117f952",
  measurementId: "G-CSL4BPBNQ2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();