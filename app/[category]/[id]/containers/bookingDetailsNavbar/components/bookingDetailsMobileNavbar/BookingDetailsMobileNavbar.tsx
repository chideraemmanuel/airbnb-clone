"use client";

import { FiChevronLeft, FiHeart, FiUpload } from "react-icons/fi";
import styles from "./BookingDetailsMobileNavbar.module.scss";

const BookingDetailsMobileNavbar: React.FC = () => {
  return (
    <div className={styles.bookingDetailsMobileNavbar}>
      <div className={styles.bookingDetailsMobileNavbar__top}>
        <FiChevronLeft onClick={() => history.back()} />

        <div>
          <FiUpload />
          <FiHeart />
        </div>
      </div>

      <div className={styles.bookingDetailsMobileNavbar__bottom}>
        <div className={styles.bookingDetailsMobileNavbar__bottom_info}>
          <h5>$444</h5>
          <span>Total before taxes</span>
          <span>Jul 7 - 12</span>
        </div>

        <button className={styles.bookingDetailsMobileNavbar__bottom_button}>
          Reserve
        </button>
      </div>
    </div>
  );
};

export default BookingDetailsMobileNavbar;
