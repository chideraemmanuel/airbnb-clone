import { FiChevronRight, FiFilm, FiMusic } from "react-icons/fi";
import HostCard from "../../components/hostCard/HostCard";
import styles from "./MeetYourHost.module.scss";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { CohostsTypes, HostTypes, ReviewsTypes } from "@/types";
import {
  FaChessBishop,
  FaPaw,
  FaSchool,
  FaSpeakerDeck,
  FaStarAndCrescent,
} from "react-icons/fa";
import { urlFor } from "@/sanity";

const bios = [1, 2, 3, 4, 5];
// const cohosts = ["dorothee"];
const cohostss = [1, 2, 3];

interface Props {
  host: HostTypes;
  cohosts: CohostsTypes[];
  reviews: ReviewsTypes[];
  rating: string;
}

const MeetYourHost: React.FC<Props> = ({ host, cohosts, reviews, rating }) => {
  const {
    about: {
      description,
      occupation,
      favoriteSongInHighSchool,
      pets,
      courtesy,
      school,
      uniqueAttributes,
      language,
    },
  } = host;

  // const test = [
  //   description,
  //   occupation,
  //   favoriteSongInHighSchool,
  //   pets,
  //   courtesy,
  //   school,
  //   uniqueAttributes,
  //   language,
  // ].map(item => {
  //   if (item) {
  //     return item;
  //   }
  // })

  // console.log(test)

  return (
    <div className={styles.meetYourHost}>
      <h4>Meet your host</h4>

      <div className={styles.meetYourHost__content}>
        <HostCard host={host} reviews={reviews} rating={rating} />

        <div className={styles.meetYourHost__content_bio}>
          {favoriteSongInHighSchool && (
            <div>
              <FiMusic />
              <span>
                Favorite song in high school: {favoriteSongInHighSchool}
              </span>
            </div>
          )}

          {pets && (
            <div>
              <FaPaw />
              <span>Pets: {pets}</span>
            </div>
          )}

          {school && (
            <div>
              <FaSchool />
              <span>Schooled at: {school}</span>
            </div>
          )}

          {language && (
            <div>
              <FaSpeakerDeck />
              <span>Speaks {language}</span>
            </div>
          )}

          {uniqueAttributes && (
            <div>
              <FaStarAndCrescent />
              <span>What makes my home unique: {uniqueAttributes}</span>
            </div>
          )}

          {courtesy && (
            <div>
              <FaChessBishop />
              <span>What i do for guests: {courtesy}</span>
            </div>
          )}

          {/* Button */}
          <button>
            <span>Show more</span>
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.meetYourHost__content_cohosts}>
          <div className={styles.meetYourHost__content_cohosts_list}>
            {cohosts.map((cohost) => (
              <div>
                <Image
                  src={urlFor(cohost.profileImage.asset).url()}
                  alt={cohost.firstName}
                  width={50}
                  height={50}
                />
                <span>{cohost.firstName}</span>
              </div>
            ))}
          </div>

          <Link href="/">Message host</Link>
        </div>

        <span className={styles.meetYourHost__content_footer}>
          To protect your payment, never transfer moner or communicate outside
          of the Airbnb website or app
        </span>
      </div>
    </div>
  );
};

export default MeetYourHost;
