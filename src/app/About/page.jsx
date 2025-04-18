import Image from "next/image";
import styles from "./page.module.css";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";



const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={'https://images.unsplash.com/photo-1487260211189-670c54da558d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D'}
        alt="About Me"
        fill={true}
        className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h2>About Me</h2>
        <h4>L0UiS -DEVELOPER</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
          fugit consequatur enim tenetur nam temporibus iusto unde quo deserunt
          aliquam quis consectetur voluptatibus vero ratione voluptate
          excepturi, libero cumque quidem ipsam praesentium eligendi. Porro
          adipisci similique dignissimos officia facere omnis aut quasi
          repellat!
        </p>
        <div className={styles.links}><TiSocialInstagram /><SlSocialGithub />
        <SlSocialYoutube /><TiSocialTwitter /></div>
      </div>
    </div>
  );
};

export default page;
