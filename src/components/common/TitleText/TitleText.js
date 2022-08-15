import React from "react";
import PropTypes from 'prop-types'
import styles from './TitleText.module.css'

const TitleText = ({text, otherText}) => (
  <h5><span className={styles.text}>{text}</span>{otherText}</h5>
)

TitleText.propTypes = {
  text: PropTypes.string,
  otherText: PropTypes.string,
}

export default TitleText;
