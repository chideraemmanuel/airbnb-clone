import { FaHeart, FaShare, FaStar, FaTrophy } from "react-icons/fa";
import styles from "./BookingDetailsPageHeader.module.scss";
import Link from "next/link";
import { FiHeart, FiUpload } from "react-icons/fi";

interface HeaderProps {
  title: string;
  rating: string;
  reviews: {
    reviewGiver: {
      firstName: string;
      lastName: string;
      profileImage: {
        asset: any;
      };
    };
    reviewDate: string;
    review: string;
  }[];

  location: {
    country: string;
    city: string;
    geopoint: {
      lat: number;
      lng: number;
    };
  };
}

const BookingDetailsPageHeader = ({
  title,
  rating,
  reviews,
  location,
}: HeaderProps) => {
  return (
    <div className={styles.bookingDetailsPageHeader}>
      {/* <h1>Center place Graslin - Private room La Cambronne</h1> */}
      <h1>{title}</h1>

      <div className={styles.bookingDetailsPageHeader__flex}>
        <div className={styles.bookingDetailsPageHeader__flex_left}>
          <div>
            <FaStar />
            <span>{parseFloat(rating)}</span>
            <Link href="/">{reviews.length} reviews</Link>
          </div>

          <div>
            <FaTrophy />
            <span>Superhost</span>
            <Link href="/">
              {location.city}, {location.country}
            </Link>
          </div>
        </div>

        <div className={styles.bookingDetailsPageHeader__flex_right}>
          <Link href="/">
            <FiUpload />
            <span>Share</span>
          </Link>

          <Link href="/">
            <FiHeart />
            <span>Save</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPageHeader;
