import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./BookingDetails.module.scss";
import avatar from "@/assets/avatar.jpg";
import { FaBed, FaCalendar, FaShower, FaUser, FaUsers } from "react-icons/fa";
import MeetYourHost from "../meetYourHost/MeetYourHost";
import AboutPlace from "../aboutPlace/AboutPlace";
import DateRangePicker from "@/components/dateRangePicker/DateRangePicker";
import BookingCard from "../../components/bookingCard/BookingCard";
import { urlFor } from "@/sanity";
import { CohostsTypes, HostTypes, ReviewsTypes } from "@/types";

const percs = [1, 2, 3];
const percss = [1, 2, 3];

interface Props {
  categoryName: string;
  description: string;
  host: HostTypes;
  cohosts: CohostsTypes[];
  reviews: ReviewsTypes[];
  rating: string;
  amenities: {
    amenityTitle: string;
  }[];

  prices: {
    withTax: number;
    withoutTax: number;
  };

  room: "dedicated" | "shared";

  bathroom: "dedicated" | "shared";

  bedType: "double-bed" | "queen-bed" | "single-bed";

  otherGuests: boolean;

  cancellationPolicy: {
    fullCancellationPolicy: string;
    durationInHours: 48 | 24 | 0;
  };
}

const BookingDetails: React.FC<Props> = ({
  categoryName,
  host,
  cohosts,
  reviews,
  room,
  prices,
  amenities,
  description,
  rating,
  bathroom,
  bedType,
  otherGuests,
  cancellationPolicy: { durationInHours },
}) => {
  const {
    primaryDetails: { firstName, profileImage },
  } = host;

  // const { durationInHours } = cancellationPolicy;

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

          {bathroom && (
            <div className={styles.bookingDetails__details_percs_perc}>
              <FaShower />
              {bathroom === "dedicated" ? (
                <span>Dedicated bathroom</span>
              ) : (
                <span>Shared bathroom</span>
              )}
            </div>
          )}

          {otherGuests && (
            <div className={styles.bookingDetails__details_percs_perc}>
              <FaUsers />
              {otherGuests ? (
                <span>Other guests might be present</span>
              ) : (
                <span>There won't be other guests</span>
              )}
            </div>
          )}
        </div>

        <div className={styles.bookingDetails__details_info}>
          {room === "dedicated" && (
            <div>
              <FaBed />
              <div>
                <h3>Room in rental unit</h3>
                <span>
                  Your own room in a home, plus access to shared spaces
                </span>
              </div>
            </div>
          )}

          {durationInHours > 0 && (
            <div>
              <FaCalendar />
              <div>
                <h3>Free cancellation for {durationInHours} hours</h3>
              </div>
            </div>
          )}

          {room === "dedicated" && (
            <div>
              <FaBed />
              <div>
                <h3>Room in rental unit</h3>
                <span>
                  Your own room in a home, plus access to shared spaces
                </span>
              </div>
            </div>
          )}
        </div>

        {/* meet your host */}
        {/* <MeetYourHost
          host={host}
          cohosts={cohosts}
          reviews={reviews}
          rating={rating}
        /> */}

        {/* about place */}
        <AboutPlace
          description={description}
          bedType={bedType}
          amenities={amenities}
        />

        <DateRangePicker />
      </div>

      <BookingCard prices={prices} rating={rating} reviews={reviews} />
    </section>
  );
};

export default BookingDetails;
