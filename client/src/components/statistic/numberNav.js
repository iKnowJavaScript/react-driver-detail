import React from 'react';
import PriceChart from './charts/lineChart';

export default function NumberNav(props) {
  const {
    style: { box, boxNumber },
    stats: { nonCashBilledTotal, cashBilledTotal },
  } = props;
  return (
    <div className={`${box} ${boxNumber}`}>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '10px',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}
      >
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
          <div>
            <p style={{ fontSize: '.8rem' }}>TOTAL CASH TRIPS</p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.5rem' }}>
              N {toCurrency(cashBilledTotal)}
            </h2>
          </div>
          <PriceChart />
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
          <div>
            <p style={{ fontSize: '.8rem' }}>NON-CASH TRIPS</p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.5rem' }}>
              N {toCurrency(nonCashBilledTotal)}
            </h2>
          </div>
          <PriceChart />
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
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
