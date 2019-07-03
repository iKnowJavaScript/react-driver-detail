import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './dashboard.module.css';

import SideNav from '../components/sideNav/sideNav';
import Header from '../components/header/header';
import Content from '../components/statistic/content';
import NumberNav from '../components/statistic/numberNav';
import Table from '../components/statistic/table';

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [stats, setStats] = useState({});
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('/api/trips');
      setTrips(response.data.data);
    };

    const fetchStat = async () => {
      const response = await axios.get('/api/stats');
      setStats(response.data.data);
    };

    const fetchDrivers = async () => {
      const response = await axios.get('/api/drivers');
      setDrivers(response.data.data);
    };

    fetchDrivers();
    fetchStat();
    fetchPost();
  }, []); // only runs when it mounts there is no dependacy

  return (
    <div className={styles.flexContainer}>
      <SideNav />
      <div className={styles.wrapper}>
        <Header narator={'DashBoard'} style={styles} />
        <Content styles={styles.boxOne} style={styles} stats={stats} />
        <NumberNav style={styles} stats={stats} />
        <Table style={styles} trips={trips} stats={stats} drivers={drivers} />
      </div>
    </div>
  );
}

export default Dashboard;
