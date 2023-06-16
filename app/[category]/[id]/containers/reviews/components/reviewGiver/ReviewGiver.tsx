import styles from "./ReviewGiver.module.scss";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";

const ReviewGiver = () => {
  return (
    <div className={styles.reviewGiver}>
      <div className={styles.reviewGiver__image}>
        <Image src={avatar} alt="avatar" />
      </div>

      <div className={styles.reviewGiver__details}>
        <h5>Tanya</h5>
        <span>June 2023</span>
      </div>
    </div>
  );
};

export default ReviewGiver;
