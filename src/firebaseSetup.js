import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// INITIALIZE APP WITH CONFIG
const app = firebase.initializeApp({
    apiKey: 'AIzaSyBw0A_GJ9IBhLOTiwIWOlV5L9HqGU9lfUQ',
    authDomain: 'spotify-clone-4741e.firebaseapp.com',
    projectId: 'spotify-clone-4741e',
    storageBucket: 'spotify-clone-4741e.appspot.com',
    messagingSenderId: '715251104000',
    appId: '1:715251104000:web:b77190e8ba6907ab18dbe5',
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
