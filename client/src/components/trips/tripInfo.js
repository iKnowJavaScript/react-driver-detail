import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TripInfo = props => {
  const {
    props: {
      match: {
        params: { tripId },
      },
    },
    styles,
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
    <div className={`${styles.box} ${styles.boxTable}`}>
      <div className={'container'}>
        <div className={'heading'}>
          <div className="driverInfo">
            <div className="infoHeader">Trip Info</div>
            <p className="name">
              NAME: <span className="narate">{trip.user.name}</span>
            </p>
            <p className="phone">
              PHONE: <span className="narate">{trip.destination.address}</span>
            </p>
            <p className="email">
              EMAIL: <span className="narate">{trip.email}</span>
            </p>
            <p className="driverId">
              DRIVER ID: <span className="narate">{trip.driverID}</span>
            </p>
            <p className="DOB">
              DOB:{' '}
              <span className="narate">
                {new Date(trip.DOB).toLocaleDateString()}
              </span>
            </p>
            <p className="agent">
              AGENT: <span className="narate">{trip.agent}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;

const tripp = {
  billedAmount: '1,715.16',
  created: '2019-01-21T08:24:05+01:00',
  destination: {
    address: '76 Cornelia Street, Tyro, Idaho, 8547',
    latitude: 8.056252,
    longitude: -103.758085,
  },
  driverID: 'd247da84-ffcb-4ca8-8459-f98c99b59822',
  isCash: true,
  pickup: {
    address: '311 Woodbine Street, Catharine, Kentucky, 8240',
    latitude: -7.99591,
    longitude: 177.770392,
  },
  tripID: '8aa40609-6b7d-4db1-a0de-2d508337b8b4',
  user: {
    company: 'EXERTA',
    email: 'aureliarios@exerta.com',
    gender: 'female',
    name: 'Aurelia Rios',
    phone: '+234 808-375-2326',
  },
};
