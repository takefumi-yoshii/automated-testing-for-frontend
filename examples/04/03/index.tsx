import React, { useState } from "react";
import { AnchorButton } from "../components/AnchorButton";
import styles from "./styles.module.css";

export const Component = () => {
  const [message, setMessage] = useState("");
  return (
    <div className={styles.module}>
      <AnchorButton
        onClick={async () => {
          const result = await fetch("https://myapi.com/data").then((res) =>
            res.json(),
          );
          setMessage(result.message);
        }}
      >
        Fetch Data
      </AnchorButton>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
