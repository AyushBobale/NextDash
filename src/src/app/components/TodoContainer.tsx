import Activity from "../../../public/static/images/trend.svg";
import Calender from "../../../public/static/images/event.svg";
import Dashboard from "../../../public/static/images/dashboard.svg";
import Gantt from "../../../public/static/images/gantt.svg";
import Image from "next/image";
import Search from "../../../public/static/images/search.svg";
import Tasks from "../../../public/static/images/tasks.svg";
import TimeLine from "../../../public/static/images/ham-menu.svg";
import TodoCol from "./TodoCol";
import styles from "../components/css/TodoContainer.module.css";

const TodoContainer = () => {
  return (
    <div className={styles["todo-cont"]}>
      <div className={styles["top-nav"]}>
        <div className={styles["top-nav-inner"]}>
          <div className={styles["tabs"]}>
            <div>
              <Image src={Tasks} alt="" />
              List Tasks
            </div>
            <div>
              <Image src={Dashboard} alt="" />
              Boards
            </div>
            <div>
              <Image src={Calender} alt="" />
              Calendar
            </div>
            <div>
              <Image src={Gantt} alt="" />
              Gantt
            </div>
            <div>
              <Image src={TimeLine} alt="" />
              Timeline
            </div>
            <div>
              <Image src={Activity} alt="" />
              Activity
            </div>
          </div>

          <div className={styles["search-bar"]}>
            <input type="text" placeholder="Search Tasks" />
            <Image src={Search} alt="" />
          </div>
        </div>
      </div>

      <div className={styles["todo-col-cont"]}>
        <TodoCol title={"TO DO"} color={"red"} />
        <TodoCol title={"IN WORK"} color={"blue"} />
      </div>
    </div>
  );
};

export default TodoContainer;
