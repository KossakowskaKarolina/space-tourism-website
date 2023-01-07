import React from "react";
import styles from './Home.module.css';

import MainLayout from "../../layout/MainLayout/MainLayout";
import Hero from "../../layout/Hero/Hero";

const Home = () => (
    <div className={styles.body}>
      <MainLayout />
      <Hero />
    </div>
  )


export default Home;