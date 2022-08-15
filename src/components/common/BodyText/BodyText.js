import React from "react";
import PropTypes from 'prop-types'
import styles from './BodyText.module.css'

const BodyText = ({text}) => (
  <p>{text}</p>
)

BodyText.propTypes = {
  text: PropTypes.string,
}

export default BodyText;