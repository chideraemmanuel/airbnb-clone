import DesktopNavigation from "@/containers/homeNavbar/components/desktopNavigation/DesktopNavigation";
import styles from "./BookingDetailsNavbar.module.scss";
import TabletNavigation from "@/containers/homeNavbar/components/tabletNavigation/TabletNavigation";
import BookingDetailsDateFilter from "./components/bookingDetailsDateFilter/BookingDetailsDateFilter";
import BookingDetailsMobileNavbar from "./components/bookingDetailsMobileNavbar/BookingDetailsMobileNavbar";

const BookingDetailsNavbar = () => {
  return (
    <nav className={styles.bookingDetailsNavbar}>
      <DesktopNavigation children={<BookingDetailsDateFilter />} />
      <BookingDetailsMobileNavbar />
    </nav>
  );
};

export default BookingDetailsNavbar;
