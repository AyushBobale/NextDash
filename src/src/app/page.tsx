import ProfileContainer from "./components/ProfileContainer";
import TodoContainer from "./components/TodoContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["home-cont"]}>
      <ProfileContainer />
      <TodoContainer />
    </div>
  );
}
