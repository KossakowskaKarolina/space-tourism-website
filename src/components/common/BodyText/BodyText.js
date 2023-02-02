import React from "react";
import PropTypes from 'prop-types'
import styles from './BodyText.module.css'

const BodyText = ({className, text}) => (
  <p className={className}>{text}</p>
)

BodyText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export default BodyText;