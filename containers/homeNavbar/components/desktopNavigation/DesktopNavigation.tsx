import Link from "next/link";
import styles from "./DesktopNavigation.module.scss";
import DesktopLogo from "@/components/logo/desktopLogo/DesktopLogo";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiUser, FiGlobe } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

const DesktopNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.desktopNavigation}>
      <Link href="/">
        <DesktopLogo />
      </Link>

      {children}

      <div className={styles.desktopNavigation__right}>
        <Link href="/">Airbnb your home</Link>

        <Link href="/">
          <CiGlobe />
        </Link>

        <button className={styles.desktopNavigation__right_button}>
          <FiMenu />
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default DesktopNavigation;
