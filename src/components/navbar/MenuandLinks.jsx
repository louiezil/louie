"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Navmenu from "./Navmenu";
import Links from "./Links";
import { RiCloseLargeLine } from "react-icons/ri";


const MenuandLinks = ({ session }) => {
  const [open, setopen] = useState(false);
  const links = [
    {
      name: "HomePage",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/Dashboard",
    },
    {
      name: "About",
      path: "/About",
    },
  ];

  return (
    <div>
      <div className={styles.links}>
        <div onClick={()=>setopen(prev=>!prev)}>
          <Navmenu open={open}/>
        </div>
         <Links links={links} session={session}open={open} />
      </div>
    </div>
  );
};

export default MenuandLinks;
