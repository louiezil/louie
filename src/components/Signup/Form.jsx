"use client";
import { CreateUser } from "@/Actions/actions";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (formData) => {
    setloading(true);
    const result = await CreateUser(formData);
    setError(result?.error);
    setSuccess(result?.success);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    if (result?.success) {
      router.push("/Login");
    }
  };

  return (
    <div className={styles.container}>
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="username" required />
        <input type="email" name="email" placeholder="Email Adress" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Confirm Password"
        />
        <button className={styles.btn}>
          {loading ? "setting up an Account ..." : "Signup"}
        </button>
      </form>
      <b>{error}</b>
      <b style={{ color: "#000" }}>
        Already have an account!.{" "}
        <Link href={"/Login"} style={{ color: "#1D4ED8" }}>
          LOgIn
        </Link>
      </b>
    </div>
  );
};

export default Form;
