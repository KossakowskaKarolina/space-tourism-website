import React from 'react';
import { Grid } from '@mui/material';

import styles from './DestinationBox.module.css';

const DestinationBox = (props) => {
  return (
    <Grid container className={styles.destination_container}>
      <Grid item xs={12} md={6}>
        <img src={props.image}/>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
      <Grid item xs={12} md={5}>
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
      </Grid>
    </Grid>
  )
}

export default DestinationBox;

