import { Pacifico } from "next/font/google";
import Form from "./Form";
import styles from "./page.module.css";

const Font = Pacifico({
    weight: "400",
    style: "normal",
    subsets: ['latin']
  });

const Signup =async () => {
  return (
    <div className={styles.wrapper}>
    <h2 className={Font.className} style={{marginBottom:"1rem"}}>Signup with Credentials</h2>
    <div className="form"><Form/></div>
   </div>
  )
}

export default Signup
