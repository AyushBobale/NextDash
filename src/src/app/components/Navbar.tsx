import AccountCircle from "../../../public/static/images/account_circle.svg";
import Close from "../../../public/static/images/cancel.svg";
import HamMenu from "../../../public/static/images/ham-menu.svg";
import IconButton from "./IconButton";
import Image from "next/image";
import Link from "next/link";
import Notification from "../../../public/static/images/noti.svg";
import RightArrow from "../../../public/static/images/right-arrow.svg";
import SearchIcon from "../../../public/static/images/search.svg";
import ThreeDotsH from "../../../public/static/images/h-3-dots.svg";
import styles from "../components/css/Navbar.module.css";

// import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <IconButton svg={HamMenu} />
        <span className={styles.title}>Constructor</span>
      </div>
      <div className={styles.links}>
        <Link href="#">Dashboard</Link>
        <Link href="#">About Us</Link>
        <Link href="#">News</Link>
        <Link href="#">User Policy</Link>
        <Link href="#">Contacts</Link>
        <Image src={ThreeDotsH} alt="more" />
      </div>
      <div className={styles["search-cont"]}>
        <input
          className={styles["search-bar"]}
          placeholder="Search Products, Orders and Clients"
        />
        <Image
          className={styles["search-icon"]}
          src={SearchIcon}
          alt="search"
        />
        <Image className={styles["enter-icon"]} src={RightArrow} alt="enter" />
      </div>
      <div className={styles.right}>
        <span>
          <Image src={AccountCircle} alt="account" />
          <p>Clayton Santos</p>
        </span>
        <div className={styles["noti-cont"]}>
          <IconButton svg={Notification} noti={{ color: "#E62E7B" }} />
          <IconButton svg={Close} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
