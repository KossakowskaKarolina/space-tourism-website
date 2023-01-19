import React, { useState } from "react";
import styles from './Destination.module.css';
import { Grid } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import DestinationBox from "../../layout/DestinationBox/DestinationBox";
import Image from "../../common/Image/Image";

import data from '../../../data.json';

const Destination = () => {

  let [moon, mars, europa, titan] = data.destinations;
  let newData = data.destinations;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText className={styles.destination_title} text='01' otherText='Pick your destination' />
      <Tabs selectedTabClassName={styles.tabActive}>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={7}></Grid>
          <Grid item xs={12} md={5}>
            <TabList className={styles.tabs}>
              <Tab value={moon.name} className={styles.tabButton} >{moon.name}</Tab>
              <Tab value={mars.name} className={styles.tabButton}>{mars.name}</Tab>
              <Tab value={europa.name} className={styles.tabButton}>{europa.name}</Tab>
              <Tab value={titan.name} className={styles.tabButton}>{titan.name}</Tab>
            </TabList>
          </Grid>
        </Grid>
        {newData.map(item => 
          <TabPanel value={item.name} key={item.name}>
            <Grid container className={styles.container}>
              <Grid item xs={12} md={6}>
                <Image image={item.images.png} alt={`${item.name} image`}/>
              </Grid>
              <Grid item xs={0} md={1}></Grid>
              <Grid item xs={12} md={5}>
                <DestinationBox 
                  name={item.name}
                  description={item.description}
                  distance={item.distance}
                  travel={item.travel}
                />
              </Grid>
            </Grid>
          </TabPanel>
        )}
      </Tabs>
    </div>
  )
}

export default Destination;