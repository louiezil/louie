import { connectToDb } from "@/Actions/connection";
import { Posts, Users } from "./models";
import { auth } from "./auth";

//fetching posts for the homepage(all posts)
export async function Data() {
  try {
    await connectToDb();
    const posts = await Posts.find().sort({ date: -1 });
    return posts;
  } catch (error) {
    console.log("failed to fetch all posts");
  }
}

//fetching al users
export async function AllUsers() {
  try {
    await connectToDb();
    const users = await Users.find();
    return users;
  } catch (error) {
    console.log("couldnt fetch data ",error);
  }
}

//fetching posts of a particular user

export const SpecPosts = async () => {
  const user = await auth();
  const username = user?.user?.name;
  try {
    await connectToDb();

    const posts = await Posts.find({
      user: username,
    }).sort({ date: -1 });
    return posts;
  } catch (error) {
    console.log(error, "couldnt fetch the user posts");
  }
};
