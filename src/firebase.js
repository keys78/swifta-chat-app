import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDy1KMYIaQlDmkprZartuAMZZAi6yk71-8",
    authDomain: "swiftachat-f18ff.firebaseapp.com",
    projectId: "swiftachat-f18ff",
    storageBucket: "swiftachat-f18ff.appspot.com",
    messagingSenderId: "319220382957",
    appId: "1:319220382957:web:7f0878791bff9b1bc720e4"
  }).auth();