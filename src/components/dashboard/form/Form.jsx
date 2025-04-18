"use client";
import { createPost } from "@/Actions/actions";
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";

const Font = Pacifico({
  weight: "400",
  style: "normal",
  subsets: [`cyrillic`, `cyrillic-ext`, `latin`, `latin-ext`, `vietnamese`],
});

const Form = ({ user }) => {
  // console.log(user)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const handleSubmit = async (formData) => {
    const result = await createPost(formData);
    setError(result?.error);
    setSuccess(result?.success);
    router.refresh();
  };

  return (
    <form action={handleSubmit} className={styles.form}>
      <div className={`${styles.title} ${Font.className}`}>
        Let's Create a Post
      </div>
      <input
        name="title"
        placeholder="Title"
        required
        className={styles.formTitle}
      />
      <textarea
        name="content"
        placeholder="Content"
        required
        style={{ height: "150px" }}
      />
      <input name="category" placeholder="Category" required />
      <input type="file" name="image" accept="image/*" required />
      <button type="submit">Post</button>
    </form>
  );
};

export default Form;
