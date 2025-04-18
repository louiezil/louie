"use client";
import { LogIn, LoginWithCredentials } from "@/Actions/actions";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter()
  const handleSubmit = async (formData) => {
    setloading(true);
    const result = await LoginWithCredentials(formData);
    setError(result?.error);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    router.push('/Dashboard')
  };
  return (
    <div className={styles.container}>
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="username" required />
        <input type="password" name="password" placeholder="password" required />
        <button className={styles.btn}>
          {loading ? "Verifying Credentials" : "Login"}
        </button>
      </form>
      <b style={{ color: " #c00707" }}>{error}</b>
      <b>
        Dont have an account!.{" "}
        <Link href={"/signup"} style={{ color: "#1D4ED8" }}>
          SignUp
        </Link>
      </b>
      <span>or</span>
      <form action={LogIn}>
        <button className={styles.social}>
          login with GitHub <SlSocialGithub />
        </button>
      </form>
    </div>
  );
};

export default Form;
