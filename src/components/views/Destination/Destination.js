import React, { useState } from "react";
import styles from './Destination.module.css';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import DestinationBox from "../../layout/DestinationBox/DestinationBox";

import data from '../../../data.json';

const Destination = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let [moon, mars, europa, titan] = data.destinations;

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText text='01' otherText='Pick your destination' />
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label={moon.name} value="1" />
          <Tab label={mars.name} value="2" />
          <Tab label={europa.name} value="3" />
          <Tab label={titan.name} value="4" />
        </TabList>
        <TabPanel value="1">
          <DestinationBox 
            image={moon.images.png}
            name={moon.name}
            description={moon.description}
            distance={moon.distance}
            travel={moon.travel}
          />
        </TabPanel>
        <TabPanel value="2">
          <DestinationBox 
              image={mars.images.png}
              name={mars.name}
              description={mars.description}
              distance={mars.distance}
              travel={mars.travel}
            />
        </TabPanel>
        <TabPanel value="3">
        < DestinationBox 
             image={europa.images.png}
             name={europa.name}
             description={europa.description}
             distance={europa.distance}
             travel={europa.travel}
           />
        </TabPanel>
        <TabPanel value="4">
          <DestinationBox 
              image={titan.images.png}
              name={titan.name}
              description={titan.description}
              distance={titan.distance}
              travel={titan.travel}
            />
        </TabPanel>
      </TabContext> 
    </div>
  )
}

export default Destination;