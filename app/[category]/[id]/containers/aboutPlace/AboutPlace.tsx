import { FiChevronRight } from "react-icons/fi";
import styles from "./AboutPlace.module.scss";
import { FaBed, FaCheese, FaLink } from "react-icons/fa";

const percs = [1, 2, 3, 4, 5];

interface Props {
  description: string;
  bedType: "double-bed" | "queen-bed" | "single-bed";
  amenities: {
    amenityTitle: string;
  }[];
}

const AboutPlace: React.FC<Props> = ({ description, bedType, amenities }) => {
  // const test = [...amenities].map(amenity => {
  //   return amenity.amenityTitle
  // });

  return (
    <section className={styles.aboutPlace}>
      <div className={styles.aboutPlace__description}>
        <h3>About this place</h3>
        <p>{description}</p>

        <button>
          <span>Show more</span>
          <FiChevronRight />
        </button>
      </div>

      <div className={styles.aboutPlace__sleep}>
        <h3>Where you'll sleep</h3>
        <div className={styles.aboutPlace__sleep_box}>
          <FaBed />
          <h5>Bedroom</h5>
          <span>1 {bedType}</span>
        </div>
      </div>

      <div className={styles.aboutPlace__percs}>
        <h3>What this place offers</h3>

        <div>
          <div className={styles.aboutPlace__percs_one}>
            {amenities.splice(0, 3).map((amenity) => (
              <div>
                <FaLink />
                <span>{amenity.amenityTitle}</span>
              </div>
            ))}
          </div>

          {/* <div className={styles.aboutPlace__percs_two}>
            {percs.map((perc) => (
              <div>
                <FaCheese />
                <span>Security cameras on property</span>
              </div>
            ))}
          </div> */}
        </div>

        <button>Show all {amenities.length} amenities</button>
      </div>
    </section>
  );
};

export default AboutPlace;
