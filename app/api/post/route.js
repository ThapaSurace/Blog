import { Post } from "@/libs/model";
import { connectToDb } from "@/libs/dbConfig";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const payload = await request.json()
  await connectToDb();
  try {
    const newPost = new Post(payload);
    const post = await newPost.save();
    revalidatePath("/")
    return NextResponse.json(post)
  } catch (err) {
    console.log(err);
    return new Error("Fail to post!");
  }
};

export const GET = async (req) => {
  await connectToDb()
  const { searchParams } = new URL(req.url)
  const cat = searchParams.get("category");
  try {
    let posts;

    if (cat) {
      // Fetch posts based on the provided category
      posts = await Post.find({ category: cat });
    } else {
      // Fetch all posts
      posts = await Post.find();
    }
    return NextResponse.json(posts)
  } catch (error) {
    console.log(err);
    return new Error("Fail to post!");
  }
}