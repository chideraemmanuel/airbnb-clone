import styles from "./NavContainer.module.scss";

const NavContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.navContainer}>{children}</div>;
};

export default NavContainer;
