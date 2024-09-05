import "server-only"
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const docId = url.pathname.split('/').pop();
  try {
    if (docId) {
      const docRef = doc(db, 'Test', docId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        return NextResponse.json({status: 503})
      }
      return NextResponse.json({id: docSnap.id , ...docSnap.data()})
    }
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}