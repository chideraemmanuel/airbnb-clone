import { FaStar } from "react-icons/fa";
import BookingDetailsNavbar from "./containers/bookingDetailsNavbar/BookingDetailsNavbar";
import styles from "./page.module.scss";
import BookingDetailsPageHeader from "./components/bookingDetailsPageHeader/BookingDetailsPageHeader";
import BookingDetailsImageGrid from "./components/bookingdetailsImageGrid/BookingDetailsImageGrid";
import BookingDetailsMobileCarousel from "./containers/bookingDetailsMobileCarousel/BookingDetailsMobileCarousel";

const BookingDetailsPage = () => {
  return (
    <>
      <header className={styles.bookingDetailsPage__header}>
        <BookingDetailsNavbar />
      </header>

      <main className={styles.bookingDetailsPage__main}>
        <div className={styles.bookingDetailsPage__main_showcase}>
          <BookingDetailsMobileCarousel />

          <BookingDetailsPageHeader />
          <BookingDetailsImageGrid />
        </div>
      </main>
    </>
  );
};

export default BookingDetailsPage;
