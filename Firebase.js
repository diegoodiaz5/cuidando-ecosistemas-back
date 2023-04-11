const { initializeApp } = require('firebase/app');
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyD3FC5t4_tENyGB6U-WEC2IzuDtjFbXpHk",
    authDomain: "plantas-coding-challenge-69c03.firebaseapp.com",
    projectId: "plantas-coding-challenge-69c03",
    storageBucket: "plantas-coding-challenge-69c03.appspot.com",
    messagingSenderId: "695250842283",
    appId: "1:695250842283:web:5f508edf7e84f9983d7dee",
    measurementId: "G-MC938LP8GG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = {
    auth, db
}