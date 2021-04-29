import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCWmofMOYupJNpu5Rjb2d54Xe9MJS_iViA",
    authDomain: "galeria-40f45.firebaseapp.com",
    projectId: "galeria-40f45",
    storageBucket: "galeria-40f45.appspot.com",
    messagingSenderId: "891328408971",
    appId: "1:891328408971:web:aa9521c1a4417440c1d38e",
    measurementId: "G-8HLBFRHTZ1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {
    projectStorage,
    projectFirestore,
    timestamp
};