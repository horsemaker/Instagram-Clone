import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBD070VCeU7iiPsuyzR2kq_dxm26kxulgQ",
    authDomain: "instagram-clone-react-a0c3f.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-a0c3f.firebaseio.com",
    projectId: "instagram-clone-react-a0c3f",
    storageBucket: "instagram-clone-react-a0c3f.appspot.com",
    messagingSenderId: "129462358366",
    appId: "1:129462358366:web:bbda5b4e0d9157828fbfcf",
    measurementId: "G-MQKCQ4DTZG"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};