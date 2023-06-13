import styles from "./HomeDateFilter.module.scss";
import { FiSearch } from "react-icons/fi";

const HomeDateFilter = () => {
  return (
    <div className={styles.homeDateFilter}>
      <button>Anywhere</button>

      <div className={styles.homeDateFilter__break}></div>

      <button>Any week</button>

      <div className={styles.homeDateFilter__break}></div>

      <div className={styles.homeDateFilter__right}>
        <button>Add guests</button>
        <button className={styles.homeDateFilter__right_search}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default HomeDateFilter;
