import Image from "next/image";
import styles from "../components/css/Todo.module.css";

const Todo = ({ image, taskCategory, taskName }) => {
  return (
    <div className={styles["todo-wrap"]}>
      {image && <Image src={image} alt="" />}
      <div className={styles["todo-inner"]}>
        <div className={styles["profile-cont"]}>{taskCategory}</div>
        <span className={styles["task-name"]}>{taskName}</span>
      </div>
    </div>
  );
};

export default Todo;
