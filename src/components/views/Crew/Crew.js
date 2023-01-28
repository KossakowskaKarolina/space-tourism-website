import React from "react";
import styles from './Crew.module.css';
import { Grid } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import Box from "../../layout/Box/Box";
import Image from "../../common/Image/Image";

import data from '../../../data.json';

const Crew = () => {
let newData = data.crew;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText className={styles.title} text='02' otherText='Meet your crew'></TitleText>
      <Tabs selectedTabClassName={styles.tabActive}>
        {newData.map(item => 
          <TabPanel key={item.name} value={item.name}>
            <Grid container className={styles.container}>
              <Grid item xs={12} md={6}>
                <Box 
                  introHeading={item.role}
                  name={item.name}
                  description={item.bio}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Image image={item.images.png} alt={`${item.name} image`}/>
              </Grid>
            </Grid>
          </TabPanel>)}
          <TabList className={styles.tabs}>
              {newData.map(item =>
                <Tab key={item.name} value={item.name} />
              )}
            </TabList>
      </Tabs>
    </div>
  )
}

export default Crew;