import React from "react";
import styles from "./Footer.module.css";

const Footer = () => { 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>MyApp © {new Date().getFullYear()}</h3>
          <p>All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <a href="/About">About</a>
          <a href="/About">Contact</a>
          <a href="/About">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
