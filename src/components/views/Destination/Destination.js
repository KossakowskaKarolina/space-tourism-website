import React from "react";
import styles from './Destination.module.css';
import { Grid } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import Box from "../../layout/Box/Box";
import Image from "../../common/Image/Image";

import data from '../../../data.json';

const Destination = () => {
  let newData = data.destinations;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText className={styles.title} text='01' otherText='Pick your destination' />
      <Tabs selectedTabClassName={styles.tabActive}>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={7}></Grid>
          <Grid item xs={12} md={5}>
            <TabList className={styles.tabs}>
              {newData.map(item =>
                <Tab key={item.name} value={item.name} className={styles.tabButton} >{item.name}</Tab>
              )}
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
                <Box divider
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