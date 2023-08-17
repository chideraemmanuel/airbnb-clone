import Link from "next/link";
import Image from "next/image";
import styles from "./PropertyCard.module.scss";
import testImage from "@/assets/room.webp";
import { FaHeart, FaStar } from "react-icons/fa";
import { propertyTypes } from "@/types";
import { urlFor } from "@/sanity";
import { formatMonth } from "@/utils/formatMonth";

const PropertyCard: React.FC<{ property: propertyTypes }> = ({ property }) => {
  const {
    _id,
    title,
    description,
    prices,
    location,
    mainImage,
    category,
    rating,
    propertyHosts: {
      host: {
        about: { occupation },
        primaryDetails: { firstName },
      },
    },
    availableDates,
  } = property;
  // console.log(availableDates);
  const { from, to } = availableDates;

  const availableFrom = new Date(from);
  const availableTo = new Date(to);

  // console.log(availableFrom.toLocaleString("default", { month: "short" }));

  return (
    <div className={styles.propertyCard}>
      <FaHeart />

      <Link href={`${category.categoryName}/${_id}`}>
        <div className={styles.propertyCard__image}>
          <Image
            src={urlFor(mainImage.asset).url()}
            alt={title}
            width={300}
            height={300}
          />
        </div>

        <div className={styles.propertyCard__info}>
          <div className={styles.propertyCard__info_location}>
            <h4>{`${location.city}, ${location.country}`}</h4>

            <div className={styles.propertyCard__info_location_rating}>
              <FaStar />
              <span>{parseFloat(rating)}</span>
            </div>
          </div>

          <h5 className={styles.propertyCard__info_owner}>
            Stay with {firstName} {occupation && `- ${occupation}`}
          </h5>

          <span className={styles.propertyCard__info_date}>
            {`${availableFrom.toLocaleString("default", {
              month: "short",
            })} ${availableFrom.getDay()}`}{" "}
            -{" "}
            {`${availableTo.toLocaleString("default", {
              month: "short",
            })} ${availableTo.getDay()}`}
          </span>
        </div>

        <div className={styles.propertyCard__price}>
          <h5>${prices.withoutTax}</h5>
          <span>night</span>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
