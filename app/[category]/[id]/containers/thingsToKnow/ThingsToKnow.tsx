import styles from "./ThingsToKnow.module.scss";
import List from "./components/list/List";

const lists = [1, 2, 3];

const ThingsToKnow = () => {
  return (
    <section className={styles.thingsToKnow}>
      <h4 className={styles.thingsToKnow__header}>Things to know</h4>

      <div className={styles.thingsToKnow__lists}>
        {lists.map((list) => (
          <List />
        ))}
      </div>
    </section>
  );
};

export default ThingsToKnow;
