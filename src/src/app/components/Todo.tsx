import Attachment from "../../../public/static/images/attachment.svg";
import Image from "next/image";
import TaskList from "../../../public/static/images/list.svg";
import Time from "../../../public/static/images/access_alarms.svg";
import styles from "../components/css/Todo.module.css";

const Todo = ({ image, taskCategory, taskName, profiles, duration }) => {
  return (
    <div className={styles["todo-wrap"]}>
      {image && <Image src={image} alt="" />}
      <div className={styles["todo-inner"]}>
        <div className={styles["profile-cont"]}>
          {taskCategory}
          <div className={styles["profile-imgs"]}>
            {profiles?.map((elm, idx) => {
              return (
                <Image
                  src={elm}
                  alt=""
                  style={{
                    transform: `translateX(${idx * -80}%)`,
                    zIndex: `${profiles?.length + -1 * idx}`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <span className={styles["task-name"]}>{taskName}</span>
        {duration && (
          <div className={styles["todo-btm-row"]}>
            <span>
              <Image src={TaskList} alt="" /> {duration?.tasks}
            </span>
            <span>
              <Image src={Attachment} alt="" /> {duration?.attachments}
            </span>
            <span>
              <Image src={Time} alt="" />
              {duration?.daysLeft} Days left
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
