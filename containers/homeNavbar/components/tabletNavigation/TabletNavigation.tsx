import MobileLogo from "@/components/logo/mobileLogo/MobileLogo";
import styles from "./TabletNavigation.module.scss";
import Link from "next/link";
import TopRightNav from "../topRightNav/TopRightNav";
import NavContainer from "../navContainer/NavContainer";

const TabletNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavContainer>
      <div className={styles.tabletNavigation}>
        <div className={styles.tabletNavigation__left}>
          <Link href="/">
            <MobileLogo />
          </Link>
          {children}
        </div>

        <TopRightNav />
      </div>
    </NavContainer>
  );
};

export default TabletNavigation;
