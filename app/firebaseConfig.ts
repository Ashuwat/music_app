import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID

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