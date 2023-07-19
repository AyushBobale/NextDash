import Add from "../../../public/static/images/add.svg";
import Avtaar1 from "../../../public/static/images/Avatar Image.png";
import Avtaar2 from "../../../public/static/images/Avatar Image(1).png";
import Avtaar3 from "../../../public/static/images/Avatar Image(2).png";
import Avtaar4 from "../../../public/static/images/Avatar Image(3).png";
import Image from "next/image";
import Task1 from "../../../public/static/images/task1.png";
import ThreeDotsH from "../../../public/static/images/h-3-dots.svg";
import Todo from "./Todo";
import styles from "../components/css/TodoCol.module.css";

const tasks = [
  {
    image: Task1,
    taskCategory: "Space Task 2",
    taskName: "Make money online",
    avtaar: [Avtaar1, Avtaar2, Avtaar3],
    duration: { tasks: 4, attachments: 2, daysLeft: 6 },
  },
];

const TodoCol = ({ title, color, todos }) => {
  return (
    <div className={styles["todo-col"]}>
      <div className={styles["todo-col-head-wrapper"]}>
        <div
          className={styles["todo-col-head"]}
          style={{ borderLeft: `3px solid ${color}` }}
        >
          <div className={styles["th-left"]}>
            {title}
            <span className={styles["noti-cnt"]}>5</span>
          </div>
          <div className={styles["th-right"]}>
            <Image src={ThreeDotsH} alt="" />
            <Image src={Add} alt="" />
          </div>
        </div>
      </div>

      <div className={styles["todos-map"]}>
        {tasks.map((elm, idx) => {
          return (
            <Todo
              image={elm.image}
              taskCategory={elm.taskCategory}
              taskName={elm.taskName}
              profiles={elm.avtaar}
              duration={elm.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoCol;
