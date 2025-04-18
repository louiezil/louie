import { LogIn } from "@/Actions/actions";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";
import styles from "./page.module.css";
import { Pacifico } from "next/font/google";
import Form from "./Form";

const Font = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={Font.className} style={{ marginBottom: "1rem" }}>
        {" "}
        Login with Credentials
      </h2>
      <Form />
    </div>
  );
};

export default Login;
