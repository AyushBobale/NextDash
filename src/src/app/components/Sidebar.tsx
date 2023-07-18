import AddCircle from "../../../public/static/images/addcircle.svg";
import Earth from "../../../public/static/images/earth.svg";
import ExploreCircle from "../../../public/static/images/explore.svg";
import IconButton from "./IconButton";
import Image from "next/image";
import Message from "../../../public/static/images/msg.svg";
import Org from "../../../public/static/images/org.svg";
import Profile1 from "../../../public/static/images/profile1.png";
import Profile2 from "../../../public/static/images/profile2.png";
import Profile3 from "../../../public/static/images/profile3.png";
import Profile4 from "../../../public/static/images/profile4.png";
import Star from "../../../public/static/images/star.svg";
import Trend from "../../../public/static/images/trend.svg";
import styles from "../components/css/Sidebar.module.css";

// import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <IconButton svg={ExploreCircle} />
        <IconButton svg={Star} />
        <IconButton svg={Message} />
        <IconButton svg={Trend} />
        <IconButton svg={Earth} />
        <IconButton svg={Org} />
      </div>
      <div className={styles.btm}>
        <div style={{ background: "#FF6633" }}>
          <Image src={Profile1} alt="Icon" />
        </div>
        <div style={{ background: "#E62E7B" }}>
          <Image src={Profile2} alt="Icon" />
        </div>
        <div style={{ background: "#8833FF" }}>
          <Image src={Profile3} alt="Icon" />
        </div>
        <div style={{ background: "#FFCB33" }}>
          <Image src={Profile4} alt="Icon" />
        </div>
        <IconButton svg={AddCircle} />
      </div>
    </div>
  );
};

export default Sidebar;
