import DesktopNavigation from "@/containers/homeNavbar/components/desktopNavigation/DesktopNavigation";
import styles from "./BookingDetailsNavbar.module.scss";
import TabletNavigation from "@/containers/homeNavbar/components/tabletNavigation/TabletNavigation";
import BookingDetailsDateFilter from "./components/bookingDetailsDateFilter/BookingDetailsDateFilter";

const BookingDetailsNavbar = () => {
  return (
    <nav className={styles.bookingDetailsNavbar}>
      <DesktopNavigation children={<BookingDetailsDateFilter />} />
      <span>Mobile Navigation</span>
    </nav>
  );
};

export default BookingDetailsNavbar;
