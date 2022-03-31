import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {
 getAuth,
 signInWithRedirect,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


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
export const signInWithGoogle =  async () =>{
  const {user} = await auth.signInWithPopup(provider);
  createUserDocumentFromAuth(user);
}
export const signInGoogleRedirect = () => auth.signInWithRedirect(provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName, email, createdAt
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }
  return userDocRef;

}
export default firebase;