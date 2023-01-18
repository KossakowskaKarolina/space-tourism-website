import React from "react";
import PropTypes from 'prop-types'
import styles from './TitleText.module.css'

const TitleText = ({text, otherText, className}) => (
  <h5 className={className}><span className={styles.text}>{text}</span>{otherText}</h5>
)

TitleText.propTypes = {
  text: PropTypes.string,
  otherText: PropTypes.string,
  className: PropTypes.string,
}

export default TitleText;
