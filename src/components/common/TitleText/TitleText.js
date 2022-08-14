import React from "react";
import styles from './TitleText.module.css'

const TitleText = props => (
  <h5><span className={styles.text}>{props.text}</span>{props.otherText}</h5>
)

export default TitleText;
