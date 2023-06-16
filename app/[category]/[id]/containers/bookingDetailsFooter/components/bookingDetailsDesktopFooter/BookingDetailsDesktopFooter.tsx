import FooterList from "../FooterList/FooterList";
import styles from "./BookingDetailsDesktopFooter.module.scss";

const lists = [1, 2, 3, 4];

const BookingDetailsDesktopFooter = () => {
  return (
    <div className={styles.bookingDetailsDesktopFooter}>
      {/* PROBABLY LATER 👇🏾 */}

      {/* <div className={styles.bookingDetailsDesktopFooter__top}>
        <span>Top</span>
      </div> */}

      <div className={styles.bookingDetailsDesktopFooter__bottom}>
        {lists.map((list) => (
          <FooterList />
        ))}
      </div>
    </div>
  );
};

export default BookingDetailsDesktopFooter;
