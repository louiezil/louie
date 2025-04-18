import React from "react";
import styles from "./navbar.module.css";
import Links from "./Links";
import { auth } from "@/Utilities/auth";
import Navmenu from "./Navmenu";
import MenuandLinks from "./MenuandLinks";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>logo</div>
       <MenuandLinks session={session}/>
      </div>
    </div>
  );
};

export default Navbar;
