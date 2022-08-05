import React from "react";
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
// import { ReactComponent as Hamburger } from '../../assets/shared/icon-hamburger.svg'

const Header = () => (
  <Grid container>
    <Grid item sm={1} xs={2}>
      <Logo className={styles.logo}/>
    </Grid>
    <Grid item sm={4} xs={8}>
      <div className={styles.line}></div>
    </Grid>
    <Grid item sm={7} xs={2}>
    {/*<Hamburger /> figure out hamburger menu*/}
      <Box className={styles.navbar}>
        <Box className={styles.links}>
        <Link to='/'><span className={styles.numbers}>00</span>Home</Link>
        <Link to='/destination'><span className={styles.numbers}>01</span>Destination</Link>
        <Link to='/crew'><span className={styles.numbers}>02</span>Crew</Link>
        <Link to='/technology'><span className={styles.numbers}>03</span>Technology</Link>
      </Box></Box>
    </Grid>
  </Grid>
)

export default Header;