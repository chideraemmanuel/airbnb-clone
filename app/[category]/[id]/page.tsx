import BookingDetailsNavbar from "./containers/bookingDetailsNavbar/BookingDetailsNavbar";
import styles from "./page.module.scss";

const BookingDetailsPage = () => {
  return (
    <div className={styles.bookingDetailsPage}>
      <BookingDetailsNavbar />
    </div>
  );
};

export default BookingDetailsPage;
