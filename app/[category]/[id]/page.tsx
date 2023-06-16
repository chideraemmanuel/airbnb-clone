import { FaStar } from "react-icons/fa";
import BookingDetailsNavbar from "./containers/bookingDetailsNavbar/BookingDetailsNavbar";
import styles from "./page.module.scss";
import BookingDetailsPageHeader from "./components/bookingDetailsPageHeader/BookingDetailsPageHeader";
import BookingDetailsImageGrid from "./components/bookingdetailsImageGrid/BookingDetailsImageGrid";
import BookingDetailsMobileCarousel from "./containers/bookingDetailsMobileCarousel/BookingDetailsMobileCarousel";
import Card from "@/components/card/Card";
import BookingDetails from "./containers/bookingDetails/BookingDetails";
import Reviews from "./containers/reviews/Reviews";

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

        <BookingDetails />

        <Reviews />
      </main>
    </>
  );
};

export default BookingDetailsPage;
