// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiXjxNH4h008yYvas25HyrAFi-qpyll3o",
  authDomain: "moneytracker-5ad6b.firebaseapp.com",
  projectId: "moneytracker-5ad6b",
  storageBucket: "moneytracker-5ad6b.appspot.com",
  messagingSenderId: "699903150175",
  appId: "1:699903150175:web:fdc93bb9c795b32ea9b3ea",
  measurementId: "G-N78WYW8Q1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy