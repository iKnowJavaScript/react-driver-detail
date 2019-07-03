import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './tripInfo.module.css';

const TripInfo = ({ props, styles: pageStyles }) => {
  const {
    match: {
      params: { tripId },
    },
  } = props;

  const [trip, setTrip] = useState({ user: {}, destination: {}, pickup: {} });

  // const tripId = '8aa40609-6b7d-4db1-a0de-2d508337b8b4';

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await axios.get(`/api/trip/${tripId}`);
      setTrip(response.data.data[0]);
    };
    fetchTrip();
  }, [tripId]);

  console.log('trip', trip);
  return (
    <div className={`${pageStyles.box} ${pageStyles.boxTable}`}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <h2>Customer Info</h2>
          <div className={styles.customerDetails}>
            <p className={styles.customerName}>
              Name: <span className={styles.narate}>{trip.user.name}</span>
            </p>
            <p className={styles.customerEmail}>
              Email: <span className={styles.narate}>{trip.user.email}</span>
            </p>
            <p className={styles.customerPhone}>
              Phone: <span className={styles.narate}>{trip.user.phone}</span>
            </p>
            <p className={styles.customerCompany}>
              Company:{' '}
              <span className={styles.narate}>{trip.user.company}</span>
            </p>
            <p className={styles.customerGender}>
              Gender: <span className={styles.narate}>{trip.user.gender}</span>
            </p>
          </div>

          <div className={styles.otherInfo}>
            <h2>Other Info</h2>
            <div className={styles.infoDetail}>
              <p className={styles.to}>
                Location - to:
                <span className={styles.narate}>
                  {trip.destination.address}
                </span>
              </p>
              <p className={styles.from}>
                Location - From:
                <span className={styles.narate}>{trip.pickup.address}</span>
              </p>
              <p className={styles.date}>
                Date Created:
                <span className={styles.narate}>
                  {new Date(trip.created).toLocaleDateString()}
                </span>
              </p>
              <p className={styles.driverId}>
                Driver ID:
                <span className={styles.narate}>{trip.driverID}</span>
              </p>
            </div>
          </div>
          <div className={styles.money}>
            <div className={styles.modeOfPayment}>Paid By</div>

            <div className={styles.amount}>
              <span className={styles.mode}>
                {trip.isCash ? 'Cash' : 'Card'}
              </span>
              N {trip.billedAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
