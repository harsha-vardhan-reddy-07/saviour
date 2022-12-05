import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrX_A-F05d85ETT79nL-_RhX93DCZXlq8",
  authDomain: "saviour-network.firebaseapp.com",
  projectId: "saviour-network",
  storageBucket: "saviour-network.appspot.com",
  messagingSenderId: "214368256524",
  appId: "1:214368256524:web:b339fdbf31c32227916429",
  measurementId: "G-KD8YB5FX24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);