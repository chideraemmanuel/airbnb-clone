import Card from "@/components/card/Card";
import Link from "next/link";
import styles from "./SignInCard.module.scss";

const SignInCard = () => {
  return (
    <div className={styles.signInCard}>
      <Card>
        <ul className={styles.signIn}>
          <li>
            <Link href="/">Sign up</Link>
          </li>
          <li>
            <Link href="/">Log in</Link>
          </li>
        </ul>

        <ul className={styles.links}>
          <li>
            <Link href="/">Airbnb your home</Link>
          </li>
          <li>
            <Link href="/">Help</Link>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default SignInCard;
