import MobileLogo from "@/components/logo/mobileLogo/MobileLogo";
import styles from "./TabletNavigation.module.scss";
import Link from "next/link";
import TopRightNav from "../topRightNav/TopRightNav";

const TabletNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.tabletNavigation}>
      <div className={styles.tabletNavigation__left}>
        <Link href="/">
          <MobileLogo />
        </Link>
        {children}
      </div>

      <TopRightNav />
    </div>
  );
};

export default TabletNavigation;
