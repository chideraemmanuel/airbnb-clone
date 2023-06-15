import Image from "next/image";
import styles from "./page.module.scss";
import HomeNavbar from "@/containers/homeNavbar/HomeNavbar";
import MobileCategoriesSlider from "@/containers/homeNavbar/components/mobileNavigation/components/mobileCategoriesSlider/MobileCategoriesSlider";
import { FaChevronCircleRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";
import DesktopCategoriesSlider from "@/containers/homeNavbar/components/desktopNavigation/components/desktopCategoriesSlider/DesktopCategoriesSlider";
import TaxToggle from "@/components/taxToggle/TaxToggle";
import Showcase from "@/containers/showcase/Showcase";
import DesktopCategoriesFilter from "@/containers/homeNavbar/components/desktopNavigation/components/desktopCategoriesFilter/DesktopCategoriesFilter";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <HomeNavbar />
        <DesktopCategoriesFilter />
      </header>

      <main className={styles.main}>
        {/* <TaxToggle /> */}
        <Showcase />
      </main>
    </>
  );
}
