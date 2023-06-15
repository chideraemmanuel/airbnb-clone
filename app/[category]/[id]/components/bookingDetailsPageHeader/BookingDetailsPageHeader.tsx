import { FaHeart, FaShare, FaStar, FaTrophy } from "react-icons/fa";
import styles from "./BookingDetailsPageHeader.module.scss";
import Link from "next/link";
import { FiHeart, FiUpload } from "react-icons/fi";

const BookingDetailsPageHeader = () => {
  return (
    <div className={styles.bookingDetailsPageHeader}>
      <h1>Center place Graslin - Private room La Cambronne</h1>

      <div className={styles.bookingDetailsPageHeader__flex}>
        <div className={styles.bookingDetailsPageHeader__flex_left}>
          <div>
            <FaStar />
            <span>4.95</span>
            <Link href="/">22 reviews</Link>
          </div>

          <div>
            <FaTrophy />
            <span>Superhost</span>
            <Link href="/">Nantes, Pays de la Loire, France</Link>
          </div>
        </div>

        <div className={styles.bookingDetailsPageHeader__flex_right}>
          <Link href="/">
            <FiUpload />
            <span>Share</span>
          </Link>

          <Link href="/">
            <FiHeart />
            <span>Save</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPageHeader;
