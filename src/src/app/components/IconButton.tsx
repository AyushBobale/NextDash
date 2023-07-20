import Image from "next/image";
import styles from "../components/css/IconButton.module.css";

const IconButton = ({ svg, noti }: any) => {
  return (
    <button className={styles["icon-btn"]}>
      {noti?.color && (
        <span
          className={styles["dot"]}
          style={{ background: `${noti?.color}` }}
        ></span>
      )}
      <Image priority src={svg} alt="Icon" />
    </button>
  );
};

export default IconButton;
