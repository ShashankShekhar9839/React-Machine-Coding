import React, { useState } from "react";
import styles from "./inputcheckbox.module.scss";

const InputCheckbox = (props) => {
  const { checked, label } = props;

  const [ticked, setTicked] = useState(checked);

  const handleCheckboxChange = () => {
    setTicked((prevTicked) => !prevTicked);
  };

  return (
    <div
      className={`${styles.tickContainerWrapper} ${
        ticked ? styles.checked : styles.unchecked
      }`}
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        checked={ticked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
        id="checkbox"
      />
      <label htmlFor="checkbox" className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
