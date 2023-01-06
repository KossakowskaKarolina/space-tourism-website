import React from "react";
import styles from './Destination.module.css';

import MainLayout from "../../layout/MainLayout";
import TitleText from "../../common/TitleText/TitleText";
import DestinationBox from "../../layout/DestinationBox/DestinationBox";

const Destination = () => {
  return (
    <div className={styles.body}>
      <MainLayout />
      <TitleText text='01' otherText='Pick your destination' />
      <DestinationBox />
    </div>
  )

}

export default Destination;