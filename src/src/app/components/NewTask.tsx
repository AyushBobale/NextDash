import AccessTime from "../../../public/static/images/access_time.svg";
import Attachment from "../../../public/static/images/attachment.svg";
import Avtaar from "../../../public/static/images/Avatar Image(3).png";
import Close from "../../../public/static/images/close.svg";
import Flag from "../../../public/static/images/flag.svg";
import Image from "next/image";
import styles from "../components/css/NewTask.module.css";

const NewTask = () => {
  return (
    <div className={styles["new-task-wrap"]}>
      <div className={styles["top"]}>
        <div className={styles["top-ip-grp"]}>
          <Image src={Close} alt="" />
          <input placeholder="Task name or type " />
        </div>
        <Image src={Avtaar} alt="" />
      </div>

      <div className={styles["btm"]}>
        <div className={styles["btm-ic-grp"]}>
          <Image src={Flag} alt="" />
          <Image src={Attachment} alt="" />
          <Image src={AccessTime} alt="" />
        </div>
        <button className={styles["save-btn"]}>Save</button>
      </div>
    </div>
  );
};

export default NewTask;
