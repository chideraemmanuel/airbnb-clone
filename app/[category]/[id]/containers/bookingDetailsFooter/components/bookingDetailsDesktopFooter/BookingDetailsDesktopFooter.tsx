import { footerConstants } from "../../constants";
import FooterList from "../FooterList/FooterList";
import styles from "./BookingDetailsDesktopFooter.module.scss";

// const lists = [1, 2, 3, 4];

const BookingDetailsDesktopFooter: React.FC = () => {
  return (
    <div className={styles.bookingDetailsDesktopFooter}>
      {/* PROBABLY LATER 👇🏾 */}

      {/* <div className={styles.bookingDetailsDesktopFooter__top}>
        <span>Top</span>
      </div> */}

      <div className={styles.bookingDetailsDesktopFooter__bottom}>
        {footerConstants.map((list) => (
          <FooterList list={list} />
        ))}
      </div>
    </div>
  );
};

export default BookingDetailsDesktopFooter;
