import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./BookingDetails.module.scss";
import avatar from "@/assets/avatar.jpg";
import { FaBed } from "react-icons/fa";
import MeetYourHost from "../meetYourHost/MeetYourHost";
import AboutPlace from "../aboutPlace/AboutPlace";
import BookingCard from "../../components/bookingCard/BookingCard";

const percs = [1, 2, 3];
const percss = [1, 2, 3];

const BookingDetails = () => {
  return (
    <section className={styles.bookingDetails}>
      <div className={styles.bookingDetails__details}>
        <div className={styles.bookingDetails__details_header}>
          <h2>Room in a rental unit hosted by Golwen</h2>
          <Image src={avatar} alt="avatar" />
        </div>

        <div className={styles.bookingDetails__details_percs}>
          {percs.map((perc) => (
            <div className={styles.bookingDetails__details_percs_perc}>
              <FaBed />
              <span>1 Queen bed and others</span>
            </div>
          ))}
        </div>

        <div className={styles.bookingDetails__details_info}>
          {percss.map((percc) => (
            <div>
              <FaBed />
              <div>
                <h3>Room in rental unit</h3>
                <span>
                  Your own room in a home, plus access to shared spaces
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* meet your host */}
        <MeetYourHost />

        {/* about place */}
        <AboutPlace />
      </div>

      <BookingCard />
    </section>
  );
};

export default BookingDetails;
