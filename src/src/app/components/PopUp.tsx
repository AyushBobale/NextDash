import Cloud from "../../../public/static/images/cloud.svg";
import Comments from "../../../public/static/images/insert_comment.svg";
import Flag from "../../../public/static/images/flag.svg";
import Image from "next/image";
import LinkIcon from "../../../public/static/images/link.svg";
import NavClose from "../../../public/static/images/close.svg";
import Play from "../../../public/static/images/play.svg";
import Profile1 from "../../../public/static/images/profile1.png";
import Right from "../../../public/static/images/chevron_right.svg";
import RightArrow from "../../../public/static/images/subdirectory_arrow_right.svg";
import styles from "../components/css/PopUp.module.css";

const PopUp = () => {
  return (
    <div className={styles["popup-cont"]}>
      <div className={styles["top-wrap"]}>
        <div className={styles["top"]}>
          <div className={styles["top-head"]}>
            <span>
              Development Apps
              <Image src={LinkIcon} alt="" />
            </span>
            <Image src={NavClose} alt="" />
          </div>
          <div className={styles["top-body"]}>
            <div>
              <Image src={RightArrow} alt="" />4 Subtasks
            </div>
            <div>
              <Image src={Flag} alt="" />
              Priority Enabled
            </div>
            <div>
              <Image src={Cloud} alt="" />3 Files
            </div>
            <div>
              <Image src={Comments} alt="" />7 Comments
            </div>
            <div>
              <Image src={Profile1} alt="" style={{ background: "#8833ff" }} />
              Tyler Norman
            </div>
          </div>
        </div>
      </div>
      <div className={styles["btm"]}>
        <div className={styles["date-cont"]}>
          <span>START DATE</span>
          Sep 3, 9:00 pm
        </div>
        <Image src={Right} alt="" />
        <div className={styles["date-cont"]}>
          <span>DUE DATE</span>
          Sep 4, 9:00 pm
        </div>
        <div className={styles["run-btn"]}>
          <Image src={Play} alt="" />
          0:00
        </div>
      </div>
    </div>
  );
};

export default PopUp;
