import styles from "./ThingsToKnow.module.scss";
import List from "./components/list/List";

const lists = [1, 2, 3];

interface Props {
  safetyMeasures: string[];
  cancellationPolicy: {
    fullCancellationPolicy: string;
    durationInHours: 48 | 24 | 0;
  };
  houseRules: string[];
}

const ThingsToKnow = ({
  safetyMeasures,
  cancellationPolicy,
  houseRules,
}: Props) => {
  return (
    <section className={styles.thingsToKnow}>
      <h4 className={styles.thingsToKnow__header}>Things to know</h4>

      <div className={styles.thingsToKnow__lists}>
        <List listHeader="House Rules" listItems={houseRules} />
        <List listHeader="Safety" listItems={safetyMeasures} />
        <List
          listHeader="Cancellation Policy"
          cancellationPolicy={cancellationPolicy}
        />
      </div>
    </section>
  );
};

export default ThingsToKnow;
