import { FaStar } from "react-icons/fa";
import BookingDetailsNavbar from "./containers/bookingDetailsNavbar/BookingDetailsNavbar";
import styles from "./page.module.scss";
import BookingDetailsPageHeader from "./components/bookingDetailsPageHeader/BookingDetailsPageHeader";
import BookingDetailsImageGrid from "./components/bookingdetailsImageGrid/BookingDetailsImageGrid";
import BookingDetailsMobileCarousel from "./containers/bookingDetailsMobileCarousel/BookingDetailsMobileCarousel";
import Card from "@/components/card/Card";
import BookingDetails from "./containers/bookingDetails/BookingDetails";
import Reviews from "./containers/reviews/Reviews";
import ThingsToKnow from "./containers/thingsToKnow/ThingsToKnow";
import BookingDetailsFooter from "./containers/bookingDetailsFooter/BookingDetailsFooter";
import { fetchProperty } from "@/utils/fetchProperty";
import { propertyTypes } from "@/types";
import DateRangePicker from "@/components/dateRangePicker/DateRangePicker";

const BookingDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property: propertyTypes[] = await fetchProperty(params.id);
  // console.log(property[0]);
  // console.log(property[0].propertyHosts);
  // console.log(JSON.stringify(params.id));

  // const {
  //   _id,
  //   title,
  //   description,
  //   amenities,
  //   prices,
  //   location,
  //   mainImage,
  //   otherImages,
  //   room,
  //   bathroom,
  //   bedType,
  //   otherGuests,
  //   safetyMeasures,
  //   cancellationPolicy,
  //   houseRules,
  //   category: { categoryName },
  //   rating,
  //   reviews,
  //   propertyHosts: { host, cohosts },
  //   availableDates,
  // } = property[0];
  // const { from, to } = availableDates;

  // const availableFrom = new Date(from);
  // const availableTo = new Date(to);

  return (
    <>
      <header className={styles.bookingDetailsPage__header}>
        <BookingDetailsNavbar />
      </header>

      <main className={styles.bookingDetailsPage__main}>
        {/* <div className={styles.bookingDetailsPage__main_showcase}>
          <BookingDetailsMobileCarousel
            mainImage={mainImage}
            otherImages={otherImages}
            title={title}
          />

          <BookingDetailsPageHeader
            title={title}
            rating={rating}
            reviews={reviews}
            location={location}
          />

          <BookingDetailsImageGrid
            mainImage={mainImage}
            otherImages={otherImages}
            title={title}
          />
        </div>

        <BookingDetails
          prices={prices}
          description={description}
          amenities={amenities}
          rating={rating}
          categoryName={categoryName}
          host={host}
          cohosts={cohosts}
          reviews={reviews}
          room={room}
          bathroom={bathroom}
          bedType={bedType}
          otherGuests={otherGuests}
        /> */}

        <DateRangePicker />

        {/* <Reviews rating={rating} reviews={reviews} />

        <ThingsToKnow
          safetyMeasures={safetyMeasures}
          houseRules={houseRules}
          cancellationPolicy={cancellationPolicy}
        /> */}
      </main>

      <footer className={styles.bookingDetailsPage__footer}>
        <BookingDetailsFooter />
      </footer>
    </>
  );
};

export default BookingDetailsPage;
