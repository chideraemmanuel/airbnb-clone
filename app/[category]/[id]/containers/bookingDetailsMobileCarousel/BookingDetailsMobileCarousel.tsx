import Image from "next/image";
import imagee from "@/assets/room.webp";
import styles from "./BookingDetailsMobileCarousel.module.scss";
import { urlFor } from "@/sanity";

// const images = [1, 2, 3, 4, 5];

interface CarouselProps {
  mainImage: {
    asset: any;
  };
  otherImages: {
    asset: any;
  }[];
  title: string;
}

const BookingDetailsMobileCarousel: React.FC<CarouselProps> = ({
  mainImage,
  otherImages,
  title,
}) => {
  return (
    <div className={styles.bookingDetailsMobileCarousel}>
      {/*  always display main image */}
      <Image
        src={urlFor(mainImage.asset).url()}
        alt={title}
        width={500}
        height={500}
      />
      {/* then map through other images */}
      {otherImages.map((image: { asset: any }) => (
        <Image
          src={urlFor(image.asset).url()}
          alt={title}
          width={500}
          height={500}
        />
      ))}
    </div>
  );
};

export default BookingDetailsMobileCarousel;
