import Card from "@/components/card/Card";
import styles from "./BookingCard.module.scss";
import { FaFlag, FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const BookingCard = () => {
  return (
    <div className={styles.bookingCard}>
      <Card>
        <div className={styles.bookingCard__header}>
          <div className={styles.bookingCard__header_price}>
            <h4>$444</h4>
            <span>Total before taxes</span>
          </div>

          <div className={styles.bookingCard__header_review}>
            <div>
              <FaStar />
              <span>4.89</span>
            </div>

            <span>- 22 reviews</span>
          </div>
        </div>

        <div className={styles.bookingCard__datePicker}>
          <div className={styles.bookingCard__datePicker_dates}>
            <button>
              <span>Check-in</span>
              <span>7/7/2023</span>
            </button>
            <button>
              <span>Check-out</span>
              <span>7/12/2023</span>
            </button>
          </div>

          <div className={styles.bookingCard__datePicker_guests}>
            <button>
              <span>Guests</span>
              <span>1 guest</span>
            </button>

            <FiChevronDown />
          </div>
        </div>

        <button className={styles.bookingCard__button}>Reserve</button>

        <span className={styles.bookingCard__footer}>
          You won't be charged yet
        </span>
      </Card>

      <Link href="/" className={styles.bookingCard__report}>
        <FaFlag />
        <span>Report this listing</span>
      </Link>
    </div>
  );
};

export default BookingCard;
