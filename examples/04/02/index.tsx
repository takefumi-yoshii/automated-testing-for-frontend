import React from "react";
import { AnchorButton } from "../components/AnchorButton";
import styles from "./styles.module.css";

type Props = {
  message?: string;
  onClick: (arg: string) => void;
};
export const Component = ({ onClick, message = "clicked" }: Props) => {
  return (
    <div className={styles.module}>
      <AnchorButton
        onClick={() => {
          onClick(message);
        }}
      >
        Check Actions log
      </AnchorButton>
    </div>
  );
};
