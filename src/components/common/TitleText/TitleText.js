import React from "react";
import PropTypes from 'prop-types'
import styles from './TitleText.module.css'

const TitleText = (props) => (
  <h5 className={props.className}><span className={styles.text}>{props.text}</span>{props.otherText}</h5>
)

TitleText.propTypes = {
  text: PropTypes.string,
  otherText: PropTypes.string,
  className: PropTypes.string,
}

export default TitleText;
