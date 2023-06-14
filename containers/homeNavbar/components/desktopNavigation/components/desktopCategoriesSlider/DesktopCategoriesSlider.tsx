import CategorySliderItem from "../../../categorySliderItem/CategorySliderItem";
import styles from "./DesktopCategoriesSlider.module.scss";

const dum = [
  "a_d",
  "b_d",
  "c_d",
  "d_d",
  "e_d",
  "f_d",
  "g_d",
  "h_d",
  "i_d",
  "j_d",
  "k_d",
  "l_d",
  "m_d",
  "n_d",
  "o_d",
  "p_d",
  "q_d",
  "r_d",
  "s_d",
  "t_d",
  "u_d",
  "v_d",
  "w_d",
  "x_d",
  "y_d",
  "z_d",
];

const DesktopCategoriesSlider = () => {
  return (
    <div className={styles.desktopCategoriesSlider}>
      {dum.map((item) => (
        <CategorySliderItem item={item} key={item} />
      ))}
    </div>
  );
};

export default DesktopCategoriesSlider;
