import { FiCheck } from "react-icons/fi";
import styles from "./TaxToggleButton.module.scss";

const TaxToggleButton = () => {
  return (
    <div className={styles.taxToggleButton}>
      <input type="checkbox" name="toggle" id="toggle" />
      <label htmlFor="toggle">
        <span>
          <FiCheck />
        </span>
      </label>
    </div>
  );
};

export default TaxToggleButton;
