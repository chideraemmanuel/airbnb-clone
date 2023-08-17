import { FiChevronRight } from "react-icons/fi";
import DesktopCategoriesSlider from "../desktopCategoriesSlider/DesktopCategoriesSlider";
import styles from "./DesktopCategoriesFilter.module.scss";
import { IoMdSwitch } from "react-icons/io";

const DesktopCategoriesFilter: React.FC = () => {
  return (
    <div className={styles.desktopCategoriesFilter}>
      <DesktopCategoriesSlider />

      <div className={styles.desktopCategoriesFilter__chevron}>
        <FiChevronRight />
      </div>

      <button className={styles.desktopCategoriesFilter__filter}>
        <IoMdSwitch />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default DesktopCategoriesFilter;
