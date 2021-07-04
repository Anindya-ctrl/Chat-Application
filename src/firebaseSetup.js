import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// INITIALIZE APP WITH CONFIG
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// AUTHENTICATION INSTANCE
export const auth = app.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// ACCESS TO DATABASE
const firestore = app.firestore();
export const DATABASE = {
    rooms: firestore.collection('rooms'),
    formatDoc: doc => ({
        id: doc.id,
        data: doc.data(),
    }),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};
