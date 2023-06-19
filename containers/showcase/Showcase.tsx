import { sanity } from "@/sanity";
import styles from "./Showcase.module.scss";
import PropertyCard from "./components/propertyCard/PropertyCard";
import { propertyTypes } from "@/types";
import { fetchProperties } from "@/utils/fetchProperties";

// const dum = [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1];

// const promise = fetchProperties()

const Showcase = async () => {
  const properties = await fetchProperties();
  // console.log(properties[0]);

  return (
    <section className={styles.showcase}>
      {properties &&
        properties.map((property: propertyTypes) => (
          <PropertyCard key={property._id} property={property} />
        ))}
    </section>
  );
};

export default Showcase;
