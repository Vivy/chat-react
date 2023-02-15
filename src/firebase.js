import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBQddfKcfdtdsDFm9DoMVwOgXrZ5dpBEqI",
  authDomain: "chatme-d1886.firebaseapp.com",
  projectId: "chatme-d1886",
  storageBucket: "chatme-d1886.appspot.com",
  messagingSenderId: "444666001072",
  appId: "1:444666001072:web:b682030c80d8bac55b6d75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

