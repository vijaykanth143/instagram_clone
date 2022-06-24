// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyA3_oO5uELHS2_BzKyA62DpQ7Gd0tRl6bM',
  authDomain: 'rn-instagram-clone-6bf5e.firebaseapp.com',
  projectId: 'rn-instagram-clone-6bf5e',
  storageBucket: 'rn-instagram-clone-6bf5e.appspot.com',
  messagingSenderId: '887368227064',
  appId: '1:887368227064:web:7860fadaf8c5e874c9430d',
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);
export const db = getFirestore(firebaseConfig);
