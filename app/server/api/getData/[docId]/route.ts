import "server-only"
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { NextResponse } from "next/server";
import { stringify } from "querystring";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const docId = url.pathname.split('/').pop();
    
    if (docId) {
    const docRef = doc(db, 'Test', docId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.log(`doc doesn't exist`)
      return NextResponse.redirect(new URL('/'));
    }
    else {
      return NextResponse.json({ id: docSnapshot.id, ...docSnapshot.data() });
    }
  }
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}