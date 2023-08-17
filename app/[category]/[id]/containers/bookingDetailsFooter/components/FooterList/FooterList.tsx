import styles from "./FooterList.module.scss";

// const listItems = [1, 2, 3, 4, 5];

interface Props {
  list: {
    header: string;
    list: string[];
  };
}

const FooterList = ({ list: listObject }: Props) => {
  const { header, list } = listObject;

  return (
    <div className={styles.footerList}>
      <h6 className={styles.footerList__header}>{header}</h6>

      <ul className={styles.footerList__list}>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
