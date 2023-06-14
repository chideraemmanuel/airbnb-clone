import { FiSearch } from "react-icons/fi";
import styles from "./BookingDetailsDateFilter.module.scss";

const BookingDetailsDateFilter = () => {
  return (
    <div className={styles.bookingDetailsDateFilter}>
      <span className={styles.bookingDetailsDateFilter__text}>
        Start your search
      </span>

      <button className={styles.bookingDetailsDateFilter__button}>
        <FiSearch />
      </button>
    </div>
  );
};

export default BookingDetailsDateFilter;
