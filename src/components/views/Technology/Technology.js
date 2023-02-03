import React from "react";
import styles from './Technology.module.css';
import { Grid } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import BodyText from "../../common/BodyText/BodyText";
import Box from "../../layout/Box/Box";
import Image from "../../common/Image/Image";

import data from '../../../data.json';

const Technology = () => {
  let newData = data.technology;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText className={styles.title} text='03' otherText='Space launch 101' />
      <Tabs selectedTabClassName={styles.tabActive}>
        <Grid container className={styles.container}>
          <Grid item md={2}>
            <TabList className={styles.tabs}>
              {newData.map(item =>
                <Tab key={item.name} value={item.name} className={styles.tabButton} >{newData.indexOf(item)+1}</Tab>
              )}
            </TabList>
          </Grid>
          <Grid item md={10}>
          {newData.map(item => 
            <TabPanel value={item.name} key={item.name}>
              <Grid container>
                <Grid item md={5}>
                  <BodyText className={styles.subheading} text="The terminology..." />
                  <Box 
                    name={item.name}
                    description={item.description}
                    />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={6} className={styles.image_container}>
                  <Image image={item.images.portrait} alt={`${item.name} image`} className={styles.technology_image}/>
                </Grid>
              </Grid>
            </TabPanel>
          )}
          </Grid>
        </Grid>
      </Tabs>
    </div>
  )
}

export default Technology;