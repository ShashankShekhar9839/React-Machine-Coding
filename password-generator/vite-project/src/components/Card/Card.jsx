import React from "react";
import styles from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={styles['card-wrapper']}>{children}</div>;
};

export default Card;
