import { connectToDb } from "@/libs/dbConfig";
import { User } from "@/libs/model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const {username } = params;
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
      return NextResponse.json(user);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };