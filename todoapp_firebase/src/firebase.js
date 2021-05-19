
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAser42jaNVpwv8vCtdOKMV9Dy8Ac4emoQ",
    authDomain: "todo-app-cp-b726f.firebaseapp.com",
    projectId: "todo-app-cp-b726f",
    storageBucket: "todo-app-cp-b726f.appspot.com",
    messagingSenderId: "38652377537",
    appId: "1:38652377537:web:1cf63ff260e5238f2d1740",
    measurementId: "G-HC2VNMB716"
  });

  const db = firebaseApp.firestore();
  export default db;