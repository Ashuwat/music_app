import { addDoc, collection } from "firebase/firestore";
import "server-only"
import { db } from "../../../firebase/firebaseConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const url = new URL(request.url)
      const docId = url.pathname.split('/').pop();
      console.log(docId)

      if (!docId) {
        return NextResponse.json({error: "doc not found"})
      }

      const something = await request.json();

      await addDoc(collection(db, 'Test', docId), {
        something: something
      });

      console.log('sent to firebase');
  
      return NextResponse.json({ message: 'hello' });
    } catch (error) {
      console.error('did not add doc', error);
      return NextResponse.json({error: 'error'});
    }
  }