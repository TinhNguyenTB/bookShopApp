// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3rIP56uyrx27_FT_8UHeTHx6buShZMAE",
    authDomain: "bookshop-27440.firebaseapp.com",
    projectId: "bookshop-27440",
    storageBucket: "bookshop-27440.appspot.com",
    messagingSenderId: "738050438158",
    appId: "1:738050438158:web:4a344e4d66c2bc9833385f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const authentication = getAuth(app);
const database = getFirestore();

module.exports = { authentication, database };