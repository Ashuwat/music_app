import { collection, doc, getDoc, addDoc } from "firebase/firestore";
import "server-only"
import { db } from "../../firebase/firebaseConfig";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
      const formData = await req.json()
      const docRef = await addDoc(collection(db, "Test"), {
        url: formData.url,
        animatetype: formData.animatetype,
      });
      // Respond with the document data
      return NextResponse.json({id: docRef.id});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }