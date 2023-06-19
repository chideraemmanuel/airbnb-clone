import Image from "next/image";
import styles from "./BookingDetailsImageGrid.module.scss";
import imagee from "@/assets/room.webp";
import { FaDownload } from "react-icons/fa";
import { urlFor } from "@/sanity";

const images = [1, 2, 3, 4, 5];

interface CarouselProps {
  mainImage: {
    asset: any;
  };
  otherImages: {
    asset: any;
  }[];
  title: string;
}

const BookingDetailsImageGrid = ({
  mainImage,
  otherImages,
  title,
}: CarouselProps) => {
  return (
    <div className={styles.bookingDetailsImageGrid}>
      {/*  always display main image */}
      <Image
        src={urlFor(mainImage.asset).url()}
        alt={title}
        width={500}
        height={500}
      />
      {otherImages.splice(0, 4).map((image: { asset: any }) => (
        <Image
          src={urlFor(image.asset).url()}
          alt={title}
          width={500}
          height={500}
        />
      ))}

      <button>
        <FaDownload />
        <span>Show all photos</span>
      </button>
    </div>
  );
};

export default BookingDetailsImageGrid;
