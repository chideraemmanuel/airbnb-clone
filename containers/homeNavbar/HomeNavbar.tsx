import styles from "./HomeNavbar.module.scss";
import DesktopNavigation from "./components/desktopNavigation/DesktopNavigation";
import HomeDateFilter from "./components/desktopNavigation/components/homeDateFilter/HomeDateFilter";
import MobileNavigation from "./components/mobileNavigation/MobileNavigation";
import TabletNavigation from "./components/tabletNavigation/TabletNavigation";

const HomeNavbar = () => {
  return (
    <nav className={styles.homeNavbar}>
      <DesktopNavigation children={<HomeDateFilter />} />
      {/* <TabletNavigation children={<HomeDateFilter />} /> */}
      <MobileNavigation />
    </nav>
  );
};

export default HomeNavbar;
