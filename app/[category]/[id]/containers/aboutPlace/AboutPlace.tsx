import { FiChevronRight } from "react-icons/fi";
import styles from "./AboutPlace.module.scss";
import { FaBed, FaCheese } from "react-icons/fa";

const percs = [1, 2, 3, 4, 5];

const AboutPlace = () => {
  return (
    <section className={styles.aboutPlace}>
      <div className={styles.aboutPlace__description}>
        <h3>About this place</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit quo, illum quidem iusto vel adipisci aut maxime quam
          quas, nam veniam modi nesciunt unde ipsum porro quis sit libero
          quisquam, nulla quia minus assumenda hic minima! Laboriosam itaque
          labore assumenda.
        </p>

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
          <span>1 queen bed</span>
        </div>
      </div>

      <div className={styles.aboutPlace__percs}>
        <h3>What this place offers</h3>

        <div>
          <div className={styles.aboutPlace__percs_one}>
            {percs.map((perc) => (
              <div>
                <FaCheese />
                <span>Security cameras on property</span>
              </div>
            ))}
          </div>

          <div className={styles.aboutPlace__percs_two}>
            {percs.map((perc) => (
              <div>
                <FaCheese />
                <span>Security cameras on property</span>
              </div>
            ))}
          </div>
        </div>

        <button>Show all 28 amenities</button>
      </div>
    </section>
  );
};

export default AboutPlace;
