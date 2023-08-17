import Link from "next/link";
import styles from "./DesktopNavigation.module.scss";
import DesktopLogo from "@/components/logo/desktopLogo/DesktopLogo";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiUser, FiGlobe } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import TopRightNav from "../topRightNav/TopRightNav";
import NavContainer from "../navContainer/NavContainer";
import MobileLogo from "@/components/logo/mobileLogo/MobileLogo";

const DesktopNavigation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NavContainer>
      <div className={styles.desktopNavigation}>
        <div className={styles.desktopNavigation__left}>
          <Link href="/" className={styles.desktopNavigation__left_logo}>
            <DesktopLogo />
            <MobileLogo />
          </Link>

          {children}
        </div>

        <TopRightNav />
      </div>
    </NavContainer>
  );
};

export default DesktopNavigation;
