import { FiChevronLeft, FiHeart, FiUpload } from "react-icons/fi";
import styles from "./BookingDetailsMobileNavbar.module.scss";

const BookingDetailsMobileNavbar = () => {
  return (
    <div className={styles.bookingDetailsMobileNavbar}>
      <FiChevronLeft />

      <div>
        <FiUpload />
        <FiHeart />
      </div>
    </div>
  );
};

export default BookingDetailsMobileNavbar;
