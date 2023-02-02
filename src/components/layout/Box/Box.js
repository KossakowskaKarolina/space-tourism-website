import React from 'react';
import PropTypes from 'prop-types'
import styles from './Box.module.css';
import { Grid } from '@mui/material';

import BodyText from '../../common/BodyText/BodyText';

const Box = (props) => {
  if (props.divider){
    return (
    <div>
      <h2 className={styles.heading}>{props.name}</h2>
      <BodyText text={props.description}></BodyText>
      <div className={styles.divider}/>
      <Grid container>
        <Grid item xs={12} md={6}>
          <h5 className={styles.subheading}>Avg. distance</h5>
          <h4 className={styles.subheading_text}>{props.distance}</h4>
        </Grid>
        <Grid item xs={12} md={6}>
          <h5 className={styles.subheading}>Est. travel time</h5>
          <h4 className={styles.subheading_text}>{props.travel}</h4>
        </Grid>
      </Grid>
    </div>
  )
  } else{
    return(
      <div>
        <h3 className={styles.intro_heading}>{props.introHeading}</h3>
        <h2 className={styles.heading_smaller}>{props.name}</h2>
        <BodyText text={props.description}></BodyText>
      </div>
    )
  }
}

Box.propTypes = {
  introHeading: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  distance: PropTypes.string,
  travel: PropTypes.string,
}

export default Box;