import Image from "next/image";
import styles from "./page.module.scss";
import HomeNavbar from "@/containers/homeNavbar/HomeNavbar";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main className={styles.main}>
        <h2>Main content goes here!</h2>
      </main>
    </>
  );
}
