"use client";

import Card from "@/components/card/Card";
import styles from "./BookingCard.module.scss";
import { FaFlag, FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { ReviewsTypes } from "@/types";
import { useSelector } from "react-redux";
import { StoreTypes } from "@/redux/types";
import { format } from "date-fns";

interface Props {
  prices: {
    withTax: number;
    withoutTax: number;
  };
  rating: string;
  reviews: ReviewsTypes[];
}

const BookingCard: React.FC<Props> = ({ prices, rating, reviews }) => {
  const { range } = useSelector((store: StoreTypes) => store.dateRange);
  console.log("Range", range[0]);
  // console.log("Range", range[0].startDate);
  const { startDate, endDate } = range[0];

  // console.log(format(startDate, "MM/dd/yyy"));

  return (
    <div className={styles.bookingCard}>
      <Card>
        <div className={styles.bookingCard__header}>
          <div className={styles.bookingCard__header_price}>
            <h4>${prices.withTax}</h4>
            <span>Total before taxes</span>
          </div>

          <div className={styles.bookingCard__header_review}>
            <div>
              <FaStar />
              <span>{rating}</span>
            </div>

            <span>- {reviews.length} reviews</span>
          </div>
        </div>

        <div className={styles.bookingCard__datePicker}>
          <div className={styles.bookingCard__datePicker_dates}>
            <button>
              <span>Check-in</span>
              {startDate ? (
                <span>{format(startDate, "MM/dd/yyy")}</span>
              ) : (
                <span>Add a date</span>
              )}
            </button>
            <button>
              <span>Check-out</span>
              {endDate ? (
                <span>{format(endDate, "MM/dd/yyy")}</span>
              ) : (
                <span>Add a date</span>
              )}
            </button>
          </div>

          <div className={styles.bookingCard__datePicker_guests}>
            <button>
              <span>Guests</span>
              <span>1 guest</span>
            </button>

            <FiChevronDown />
          </div>
        </div>

        <button className={styles.bookingCard__button}>Reserve</button>

        <span className={styles.bookingCard__footer}>
          You won't be charged yet
        </span>
      </Card>

      <Link href="/" className={styles.bookingCard__report}>
        <FaFlag />
        <span>Report this listing</span>
      </Link>
    </div>
  );
};

export default BookingCard;
