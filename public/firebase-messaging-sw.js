importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCy0NFsV7ms4Uu8eklczeohUOzRENeNuXc",
    authDomain: "fir-app-87099.firebaseapp.com",
    databaseURL: "https://fir-app-87099.firebaseio.com",
    projectId: "fir-app-87099",
    storageBucket: "fir-app-87099.appspot.com",
    messagingSenderId: "319408990385",
    appId: "1:319408990385:web:df8bf458cd9d17f98bda90",
    measurementId: "G-WY23DWH5E0"
  })

//Now have to call the messaging function

firebase.messaging();