import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { Data } from "@/Utilities/Data";
import { auth } from "@/Utilities/auth";

const Right = async () => {
  const data = await Data();
  const session = await auth()
  // console.log(session)

  return (
    <div className={styles.rightWrapper}>
      {data.map((item) => (
        <div className={styles.col} key={item._id}>
          <div className={styles.imageright}>
            <Image
              src={item.image}
              alt="image"
              fill={true}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <h4>
              {item.date.toString().slice(0, 24)} |{item.category}
            </h4>
            <p>{item.content}</p>
            <b className={styles.link}>
              Wriiten by <span style={{color:"#000"}}>{item.user}</span>
            </b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
