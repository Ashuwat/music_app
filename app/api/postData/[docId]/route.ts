import "server-only"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { NextResponse } from "next/server";

//NEEDS DOCID, POSTDATA
export async function POST(request: Request) {
  try {
    const response = await request.json();
    await setDoc(doc(db, 'Test', response.docId), 
        response.postData,
        {merge: true});
      console.log(response)
    return NextResponse.json({data: response.postData}, {status: 200});

  } catch (error) {
    console.error('did not add doc', error);
    return NextResponse.json({error: 'error'});
  }
}