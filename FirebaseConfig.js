// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3rIP56uyrx27_FT_8UHeTHx6buShZMAE",
    authDomain: "bookshop-27440.firebaseapp.com",
    projectId: "bookshop-27440",
    storageBucket: "bookshop-27440.appspot.com",
    messagingSenderId: "738050438158",
    appId: "1:738050438158:web:4a344e4d66c2bc9833385f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

initializeAuth(firebase.initializeApp(firebaseConfig), {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { firebase };