import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { LogOut } from "@/Actions/actions";

const Links = ({ links, session,open }) => {
  // const pathName = usePathname();
  // const pageName = pathName.split("/").pop();

  return (
    <div className={`${styles.linkwrapper} ${open ? styles.open :''}`}>
      {links.map((link) => (
        <Link href={link.path} className={styles.link} key={link.name}>
          {link.name}
        </Link>
      ))}
      {session ? (
        <form action={LogOut}>
          <button className={`${styles.link} ${styles.logout}`}>LogOut</button>
        </form>
      ) : (
        <Link href={"/Login"} className={styles.link}>
          Login
        </Link>
      )}
    </div>
  );
};

export default Links;
