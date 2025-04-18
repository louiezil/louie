import Image from "next/image";
import styles from "./hero.module.css";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";

const Left = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image
            src={
              "https://images.unsplash.com/photo-1743550800805-e27ae5e26c87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
            }
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          ex velit, impedit ullam incidunt maxime cupiditate quas deleniti vero
          omnis pariatur iusto? Non, maiores error?
        </div>
      </div>
      <div className={styles.featured}>
        <b>Featured Posts</b> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        incidunt qui? Quas eos architecto quod, blanditiis officiis impedit unde
        <br /> <br /> expedita tempore, ex quos dignissimos ipsum quia atque
        cupiditate repellat pariatur?
      </div>
      <div className={styles.icons}>
        <SlSocialYoutube />
        <TiSocialInstagramCircular />
        <SlSocialLinkedin />
        <TiSocialTwitter />
      </div>
    </div>
  );
};

export default Left;
