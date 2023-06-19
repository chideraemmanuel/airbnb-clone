import { FaStar } from "react-icons/fa";
import Review from "../../components/review/Review";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import styles from "./Reviews.module.scss";
import { ReviewsTypes } from "@/types";

const reviews = [1, 2, 3, 4, 5];

interface Props {
  rating: string;
  reviews: ReviewsTypes[];
}

const Reviews = ({ rating, reviews }: Props) => {
  return (
    <section className={styles.reviews}>
      <h4 className={styles.reviews__header}>
        <div>
          <FaStar />
          <span>{rating}</span>
        </div>
        <span>- {reviews.length} Reviews</span>
      </h4>

      <div className={styles.reviews__list}>
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>

      <div className={styles.reviews__slider}>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>

      <button className={styles.reviews__button}>Show all reviews</button>
    </section>
  );
};

export default Reviews;
