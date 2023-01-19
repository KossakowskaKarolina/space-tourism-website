import React from "react";
import PropTypes from 'prop-types'

const Image = (props) => {
  return (
    <img src={props.image} className={props.className} alt={props.alt}/>
  )
}

Image.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
}

export default Image;