import React from 'react';

import styles from './trips.module.css';
import TripInfo from '../components/trips/tripInfo';
import SideNav from '../components/sideNav/sideNav';
import Header from '../components/header/header';

const Trips = props => {
  return (
    <div className={styles.flexContainer}>
      <SideNav />
      <div className={styles.wrapper}>
        <Header narator={'Trip Details'} style={styles} />
        <TripInfo props={props} styles={styles} />
      </div>
    </div>
  );
};

export default Trips;
