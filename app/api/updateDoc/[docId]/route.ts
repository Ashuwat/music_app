import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import "server-only"
import { db } from "../../../firebaseConfig"
import { resolve } from "path"
import { NextResponse } from "next/server"
import { stat } from "fs"


//you need ARRAYNAME, ARRAYDATA, DOCID, and POSTDATA (optional now)
export async function POST(request: Request) {
    try {
        const response = await request.json()
        if (response.postData) {
            await updateDoc(doc(db, 'Test', response.docId), {
                [response.arrayName]: arrayUnion(response.arrayData),
                current: response.postData  
        })} 
        else {
            await updateDoc(doc(db, 'Test', response.docId), {
                [response.arrayName]: arrayUnion(response.arrayData),
            })
        }
        console.log('Array got merged')
        return NextResponse.json({data: response.arrayData}, {status: 200})
    } catch (error) {
        console.log("Error", error)
        return NextResponse.json({error: 'Error'})
    }
}