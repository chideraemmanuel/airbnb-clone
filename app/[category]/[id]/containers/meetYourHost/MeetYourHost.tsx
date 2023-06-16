import { FiChevronRight, FiFilm, FiMusic } from "react-icons/fi";
import HostCard from "../../components/hostCard/HostCard";
import styles from "./MeetYourHost.module.scss";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

const bios = [1, 2, 3, 4, 5];
// const cohosts = ["dorothee"];
const cohosts = [1, 2, 3];

const MeetYourHost = () => {
  return (
    <div className={styles.meetYourHost}>
      <h4>Meet your host!</h4>

      <div className={styles.meetYourHost__content}>
        <HostCard />

        <div className={styles.meetYourHost__content_bio}>
          {bios.map((bio) => (
            <div>
              <FiMusic />
              <span>Favorite song in high school: One U2</span>
            </div>
          ))}
          <button>
            <span>Show more</span>
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.meetYourHost__content_cohosts}>
          <div className={styles.meetYourHost__content_cohosts_list}>
            {cohosts.map((cohost) => (
              <div>
                <Image src={avatar} alt="avatar" />
                <span>Dorothee</span>
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
