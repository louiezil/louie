"use server";
import { auth, signIn, signOut } from "@/Utilities/auth";
import { connectToDb } from "./connection";
import { Posts, Users } from "@/Utilities/models";
import bcrypt from "bcryptjs";
import fs from "fs/promises";
import path from "path";

export async function LogIn() {
  await signIn("github");
}
export async function LogOut() {
  await signOut();
}

//posting logic

// Save the post

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function createPost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const category = formData.get("category");
  const image = formData.get("image");

  if (!image || !image.name) {
    return { error: "No image provided" };
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(image.type)) {
    return { error: "Only JPG, PNG, and WEBP are allowed" };
  }

  // Convert file to base64 string for Cloudinary
  const buffer = Buffer.from(await image.arrayBuffer());
  const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;

  let imageUrl = "";

  try {
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: "your-app-folder", // optional: customize your Cloudinary folder
    });

    imageUrl = uploadResult.secure_url;
  } catch (error) {
    return {
      error: "Image upload to Cloudinary failed",
      details: error.message,
    };
  }

  const user = await auth();
  const username = user?.user?.name;

  // ✅ Connect to MongoDB
  await connectToDb();

  // ✅ Save post to DB
  const newPost = new Posts({
    title,
    category,
    content,
    image: imageUrl,
    user: username,
  });

  await newPost.save();
  return {
    success: true,
    message: "Post uploaded and saved successfully!",
    data: newPost.toObject(), // 👈 this converts to plain object
  };
}

// export async function createPost(formData,req) {
//   const user = await auth();
//   const username = user?.user?.name;
//   console.log(req)
//   try {
//     await connectToDb(); // connect to MongoDB

//     const title = formData.get("title");
//     const content = formData.get("content");
//     const category = formData.get("category") || "General"; // optional
//     const user = username || "Anonymous"; // optional fallback
//     const image = formData.get("image") || "/desert.png"; // optional fallback

//     if (!title || !content || !user || !category) {
//       return { error: "missing required field" };
//     }

//     const newPost = new Posts({
//       title,
//       content,
//       category,
//       user,
//       image,
//     });

//     await newPost.save();
//     // console.log(newPost);
//     return { success: "posted successfully" }; // or return a success message
//   } catch (error) {
//     console.error("Error creating post:", error);
//   }
// }

export const Deletion = async (id) => {
  try {
    await connectToDb();
    const FindPost = await Posts.findByIdAndDelete(id);
  } catch (error) {}
};

export const UserDeletion = async (id) => {
  try {
    await connectToDb();
    const Finduser = await Users.findByIdAndDelete(id);
  } catch (error) {}
};

export const CreateUser = async (formData) => {
  const { name, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "password Do Not Match" };
  }

  // console.log(name, email, password,passwordRepeat)
  try {
    await connectToDb();
    const findUser = await Users.findOne({
      $or: [
        { name: name },
        {
          email: email,
        },
      ],
    });
    if (findUser) {
      return { error: "Email or UserName Already Exist" };
    }

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newUser = await Users({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    // console.log("new user saved");
    return { success: "Account Created Successfully" };
  } catch (error) {
    console.log(error);
  }
};

export async function LoginWithCredentials(formData) {
  const { name, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      name,
      password,
      redirect: false,
    });
  } catch (error) {
    console.log(error?.cause?.provider, error);
    if (error.cause.provider == "credentials") {
      return { error: "Invalid Credentials" };
    }
  }
}
