import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getDoc, setDoc, doc, getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC665TtrUX_ltb0bNlzRUV6KdAF1F1IPLk',
  authDomain: 'clotheskart-db.firebaseapp.com',
  projectId: 'clotheskart-db',
  storageBucket: 'clotheskart-db.appspot.com',
  messagingSenderId: '948594019994',
  appId: '1:948594019994:web:1854b102c3b91899775923',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // if user doesn't exist in DB we add it.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error while creating the user', error.message);
    }
  }
  return userDocRef;
};
