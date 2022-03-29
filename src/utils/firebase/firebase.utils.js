import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCQB4Pb9XLfyBBySDF3a31rUYmivCgC8aw",
  authDomain: "crwn-db-b5006.firebaseapp.com",
  projectId: "crwn-db-b5006",
  storageBucket: "crwn-db-b5006.appspot.com",
  messagingSenderId: "911242289295",
  appId: "1:911242289295:web:93e98e18cfcc48ebe350fa",
  measurementId: "G-14J56KHVET"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;