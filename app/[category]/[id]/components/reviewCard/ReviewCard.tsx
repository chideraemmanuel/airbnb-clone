import ReviewGiver from "../../containers/reviews/components/reviewGiver/ReviewGiver";
import styles from "./ReviewCard.module.scss";

const ReviewCard = () => {
  return (
    <div className={styles.reviewCard}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eveniet
        autem blanditiis commodi dolorum tempore voluptatum omnis porro
        architecto deserunt eum, iure quae quibusdam quidem maxime repellat ipsa
        non laboriosam?
      </p>

      <ReviewGiver />
    </div>
  );
};

export default ReviewCard;
