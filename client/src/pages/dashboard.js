import React from 'react';

import styles from './dashboard.module.css';

import SideNav from '../components/sideNav/sideNav';
import Header from '../components/header/header';
import Content from '../components/statistic/content';
import NumberNav from '../components/statistic/numberNav';
import Table from '../components/statistic/table';

function Dashboard() {
  return (
    // <div className={styles.container}>
    <div className={styles.flexContainer}>
      <SideNav />
      <div className={styles.wrapper}>
        <Header narator={'DashBoard'} style={styles} />
        <Content styles={styles.boxOne} style={styles} />
        <NumberNav style={styles} />
        <Table style={styles} />
      </div>
    </div>
    // </div>
  );
}

export default Dashboard;
