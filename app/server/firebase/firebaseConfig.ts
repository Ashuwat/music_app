import 'server-only'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { onSnapshot } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHwXr5_Z24WwH1qKpzz05xoKhhQ7PXLuE",
  authDomain: "folder-manager-48280.firebaseapp.com",
  projectId: "folder-manager-48280",
  storageBucket: "folder-manager-48280.appspot.com",
  messagingSenderId: "506737202766",
  appId: "1:506737202766:web:7e133754dd4899d1c6951f"
};


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db };