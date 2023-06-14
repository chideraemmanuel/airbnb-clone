import { FaHome } from "react-icons/fa";
import styles from "./CategorySliderItem.module.scss";

const CategorySliderItem = ({ item }: { item: string }) => {
  return (
    <div key={item} className={styles.categorySliderItem}>
      <input type="radio" name="category" id={item} value={item} />

      <label htmlFor={item}>
        <FaHome />
        <span>Rooms</span>
      </label>
    </div>
  );
};

export default CategorySliderItem;
