import styles from "./page.module.css";
import Myblogs from "../myblogs/Myblogs";
import Form from "./form/Form";
import { auth } from "@/Utilities/auth";
import { Pacifico } from "next/font/google";

const Font = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ['latin']
});

export default async function Dashboard() {
  const userInfo = await auth()
  const user = userInfo?.user.name
  // console.log(userInfo)

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.userInfo}>
            {userInfo?.user ? (
              <img src={userInfo.user.image || '/desert.png'} alt="Profile" className={styles.avatar} />
            ) : (
              <div className={styles.avatarPlaceholder}>👤</div>
            )}
            <div>
              <p className={styles.welcome}>Welcome,</p>
              <p className={styles.username}>{user || "User"}</p>
            </div>
          </div>
        </header>

        <section className={styles.formSection}>
          <Form user={user}/>
          <div className={styles.right}>
            <b className={`${Font.className}`}>My Blogs</b>
            <Myblogs />
          </div>
        </section>
      </div>
    </div>
  );
}
