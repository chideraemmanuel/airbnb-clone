import { FiCheck } from "react-icons/fi";
import styles from "./TaxToggle.module.scss";
import TaxToggleButton from "./components/taxToggleButton/TaxToggleButton";

const TaxToggle = () => {
  return (
    <div className={styles.taxToggle}>
      <div className={styles.taxToggle__info}>
        <h3>Display total price</h3>

        <div className={styles.taxToggle__info_break}></div>

        <span>Include all fees, before taxes</span>
      </div>

      <TaxToggleButton />
    </div>
  );
};

export default TaxToggle;
