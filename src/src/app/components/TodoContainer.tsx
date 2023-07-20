import Activity from "../../../public/static/images/trend.svg";
import Avtaar1 from "../../../public/static/images/Avatar Image.png";
import Avtaar2 from "../../../public/static/images/Avatar Image(1).png";
import Avtaar3 from "../../../public/static/images/Avatar Image(2).png";
import Avtaar4 from "../../../public/static/images/Avatar Image(3).png";
import Avtaar5 from "../../../public/static/images/Avatar Image(4).png";
import Avtaar6 from "../../../public/static/images/Avatar Image(5).png";
import Avtaar7 from "../../../public/static/images/Avatar Image(6).png";
import Avtaar8 from "../../../public/static/images/Avatar Image(7).png";
import Avtaar9 from "../../../public/static/images/Avatar Image(8).png";
import Calender from "../../../public/static/images/event.svg";
import Dashboard from "../../../public/static/images/dashboard.svg";
import Gantt from "../../../public/static/images/gantt.svg";
import IconButton from "./IconButton";
import Image from "next/image";
import LeftNav from "../../../public/static/images/left-nav.svg";
import RightNav from "../../../public/static/images/right-nav.svg";
import Search from "../../../public/static/images/search.svg";
import Task1 from "../../../public/static/images/task1.png";
import Task2 from "../../../public/static/images/task2.png";
import Tasks from "../../../public/static/images/tasks.svg";
import TimeLine from "../../../public/static/images/ham-menu.svg";
import TodoCol from "./TodoCol";
import styles from "../components/css/TodoContainer.module.css";

const taskTodo = [
  {
    image: Task1,
    taskCategory: "Space Task 2",
    taskName: "Make Money Online Through",
    avtaar: [Avtaar1],
    duration: { tasks: 4, attachments: 2, daysLeft: 6 },
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Make Money Online Through",
    avtaar: [Avtaar2, Avtaar3],
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Search Engine Optimization ...",
    avtaar: [Avtaar4, Avtaar5, Avtaar6],
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Characteristics Of A Successful",
    avtaar: [Avtaar7],
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Getting Free Publicity",
    avtaar: [Avtaar8],
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Importance Of The Custom ...",
    avtaar: [Avtaar9],
  },
];

const taskWork = [
  {
    taskCategory: "Space Task 3",
    taskName: "Types Of Paper In Catalog",
    avtaar: [Avtaar2],
  },
  {
    image: Task2,
    taskCategory: "Space Task 2",
    taskName: "Global Resorts Network",
    avtaar: [Avtaar8],
    duration: { tasks: 4, attachments: 2, daysLeft: 6 },
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Development Apps",
    avtaar: [Avtaar6],
  },
  {
    taskCategory: "Space Task 2",
    taskName: "Copper Canyon",
    avtaar: [Avtaar7],
    duration: { tasks: 4, attachments: 2, daysLeft: 1 },
  },
];

const taskReview = [
  {
    taskCategory: "Space Task 3",
    taskName: "Astronomy Or Astrology",
    avtaar: [Avtaar1],
  },
  {
    taskCategory: "Space Task 1",
    taskName: "Astronomy Binoculars A Great",
    avtaar: [Avtaar5],
  },
];

const taskDone = [
  {
    taskCategory: "Space Task 2",
    taskName: "Copper Canyon",
    avtaar: [Avtaar7],
  },
];

const TodoContainer = () => {
  return (
    <div className={styles["todo-cont-wrap"]}>
      <div className={styles["todo-cont"]}>
        <div className={styles["top-nav"]}>
          <div className={styles["top-nav-inner"]}>
            <div className={styles["tabs"]}>
              <div>
                <Image src={Tasks} alt="" />
                <p>List Tasks</p>
              </div>
              <div className={styles["active"]}>
                <Image src={Dashboard} alt="" />
                <p>Boards</p>
              </div>
              <div>
                <Image src={Calender} alt="" />
                <p>Calendar</p>
              </div>
              <div>
                <Image src={Gantt} alt="" />
                <p>Gantt</p>
              </div>
              <div>
                <Image src={TimeLine} alt="" />
                <p>Timeline</p>
              </div>
              <div>
                <Image src={Activity} alt="" />
                <p>Activity</p>
              </div>
            </div>
            <div className={styles["search-bar"]}>
              <input type="text" placeholder={"Search Tasks"} />
              <Image src={Search} alt="" />
            </div>
          </div>
          <div className={styles["top-nav-inner-mobile"]}>
            <div className={styles["tabs-mobile"]}>
              <span>
                <Image src={LeftNav} alt="" />
              </span>
              <div className={styles["active"]}>
                <Image src={Dashboard} alt="" />
                <p>Boards</p>
              </div>
              <span>
                <Image src={RightNav} alt="" />
              </span>
            </div>
            <IconButton svg={Search} />
          </div>
        </div>
        <div className={styles["todo-col-cont"]}>
          <TodoCol title={"TO DO"} color={"#8833FF"} tasks={taskTodo} />
          <TodoCol title={"IN WORK"} color={"#33BFFF"} tasks={taskWork} />
          <TodoCol
            title={"REVIEW"}
            color={"#FFCB33"}
            tasks={taskReview}
            newTask={true}
            notAddTask={true}
          />
          <TodoCol
            title={"DONE"}
            color={"#29CC39"}
            tasks={taskDone}
            notAddTask={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
