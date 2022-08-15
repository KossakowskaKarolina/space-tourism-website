import React from "react";
import styles from './TitleText.module.css'

const TitleText = ({text, otherText}) => (
  <h5><span className={styles.text}>{text}</span>{otherText}</h5>
)

export default TitleText;
