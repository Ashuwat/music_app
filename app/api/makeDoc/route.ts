import "server-only"
import { collection, doc, getDoc, addDoc } from "firebase/firestore";
import {db} from '../../firebaseConfig'
import { NextResponse } from "next/server";
import { randomInt } from "crypto";

export async function POST(req: Request) {
    try {
      const randomGroupCode: number = randomInt(111111, 999999);

      const formData = await req.json()
      const docRef = await addDoc(collection(db, "Test"), {
        url: formData.url,
        animatetype: formData.animatetype,
        groupCode: randomGroupCode
      });
      // Respond with the document data
      return NextResponse.json({id: docRef.id, groupCode: randomGroupCode});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }