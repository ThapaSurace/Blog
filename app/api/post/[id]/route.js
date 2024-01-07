import { connectToDb } from "@/libs/dbConfig";
import { Post } from "@/libs/model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
  
    try {
      connectToDb();
  
      const post = await Post.findById({ _id: id });
      return NextResponse.json(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
  
  export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      connectToDb();
  
      await Post.deleteOne({ id });
      return NextResponse.json("Post deleted");
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete post!");
    }
  };