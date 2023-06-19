import { FaHome } from "react-icons/fa";
import styles from "./CategorySliderItem.module.scss";
import { IconType } from "react-icons/lib";

const CategorySliderItem = ({
  item,
}: {
  item: { icon: IconType; label: string };
}) => {
  const { label, icon: Icon } = item;

  return (
    <div className={styles.categorySliderItem}>
      <input type="radio" name="category" id={label} value={label} />

      <label htmlFor={label}>
        <Icon />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CategorySliderItem;
