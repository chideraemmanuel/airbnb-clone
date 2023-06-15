import styles from "./MobileNavigation.module.scss";
import MobileCategoriesSlider from "./components/mobileCategoriesSlider/MobileCategoriesSlider";
import MobileHomeFilfer from "./components/mobileHomeFilter/MobileHomeFilfer";

const MobileNavigation = () => {
  return (
    <div className={styles.mobileNavigation}>
      <MobileHomeFilfer />
      {/* <MobileHomeFilfer /> */}
      {/* <MobileCategoriesSlider /> */}
    </div>
  );
};

export default MobileNavigation;
