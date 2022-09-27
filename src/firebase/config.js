import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJib_YUN9TLK5hquYy_x-EC57BWq39eBU",
  authDomain: "project-management-site-7cfb5.firebaseapp.com",
  projectId: "project-management-site-7cfb5",
  storageBucket: "project-management-site-7cfb5.appspot.com",
  messagingSenderId: "34498698839",
  appId: "1:34498698839:web:f82579734955024f140d12",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp, projectStorage };
