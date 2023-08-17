import styles from "./ReviewGiver.module.scss";
import avatar from "@/assets/avatar.jpg";
import { urlFor } from "@/sanity";
import Image from "next/image";

interface Props {
  reviewGiver: {
    firstName: string;
    lastName: string;
    profileImage: {
      asset: any;
    };
  };
  reviewDate: string;
}

const ReviewGiver: React.FC<Props> = ({ reviewGiver, reviewDate }: Props) => {
  const {
    firstName,
    lastName,
    profileImage: { asset },
  } = reviewGiver;

  return (
    <div className={styles.reviewGiver}>
      <div className={styles.reviewGiver__image}>
        <Image
          src={urlFor(asset).url()}
          alt={`${firstName} ${lastName}`}
          width={40}
          height={40}
        />
      </div>

      <div className={styles.reviewGiver__details}>
        <h5>{firstName}</h5>
        <span>{reviewDate}</span>
      </div>
    </div>
  );
};

export default ReviewGiver;
