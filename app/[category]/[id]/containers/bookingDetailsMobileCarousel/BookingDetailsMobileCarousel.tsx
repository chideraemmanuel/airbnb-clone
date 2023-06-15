import Image from "next/image";
import imagee from "@/assets/room.webp";
import styles from "./BookingDetailsMobileCarousel.module.scss";

const images = [1, 2, 3, 4, 5];

const BookingDetailsMobileCarousel = () => {
  return (
    <div className={styles.bookingDetailsMobileCarousel}>
      {images.map((image) => (
        <Image src={imagee} alt="image" />
      ))}
    </div>
  );
};

export default BookingDetailsMobileCarousel;
