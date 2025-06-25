import React from "react";
import type { ButtonProps } from "./Button.types";
import clsx from "clsx";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  size = "md",
  children,
  variant = "primary",
  loading,
  fullWidth,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth
      )}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
