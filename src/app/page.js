import Image from "next/image";
import styles from "./page.module.css";
import Left from "@/components/Hero/Left";
import Right from "@/components/Hero/Right";

export default function Home() {
  return (
    <div className={styles.home}>
      <Left/>
      <Right/>
    </div>
  );
}
