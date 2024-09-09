import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID

  // apiKey: process.env.API_KEY,
  // authDomain:process.env.AUTH_DOMAIN,
  // projectId:process.env.PROJECT_ID,
  // storageBucket:process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID

  // apiKey: "AIzaSyDHwXr5_Z24WwH1qKpzz05xoKhhQ7PXLuE",
  // authDomain: "folder-manager-48280.firebaseapp.com",
  // projectId: "folder-manager-48280",
  // storageBucket: "folder-manager-48280.appspot.com",
  // messagingSenderId: "506737202766",
  // appId: "1:506737202766:web:7e133754dd4899d1c6951f"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db };