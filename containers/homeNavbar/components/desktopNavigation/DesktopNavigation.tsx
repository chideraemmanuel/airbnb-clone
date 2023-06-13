import Link from "next/link";
import styles from "./DesktopNavigation.module.scss";
import DesktopLogo from "@/components/logo/desktopLogo/DesktopLogo";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiUser, FiGlobe } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import TopRightNav from "../topRightNav/TopRightNav";

const DesktopNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.desktopNavigation}>
      <Link href="/">
        <DesktopLogo />
      </Link>

      {children}

      <TopRightNav />
    </div>
  );
};

export default DesktopNavigation;
