"use client";

import styles from "./error.module.scss";

const FetchError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className={styles.fetchError}>
      <h2>Sorry, could not fetch data</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default FetchError;
