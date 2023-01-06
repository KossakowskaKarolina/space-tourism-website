import React from 'react';
import { Grid } from '@mui/material';
import data from '../../../data';

import styles from './DestinationBox.module.css';

const DestinationBox = () => {
  const newData = data[0].destinations
  console.log(newData[0])

  return (
    newData.map(item => {
    return (
      <Grid key={item.name} container>
        <Grid item xs={12} md={6}>
          <img src={require("../../../assets/destination/image-moon.png")}/>
          {/* nie może być relatywna ścieżka, trzeba uploadować pliki*/}
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </Grid>
      </Grid>
  )})
  )


}

export default DestinationBox;

