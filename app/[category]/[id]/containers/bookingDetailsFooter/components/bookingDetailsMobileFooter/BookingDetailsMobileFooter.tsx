import { footerConstants } from "../../constants";
import FooterList from "../FooterList/FooterList";
import styles from "./BookingDetailsMobileFooter.module.scss";

// const lists = [1, 2, 3, 4];

const BookingDetailsMobileFooter: React.FC = () => {
  return (
    <div className={styles.bookingDetailsMobileFooter}>
      {/* PROBABLY LATER 👇🏾 */}

      {/* <div className={styles.bookingDetailsMobileFooter__top}>
        <span>Top</span>
      </div> */}

      <div className={styles.bookingDetailsMobileFooter__bottom}>
        {footerConstants.map((list) => (
          <FooterList list={list} />
        ))}
      </div>
    </div>
  );
};

export default BookingDetailsMobileFooter;
