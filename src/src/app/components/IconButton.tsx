import Image from "next/image";
import styles from "../components/css/IconButton.module.css";

const IconButton = ({ svg }: any) => {
  return (
    <button className={styles["icon-btn"]}>
      <Image priority src={svg} alt="Icon" />
    </button>
  );
};

export default IconButton;
