import ProfileContainer from "./components/ProfileContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["home-cont"]}>
      <ProfileContainer />
      <h1>Test</h1>
    </div>
  );
}
