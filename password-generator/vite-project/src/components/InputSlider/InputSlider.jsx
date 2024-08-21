import React, { useState } from "react";
import styles from "./inputslider.module.scss";

const InputSlider = (props) => {
  const { label, min = 0, max = 16, step = 1, value = 12, onChange } = props;
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  if (value > max) return <p>Password can't be this large</p>;

  return (
    <div className={styles.sliderContainer}>
      {label && <label htmlFor="slider">{label}</label>}
      <span className={styles.sliderValue}>{sliderValue}</span>
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className={styles.slider}
      />
    </div>
  );
};

export default InputSlider;
