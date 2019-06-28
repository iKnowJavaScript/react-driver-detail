import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './trips.module.css';

import SideNav from '../components/sideNav/sideNav';
import Header from '../components/header/header';

function Trips() {
  return (
    <div className={styles.flexContainer}>
      <SideNav />
      <div className={styles.wrapper}>
        <Header narator={'DashBoard'} style={styles} />
      </div>
      <TripInfo />
    </div>
  );
}

export default Trips;

const TripInfo = props => {
  const {
    match: { params },
  } = props;

  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await axios.get(`api/trips/${params.tripId}`);
      setTrip(response.data.data);
    };
    fetchTrip();
  }, [params.tripId]);
  //  <Route path="/Trips:param" component={Trips} /> //param i.e tripId - then link info to paramId === trip id
  console.log(params);
  return <h1>trips with trip id</h1>;
};
