import Image from "next/image";
import styles from "./BookingDetailsImageGrid.module.scss";
import imagee from "@/assets/room.webp";
import { FaDownload } from "react-icons/fa";

const images = [1, 2, 3, 4, 5];

const BookingDetailsImageGrid = () => {
  return (
    <div className={styles.bookingDetailsImageGrid}>
      {images.map((image) => (
        <Image src={imagee} alt="image" key={image} />
      ))}

      <button>
        <FaDownload />
        <span>Show all photos</span>
      </button>
    </div>
  );
};

export default BookingDetailsImageGrid;
