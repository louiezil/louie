import { BsMenuButtonFill } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";

import styles from "./navbar.module.css";
const Navmenu = ({ open }) => {
  return (
    <div className={styles.menu}>
      {open ? <BsMenuButtonFill /> : <RiCloseLargeLine />}
    </div>
  );
};

export default Navmenu;
