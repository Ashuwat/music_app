import "server-only"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const response = await request.json();
      await setDoc(doc(db, 'Test', response.docId), {
          url: response.url
        }, {merge: true});
      return NextResponse.json({url: response.url}, {status: 200});
  
    } catch (error) {
      console.error('did not add doc', error);
      return NextResponse.json({error: 'error'});
    }
  }