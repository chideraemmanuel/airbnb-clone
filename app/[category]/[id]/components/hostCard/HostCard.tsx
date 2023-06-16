import Link from "next/link";
import Image from "next/image";
import styles from "./HostCard.module.scss";
import Card from "@/components/card/Card";
import avatar from "@/assets/avatar.jpg";
import { FaStar } from "react-icons/fa";

const HostCard = () => {
  return (
    <Link href="/" className={styles.hostCard}>
      <Card>
        <div className={styles.hostCard__left}>
          <div className={styles.hostCard__left_image}>
            <Image src={avatar} alt="avatar" />
          </div>

          <h4>Golwen</h4>

          <span>Superhost</span>
        </div>

        <div className={styles.hostCard__right}>
          <div>
            <h5>29</h5>
            <span>Reviews</span>
          </div>
          <div>
            <h5>
              4.93 <FaStar />
            </h5>
            <span>Rating</span>
          </div>
          <div>
            <h5>1</h5>
            <span>Year hosting</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default HostCard;
