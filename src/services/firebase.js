import firebase from 'firebase';
import * as firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: firebaseConfig.firebaseKey,
    authDomain: firebaseConfig.firebaseDomain,
    databaseURL: firebaseConfig.firebaseDatabase,
    projectId: firebaseConfig.firebaseProjectID,
    storageBucket: firebaseConfig.firebaseStorageBucket,
    messagingSenderId: firebaseConfig.firebaseSenderID,
    appId: firebaseConfig.firebaseAppID
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database;
export default firebase;