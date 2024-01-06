import { Post } from "@/libs/model";
import { connectToDb } from "@/libs/dbConfig";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const payload = await request.json()
  await connectToDb();
  try {
    const newPost = new Post(payload);
    const post = await newPost.save();
    return NextResponse.json(post)
  } catch (err) {
    console.log(err);
    return new Error("Fail to post!");
  }
};

export const GET = async () => {
  await connectToDb()
  try {
    const posts = await Post.find()
    return NextResponse.json(posts)
  } catch (error) {
    console.log(err);
    return new Error("Fail to post!");
  }
}