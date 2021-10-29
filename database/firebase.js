// Import the functions you need from the SDKs you need
import firebase from 'firebase';

import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXSUTlEkzqmxPy0gOd1cXP2ztrCk96yb8",
  authDomain: "reserva-cena.firebaseapp.com",
  projectId: "reserva-cena",
  storageBucket: "reserva-cena.appspot.com",
  messagingSenderId: "607519490398",
  appId: "1:607519490398:web:c7af9087adc0825a9d0fcf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
    firebase,
    db
}
