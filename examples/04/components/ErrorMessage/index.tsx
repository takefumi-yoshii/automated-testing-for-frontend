import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

type Props = ComponentPropsWithoutRef<"p">;

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(
  function ErrorMessage({ className, ...props }, ref) {
    return (
      <span
        {...props}
        role="alert"
        aria-live="off"
        ref={ref}
        className={clsx(className, styles.module)}
      />
    );
  },
);
