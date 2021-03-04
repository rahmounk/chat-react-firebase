import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAlnc87s8Rsol7vDK9vC_1KY38CRR3JpTQ",
    authDomain: "saltychat-2698d.firebaseapp.com",
    projectId: "saltychat-2698d",
    storageBucket: "saltychat-2698d.appspot.com",
    messagingSenderId: "502956998530",
    appId: "1:502956998530:web:3befe3526922080e43599b",
};

firebase.initializeApp(config);

export default firebase;
export const  auth = firebase.auth;
export const db = firebase.firestore();