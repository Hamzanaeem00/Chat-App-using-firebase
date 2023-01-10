import React from 'react'
import firebase from 'firebase'
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDAkWSBzTXnABmpocDjBzx7PyDOvKFI85k",
    authDomain: "chat-app-e879d.firebaseapp.com",
    projectId: "chat-app-e879d",
    storageBucket: "chat-app-e879d.appspot.com",
    messagingSenderId: "474221670868",
    appId: "1:474221670868:web:10b8135b26a1556890a641"
  }).auth();