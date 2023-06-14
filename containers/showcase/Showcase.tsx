import styles from "./Showcase.module.scss";
import PropertyCard from "./components/propertyCard/PropertyCard";

const dum = [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1];

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      {dum.map((item, index) => (
        <PropertyCard key={index} />
      ))}
    </section>
  );
};

export default Showcase;
