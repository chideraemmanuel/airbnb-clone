import styles from "./Card.module.scss";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
