"use client";

import Link from "next/link";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiUser, FiGlobe } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import styles from "./TopRightNav.module.scss";
import SignInCard from "../signInCard/SignInCard";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "@/redux/types";
import { toggleTopRightNav } from "@/redux/slices/navigationSlice";

const TopRightNav = () => {
  const dispatch = useDispatch();
  const { isTopRightNavActive } = useSelector(
    (store: StoreTypes) => store.navigation
  );

  return (
    <>
      {isTopRightNavActive && <SignInCard />}
      <div className={styles.topRightNav}>
        <Link href="/">Airbnb your home</Link>

        <Link href="/">
          <CiGlobe />
        </Link>

        <button
          className={styles.topRightNav__button}
          onClick={() => dispatch(toggleTopRightNav())}
        >
          <FiMenu />
          <FiUser />
        </button>
      </div>
    </>
  );
};

export default TopRightNav;
