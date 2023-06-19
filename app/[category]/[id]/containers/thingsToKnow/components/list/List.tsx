import { FiChevronRight } from "react-icons/fi";
import styles from "./List.module.scss";

// const listitems = [1, 2, 3];

interface Props {
  listHeader: string;
  listItems?: string[];
  cancellationPolicy?: {
    fullCancellationPolicy: string;
    durationInHours: 48 | 24 | 0;
  };
}

const List = ({ listHeader, listItems, cancellationPolicy }: Props) => {
  // const { durationInHours, fullCancellationPolicy } = cancellationPolicy;

  return (
    <div className={styles.list}>
      <h5 className={styles.list__header}>{listHeader}</h5>

      {listItems && (
        <div className={styles.list__listItems}>
          {listItems?.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      )}

      {cancellationPolicy && (
        <div className={styles.list__listItems}>
          <span>
            Free cancellation after {cancellationPolicy?.durationInHours}
          </span>
          <span>{cancellationPolicy?.fullCancellationPolicy}</span>
        </div>
      )}

      <button className={styles.list__button}>
        <span>Show more</span>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default List;
