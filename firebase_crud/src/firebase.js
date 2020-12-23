import firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
    apiKey: "AIzaSyDmIteLNvywwBwMERCv0VZByIrHYKGOs4o",
    authDomain: "react-crud-3e342.firebaseapp.com",
    databaseURL: "https://react-crud-3e342-default-rtdb.firebaseio.com",
    projectId: "react-crud-3e342",
    storageBucket: "react-crud-3e342.appspot.com",
    messagingSenderId: "29037837684",
    appId: "1:29037837684:web:5d55af6fc71182143e8021"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


  export default fireDb.database().ref();
   
  