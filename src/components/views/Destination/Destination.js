import React, { useState } from "react";
import styles from './Destination.module.css';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import MainLayout from "../../layout/MainLayout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import DestinationBox from "../../layout/DestinationBox/DestinationBox";

const Destination = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText text='01' otherText='Pick your destination' />
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
          <Tab label="Item Four" value="4" />
        </TabList>
        <TabPanel value="1"><DestinationBox /></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Four</TabPanel>
      </TabContext> 
    </div>
  )

}

export default Destination;