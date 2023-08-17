import Link from "next/link";
import Image from "next/image";
import styles from "./HostCard.module.scss";
import Card from "@/components/card/Card";
import avatar from "@/assets/avatar.jpg";
import { FaStar } from "react-icons/fa";
import { HostTypes, ReviewsTypes } from "@/types";
import { urlFor } from "@/sanity";

interface Props {
  host: HostTypes;
  reviews: ReviewsTypes[];
  rating: string;
}

const HostCard: React.FC<Props> = ({ host, reviews, rating }) => {
  const {
    primaryDetails: {
      firstName,
      lastName,
      profileImage: { asset },
    },
  } = host;

  return (
    <Link href="/" className={styles.hostCard}>
      <Card>
        <div className={styles.hostCard__left}>
          <div className={styles.hostCard__left_image}>
            <Image
              src={urlFor(asset).url()}
              alt={`${firstName} ${lastName}`}
              width={50}
              height={50}
            />
          </div>

          <h4>{firstName}</h4>

          <span>Superhost</span>
        </div>

        <div className={styles.hostCard__right}>
          <div>
            <h5>{reviews.length}</h5>
            <span>Reviews</span>
          </div>
          <div>
            <h5>
              {rating} <FaStar />
            </h5>
            <span>Rating</span>
          </div>
          <div>
            <h5>1</h5>
            <span>Year hosting</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default HostCard;
