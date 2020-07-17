import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAQwdP2G_4IAWSULXur_oLg7jvQy502eSE",
  authDomain: "travel-hacker-b5fc2.firebaseapp.com",
  databaseURL: "https://travel-hacker-b5fc2.firebaseio.com",
  projectId: "travel-hacker-b5fc2",
  storageBucket: "travel-hacker-b5fc2.appspot.com",
  messagingSenderId: "812038824612"
};

export const firebaseApp = firebase.initializeApp(config);
export const cardRef = firebase.database().ref("cards");
export const filteredCardRef = firebase.database().ref("filteredCards");
