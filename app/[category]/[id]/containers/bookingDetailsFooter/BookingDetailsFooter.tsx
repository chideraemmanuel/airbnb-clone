import { FiGlobe } from "react-icons/fi";
import styles from "./BookingDetailsFooter.module.scss";
import BookingDetailsDesktopFooter from "./components/bookingDetailsDesktopFooter/BookingDetailsDesktopFooter";
import BookingDetailsMobileFooter from "./components/bookingDetailsMobileFooter/BookingDetailsMobileFooter";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BookingDetailsFooter: React.FC = () => {
  return (
    <div className={styles.bookingDetailsFooter}>
      <BookingDetailsDesktopFooter />
      <BookingDetailsMobileFooter />

      <div className={styles.bookingDetailsFooter__footer}>
        <div className={styles.bookingDetailsFooter__footer_copyright}>
          <span>&copy; 2023 Airbnb, Inc.</span>

          <div>
            <span>Terms</span>
            <span>Sitemaps</span>
            <span>Privacy</span>
          </div>
        </div>

        <div className={styles.bookingDetailsFooter__footer_socials}>
          <div>
            <FiGlobe />
            <span>English (US)</span>
          </div>

          <span>$ USD</span>

          <div>
            <Link href="/">
              <FaFacebook />
            </Link>

            <Link href="/">
              <FaTwitter />
            </Link>

            <Link href="/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsFooter;
