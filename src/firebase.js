import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCy0NFsV7ms4Uu8eklczeohUOzRENeNuXc",
    authDomain: "fir-app-87099.firebaseapp.com",
    databaseURL: "https://fir-app-87099.firebaseio.com",
    projectId: "fir-app-87099",
    storageBucket: "fir-app-87099.appspot.com",
    messagingSenderId: "319408990385",
    appId: "1:319408990385:web:df8bf458cd9d17f98bda90",
    measurementId: "G-WY23DWH5E0"
  };
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("sw.js") // service worker file location
//       .then(function() {
//         console.log("Service Worker Registered Successfully");
//       })
//       .catch(function(error) {
//         console.error("Something goes wrong while registering service worker");
//         console.log(error);
//       });
//   } else {
//     console.log("Service Worker is not available");
//   }
  /// Here we are going to initialize the firebase config
  firebase.initializeApp(firebaseConfig);
  export default firebase;