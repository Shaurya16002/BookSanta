import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCsHrCaUaQVgF8JysnhClC8q2KL7Knsw8k",
    authDomain: "booksanta-66d7f.firebaseapp.com",
    projectId: "booksanta-66d7f",
    storageBucket: "booksanta-66d7f.appspot.com",
    messagingSenderId: "488034641427",
    appId: "1:488034641427:web:07d4f9e23d28e4a55a41e6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
