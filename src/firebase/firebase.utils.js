import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdAb7B82jCk7SY3xh9dtVcR6rQJiOtqGA",
    authDomain: "zen-db-c6618.firebaseapp.com",
    databaseURL: "https://zen-db-c6618.firebaseio.com",
    projectId: "zen-db-c6618",
    storageBucket: "",
    messagingSenderId: "365686922556",
    appId: "1:365686922556:web:de54304e73294e4c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;