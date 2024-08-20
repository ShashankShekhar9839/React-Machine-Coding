import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  const { children } = props;
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <button className={styles.btnStyles}>{children}</button>
    </div>
  );
};

export default Button;
