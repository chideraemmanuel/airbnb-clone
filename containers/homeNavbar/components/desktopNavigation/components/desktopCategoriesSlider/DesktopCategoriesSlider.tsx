import { categories } from "@/constants";
import CategorySliderItem from "../../../categorySliderItem/CategorySliderItem";
import styles from "./DesktopCategoriesSlider.module.scss";
import { FaFire, FaHome, FaUmbrellaBeach } from "react-icons/fa";

const DesktopCategoriesSlider: React.FC = () => {
  return (
    <div className={styles.desktopCategoriesSlider}>
      {categories.map((item) => (
        <CategorySliderItem item={item} key={item.label} />
      ))}
    </div>
  );
};

export default DesktopCategoriesSlider;
