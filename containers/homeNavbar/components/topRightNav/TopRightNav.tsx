import Link from "next/link";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiUser, FiGlobe } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import styles from "./TopRightNav.module.scss";
import SignInCard from "../signInCard/SignInCard";

const TopRightNav = () => {
  return (
    <>
      {/* <SignInCard /> */}
      <div className={styles.topRightNav}>
        <Link href="/">Airbnb your home</Link>

        <Link href="/">
          <CiGlobe />
        </Link>

        <button className={styles.topRightNav__button}>
          <FiMenu />
          <FiUser />
        </button>
      </div>
    </>
  );
};

export default TopRightNav;
