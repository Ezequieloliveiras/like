
import { connectMongoDB } from "@/app/lib/db"
import User from "@/app/models/user"

import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { comment } = await req.json()

    await connectMongoDB()
    
    const commentDB = new User({ comment })
    await commentDB.save()

    return NextResponse.json({ message: 'comentário registrado' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'erro ao registrar comentário' }, { status: 500 })
  }
}


// console.log('Comennt:',comment)