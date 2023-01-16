import React, { useState } from "react";
import styles from './Destination.module.css';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import DestinationBox from "../../layout/DestinationBox/DestinationBox";

import data from '../../../data.json';

const Destination = () => {
  const [value, setValue] = useState('Moon');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let [moon, mars, europa, titan] = data.destinations;
  let newData = data.destinations;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText text='01' otherText='Pick your destination' />
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label={moon.name} value="Moon" />
          <Tab label={mars.name} value="Mars" />
          <Tab label={europa.name} value="Europa" />
          <Tab label={titan.name} value="Titan" />
        </TabList>

        {newData.map(item => 
          <TabPanel key={item.name} value={item.name}>
          <DestinationBox 
            image={item.images.png}
            name={item.name}
            description={item.description}
            distance={item.distance}
            travel={item.travel}
          />
          </TabPanel>
       )}
      </TabContext> 
    </div>
  )
}

export default Destination;