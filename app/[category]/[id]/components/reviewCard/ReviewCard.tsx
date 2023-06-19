import { ReviewsTypes } from "@/types";
import ReviewGiver from "../../containers/reviews/components/reviewGiver/ReviewGiver";
import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ review: reviewObject }: { review: ReviewsTypes }) => {
  const { review, reviewGiver, reviewDate } = reviewObject;

  return (
    <div className={styles.reviewCard}>
      <p>{review}</p>

      <ReviewGiver reviewGiver={reviewGiver} reviewDate={reviewDate} />
    </div>
  );
};

export default ReviewCard;
