import styles from "./FooterList.module.scss";

const listItems = [1, 2, 3, 4, 5];

const FooterList = () => {
  return (
    <div className={styles.footerList}>
      <h6 className={styles.footerList__header}>List Header</h6>

      <ul className={styles.footerList__list}>
        {listItems.map((item) => (
          <li>Supporting people with disabilities</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
