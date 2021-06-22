// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtHVds3Lv34OObE01k0bmkImdO6s7Ow2w",
    authDomain: "amzon-6d759.firebaseapp.com",
    projectId: "amzon-6d759",
    storageBucket: "amzon-6d759.appspot.com",
    messagingSenderId: "475487741749",
    appId: "1:475487741749:web:cb6d12cfb3523fe7c40e7c",
    measurementId: "G-78RW4K1R78"
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig)
    : firebase.app();
const db = app.firestore();
export default db;