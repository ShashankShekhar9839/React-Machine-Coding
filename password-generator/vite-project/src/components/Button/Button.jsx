import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  const { children, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <button className={styles.btnStyles} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
