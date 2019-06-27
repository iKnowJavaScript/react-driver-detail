import React from 'react';

import styles from './driver.module.css';

import SideNav from '../components/sideNav/sideNav';
import Header from '../components/header/header';
import DriverSection from '../components/statistic/driverSection';

function DriversPage() {
  return (
    <div className={styles.flexContainer}>
      <SideNav />
      <div className={styles.wrapper}>
        <Header narator={'DashBoard'} style={styles} />
        <DriverSection style={styles} />
      </div>
    </div>
  );
}

export default DriversPage;

/* <Content styles={styles.boxOne} style={styles} />
<NumberNav style={styles} /> */
