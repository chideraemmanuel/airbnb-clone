import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./BookingDetails.module.scss";
import avatar from "@/assets/avatar.jpg";
import { FaBed, FaShower, FaUser } from "react-icons/fa";
import MeetYourHost from "../meetYourHost/MeetYourHost";
import AboutPlace from "../aboutPlace/AboutPlace";
import BookingCard from "../../components/bookingCard/BookingCard";
import { urlFor } from "@/sanity";

const percs = [1, 2, 3];
const percss = [1, 2, 3];

interface Props {
  categoryName: string;
  firstName: string;
  profileImage: {
    asset: any;
  };
  room: "dedicated" | "shared";

  bathroom: "dedicated" | "shared";

  bedType: "double-bed" | "queen-bed" | "single-bed";

  otherGuests: boolean;
}

const BookingDetails = ({
  categoryName,
  firstName,
  profileImage,
  room,
  bathroom,
  bedType,
  otherGuests,
}: Props) => {
  return (
    <section className={styles.bookingDetails}>
      <div className={styles.bookingDetails__details}>
        <div className={styles.bookingDetails__details_header}>
          {categoryName === "Rooms" && (
            <h2>Room in a rental unit hosted by {firstName}</h2>
          )}

          <Image
            src={urlFor(profileImage.asset).url()}
            alt={firstName}
            width={100}
            height={100}
          />
        </div>

        <div className={styles.bookingDetails__details_percs}>
          <div className={styles.bookingDetails__details_percs_perc}>
            <FaBed />
            <span>1 {bedType}</span>
          </div>

          <div className={styles.bookingDetails__details_percs_perc}>
            <FaShower />
            {bathroom === "dedicated" ? (
              <span>Dedicated bathroom</span>
            ) : (
              <span>Shared bathroom</span>
            )}
          </div>

          <div className={styles.bookingDetails__details_percs_perc}>
            <FaUser />
            {otherGuests ? (
              <span>Other guests might be present</span>
            ) : (
              <span>There won't be other guests</span>
            )}
          </div>
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
