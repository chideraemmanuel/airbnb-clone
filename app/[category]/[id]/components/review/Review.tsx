import ReviewGiver from "../../containers/reviews/components/reviewGiver/ReviewGiver";
import styles from "./Review.module.scss";

const Review = () => {
  return (
    <div className={styles.review}>
      <ReviewGiver />

      <p className={styles.review__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in
        architecto eius suscipit nostrum dolor veritatis, nemo iste natus
        sapiente, adipisci quod, iure incidunt tenetur quae alias modi et omnis.
      </p>
    </div>
  );
};

export default Review;
