import React from 'react';
import PriceChart from './charts/lineChart';
import styles from './numberNav.module.css';

export default function NumberNav(props) {
  const {
    style: { box, boxNumber },
    stats: { nonCashBilledTotal, cashBilledTotal },
  } = props;
  return (
    <div className={`${box} ${boxNumber}`}>
      <ul className={styles.numberNav}>
        <li className={styles.numberItem}>
          <div>
            <p style={{ fontSize: '.8rem' }}>TOTAL CASH TRIPS</p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.5rem' }}>
              N {toCurrency(cashBilledTotal)}
            </h2>
          </div>
          <PriceChart />
        </li>
        <li className={styles.numberItem}>
          <div>
            <p style={{ fontSize: '.8rem' }}>NON-CASH TRIPS</p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.5rem' }}>
              N {toCurrency(nonCashBilledTotal)}
            </h2>
          </div>
          <PriceChart />
        </li>
        <li className={styles.numberItem}>
          <div>
            <p style={{ fontSize: '.8rem' }}>SUM OF ALL TRIPS</p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.4rem' }}>
              N {toCurrency(cashBilledTotal + nonCashBilledTotal)}
            </h2>
          </div>
          <PriceChart />
        </li>
      </ul>
    </div>
  );
}

function toCurrency(number) {
  var reg = /\d(?=(\d{3}){1,}\.)/g;
  return String(number).replace(reg, '$&,');
}
