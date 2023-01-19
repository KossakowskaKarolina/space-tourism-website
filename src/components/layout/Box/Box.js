import React from 'react';
import { Grid } from '@mui/material';

import styles from './Box.module.css';

const Box = (props) => {
  return (
    <div className={styles.destination_container}>
      <h3 className={styles.intro_heading}>{props.introHeading}</h3>
      <h2 className={styles.heading}>{props.name}</h2>
      <p className={styles.destination_text}>{props.description}</p>
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
}

export default Box;