import { auth } from "@/Utilities/auth";
import { SpecPosts } from "@/Utilities/Data";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Deletion } from "@/Actions/actions";
import Dell from "./Dell";

const Myblogs = async () => {
  const data = await SpecPosts();
  // console.log(data);

  return (
    <div className={styles.rightWrapper}>
      {data.length === 0 ? (
        <p style={{margin:"auto"}}>Thers's No posts yet to Display</p>
      ) : (
        data?.map((item) => (
          <div className={styles.col} key={item._id}>
            <div className={styles.imageright}>
              <Image
                src={item.image || "/desert.png"}
                alt="image"
                fill={true}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h3>{item.title.slice(0,20)}</h3>
              <h4>
                {item.date.toString().slice(0, 16)} | {item.category.slice(0,20)}
              </h4>
              <p>{item.content.slice(0,455)}</p>
             <div className={styles.base}>
              <p>Written by {item?.user}</p>
              <Dell id={item._id.toString()}/>
             </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Myblogs;
