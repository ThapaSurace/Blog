import { connectToDb } from "@/libs/dbConfig"
import { User } from "@/libs/model"
import { NextResponse } from "next/server"

export const GET = async () => {
    await connectToDb()
    try {
        const users = await User.find()
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
        return new Error("Fail to get users!")
    }
}