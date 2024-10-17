import React from "react";
import { Textbox } from "../components/Textbox";
import styles from "./styles.module.css";

export const Component = () => {
  return (
    <form className={styles.form}>
      <Textbox type="text" name="name" />
    </form>
  );
};
