import { Grid, Box } from "@mui/material";
import React from "react";
import styles from './Hero.module.css'

import TitleText from "../../common/TitleText/TitleText";
import BodyText from "../../common/BodyText/BodyText";
import Button from "../../common/Button/Button";

const Hero = () => {
  return(
      <Grid container className={styles.hero} sx={{ textAlign: 'center' }}>
        <Grid item xs={12} md={6}>
          <Box className={styles.box} sx={{ textAlign: 'left'}}>
            <TitleText text='So, you want to travel to'/>
            <h1>Space</h1>
            <BodyText text='Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!' />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button className={styles.button} text='Explore'></Button>
        </Grid>
      </Grid>
  )
}

export default Hero;