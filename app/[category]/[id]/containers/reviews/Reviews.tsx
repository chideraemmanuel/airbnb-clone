import { FaStar } from "react-icons/fa";
import Review from "../../components/review/Review";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import styles from "./Reviews.module.scss";

const reviews = [1, 2, 3, 4, 5];

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h4 className={styles.reviews__header}>
        <div>
          <FaStar />
          <span>4.89</span>
        </div>
        <span>- 22 Reviews</span>
      </h4>

      <div className={styles.reviews__list}>
        {reviews.map((review) => (
          <Review />
        ))}
      </div>

      <div className={styles.reviews__slider}>
        {reviews.map((review) => (
          <ReviewCard />
        ))}
      </div>

      <button className={styles.reviews__button}>Show all reviews</button>
    </section>
  );
};

export default Reviews;
