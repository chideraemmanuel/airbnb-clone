import CategorySliderItem from "../../../categorySliderItem/CategorySliderItem";
import styles from "./MobileCategoriesSlider.module.scss";
import { FaHome } from "react-icons/fa";

// const dum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const dum = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const MobileCategoriesSlider = () => {
  return (
    <div className={styles.mobileCategoriesSlider}>
      {dum.map((item) => (
        <CategorySliderItem item={item} key={item} />
      ))}
    </div>
  );
};

export default MobileCategoriesSlider;

//  <label htmlFor={item}>
//           <input type="radio" name="category" id={item} value={item} />
//           <FaHome />
//           <span>{item}</span>
//         </label>
