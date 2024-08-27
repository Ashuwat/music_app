import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import "server-only"
import { db } from "../../../firebase/firebaseConfig";
import { NextResponse } from "next/server";
import { stringify } from "querystring";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const docId = url.pathname.split('/').pop();
    console.log(docId)
  
    if (!docId) {
      return NextResponse.json({error: "doc not found"}, { status: 404})
    }

    const docRef = doc(db, 'Test', docId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      return NextResponse.json({ error: 'doc not found' }, { status: 404 });
    }

    // Respond with the document data
    return NextResponse.json({ id: docSnapshot.id, ...docSnapshot.data() });
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}