import Image from "next/image";
import styles from "./page.module.scss";
import HomeNavbar from "@/containers/homeNavbar/HomeNavbar";
import MobileCategoriesSlider from "@/containers/homeNavbar/components/mobileNavigation/components/mobileCategoriesSlider/MobileCategoriesSlider";
import { FaChevronCircleRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";
import DesktopCategoriesSlider from "@/containers/homeNavbar/components/desktopNavigation/components/desktopCategoriesSlider/DesktopCategoriesSlider";
import TaxToggle from "@/components/taxToggle/TaxToggle";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <HomeNavbar />
      </header>
      <main className={styles.main}>
        <div className={styles.main__header}>
          <DesktopCategoriesSlider />

          <div className={styles.main__header_chevron}>
            <FiChevronRight />
          </div>

          <button className={styles.main__header_filter}>
            <IoMdSwitch />
            <span>Filter</span>
          </button>
        </div>

        <TaxToggle />
      </main>
    </>
  );
}
