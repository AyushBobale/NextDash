import Avtaar from "../../../public/static/images/avtaar.png";
import Calender from "../../../public/static/images/event.svg";
import Cloud from "../../../public/static/images/cloud.svg";
import Dashboard from "../../../public/static/images/dashboard.svg";
import Email from "../../../public/static/images/email.svg";
import Group from "../../../public/static/images/group.svg";
import IconButton from "./IconButton";
import Image from "next/image";
import Mail from "../../../public/static/images/green_mail.svg";
import Person from "../../../public/static/images/person.svg";
import Phone from "../../../public/static/images/phone.svg";
import Settings from "../../../public/static/images/build.svg";
import Tasks from "../../../public/static/images/tasks.svg";
import Teams from "../../../public/static/images/teams.svg";
import Telegram from "../../../public/static/images/ic_telegram.svg";
import ThreeDotsH from "../../../public/static/images/h-3-dots.svg";
import WhatsApp from "../../../public/static/images/ic_whatsapp.svg";
import styles from "../components/css/ProfileContainer.module.css";

const ProfileContainer = () => {
  return (
    <div className={styles["profile-pad-cont"]}>
      <div className={styles["profile-cont"]}>
        <div className={styles["top-btns"]}>
          <button className={styles["btns"]}>
            <Image priority src={Person} alt="account" />
          </button>
          <button className={styles["btns"]}>
            <Image priority src={ThreeDotsH} alt="account" />
          </button>
        </div>

        <div className={styles["profile-main"]}>
          <div className={styles["profile-img"]}>
            <Image priority src={Avtaar} alt="avtaar" />
            <span>2</span>
          </div>
          <span className={styles["profile-name"]}>Hello Alfred Bryant</span>
          <span className={styles["profile-email"]}>
            adrain.nader@yahoo.com
          </span>
        </div>

        <div className={styles["tabs-grid"]}>
          <div>
            <Image priority src={Dashboard} alt="account" />
            Dashboard
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Dashboard} alt="account" />
              Dashboard
            </div>
          </div>
          <div>
            <Image priority src={Tasks} alt="account" />
            Notes
            <div className={styles["active-tab"]}>
              <span className={styles["dot"]}></span>
              <Image priority src={Tasks} alt="account" />
              Notes
            </div>
          </div>
          <div>
            <Image priority src={Tasks} alt="account" />
            Tasks
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Tasks} alt="account" />
              Tasks
            </div>
          </div>
          <div>
            <Image priority src={Cloud} alt="account" />
            Files
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Cloud} alt="account" />
              Files
            </div>
          </div>
          <div>
            <Image priority src={Email} alt="account" />
            Emails
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Email} alt="account" />
              Emails
            </div>
          </div>
          <div>
            <Image priority src={Group} alt="account" />
            Clients
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Group} alt="account" />
              Clients
            </div>
          </div>
          <div>
            <Image priority src={Calender} alt="account" />
            Calendars
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Calender} alt="account" />
              Calenders
            </div>
          </div>
          <div>
            <Image priority src={Settings} alt="account" />
            Settings
            <div>
              <span className={styles["dot"]}></span>
              <Image priority src={Settings} alt="account" />
              Settings
            </div>
          </div>
        </div>

        <div className={styles["contact-opts"]}>
          <Image src={Phone} alt="" />
          <Image src={Mail} alt="" />
          <Image src={Teams} alt="" />
          <Image src={Telegram} alt="" />
          <Image src={WhatsApp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
