import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");
const fs = require("fs"); 

const LoadDB = async () => {
  await connectDB();
  
};

//api endpoint to get all blogs
LoadDB();

export async function GET(req) {

  const blogId = req.nextUrl.searchParams.get("id");
  if(blogId){
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }else{
  const blogs = await BlogModel.find({});
  return NextResponse.json({ blogs});
  }
}

//api endpoint to add blog
export async function POST(request) {
  const formData = await request.formData();
  const date = Date.now();

  const image = formData.get("image");
  const imageByte = await image.arrayBuffer();

  const buffer = Buffer.from(imageByte);

  const path = `./public/${date}-${image.name}`;
  await writeFile(path, buffer);
  const imageUrl = `/${date}-${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };
await BlogModel.create(blogData);
console.log("blog saved");
  return NextResponse.json({ success: true, msg: "blog added" });
}

// api endpoint to delete blog

export async function DELETE(req) {
  const blogId = await req.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(blogId);
  fs.unlink(`./public${blog.image}`, () => {
    
  })
  await BlogModel.findByIdAndDelete(blogId);
  return NextResponse.json({message : 'blog deleted'});
}