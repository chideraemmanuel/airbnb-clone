import styles from "./MobileHomeFilfer.module.scss";
import { FiSearch } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";

const MobileHomeFilfer = () => {
  return (
    <div className={styles.mobileHomeFilter}>
      <FiSearch />

      <div className={styles.mobileHomeFilter__text}>
        <div>Anywhere</div>
        <span>Any week - Add guests</span>
      </div>

      <IoMdSwitch />
    </div>
  );
};

export default MobileHomeFilfer;
