import { sanity } from "@/sanity";
import styles from "./Showcase.module.scss";
import PropertyCard from "./components/propertyCard/PropertyCard";
import { propertyTypes } from "@/types";
import { fetchProperties } from "@/utils/fetchProperties";

const Showcase: React.FC = async () => {
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
