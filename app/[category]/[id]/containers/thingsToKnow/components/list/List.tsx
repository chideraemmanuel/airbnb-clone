import { FiChevronRight } from "react-icons/fi";
import styles from "./List.module.scss";

const listitems = [1, 2, 3];

const List = () => {
  return (
    <div className={styles.list}>
      <h5 className={styles.list__header}>House rules</h5>

      <div className={styles.list__listItems}>
        {listitems.map((item) => (
          <span>Free cancellation for 48 hours</span>
        ))}
      </div>

      <button className={styles.list__button}>
        <span>Show more</span>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default List;
