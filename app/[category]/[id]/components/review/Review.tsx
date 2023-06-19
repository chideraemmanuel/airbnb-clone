import { ReviewsTypes } from "@/types";
import ReviewGiver from "../../containers/reviews/components/reviewGiver/ReviewGiver";
import styles from "./Review.module.scss";

interface Props {
  review: ReviewsTypes;
}

const Review = ({ review: reviewObject }: Props) => {
  const { review, reviewDate, reviewGiver } = reviewObject;

  return (
    <div className={styles.review}>
      <ReviewGiver reviewGiver={reviewGiver} reviewDate={reviewDate} />

      <p className={styles.review__paragraph}>{review}</p>
    </div>
  );
};

export default Review;
