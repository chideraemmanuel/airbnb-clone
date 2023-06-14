import Link from "next/link";
import Image from "next/image";
import styles from "./PropertyCard.module.scss";
import testImage from "@/assets/test.webp";
import { FaHeart, FaStar } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <div className={styles.propertyCard}>
      <FaHeart />

      <Link href="/">
        <div className={styles.propertyCard__image}>
          <Image src={testImage} alt="test" />
        </div>

        <div className={styles.propertyCard__info}>
          <div className={styles.propertyCard__info_location}>
            <h4>Milan, Italy</h4>

            <div className={styles.propertyCard__info_location_rating}>
              <FaStar />
              <span>4.89</span>
            </div>
          </div>

          <h5 className={styles.propertyCard__info_owner}>
            Stay with Chidera - Software Developerrr
          </h5>

          <span className={styles.propertyCard__info_date}>Jul 28 - Aug 2</span>
        </div>

        <div className={styles.propertyCard__price}>
          <h5>$99</h5>
          <span>night</span>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
