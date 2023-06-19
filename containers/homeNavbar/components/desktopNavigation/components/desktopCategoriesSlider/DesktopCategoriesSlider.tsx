import CategorySliderItem from "../../../categorySliderItem/CategorySliderItem";
import styles from "./DesktopCategoriesSlider.module.scss";
import { FaFire, FaHome, FaUmbrellaBeach } from "react-icons/fa";

const dummy = [
  {
    label: "Rooms",
    icon: FaHome,
  },
  {
    label: "Beach",
    icon: FaUmbrellaBeach,
  },
  {
    label: "Trending",
    icon: FaFire,
  },
];

const DesktopCategoriesSlider = () => {
  return (
    <div className={styles.desktopCategoriesSlider}>
      {dummy.map((item) => (
        <CategorySliderItem item={item} key={item.label} />
      ))}
    </div>
  );
};

export default DesktopCategoriesSlider;
