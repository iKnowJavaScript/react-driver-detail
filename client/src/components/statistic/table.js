import React from 'react';
import './table.css';
import { Link } from 'react-router-dom';

export default function Table(props) {
  const {
    style: { box, boxTable },
    trips,
    drivers,
  } = props;

  const getDriverName = (drivers, id) => {
    const driver = drivers.find(driver => driver.driverID === id);
    if (!driver) return 'Unknown';
    return driver.name;
  };

  return (
    <div className={`${box} ${boxTable} drivers`}>
      <table id="drivers">
        <thead>
          <tr>
            <th>Info</th>
            <th>Driver Name</th>
            <th>Customer</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => {
            return (
              <tr key={index}>
                <td className="tableInfo">
                  <Link to={`/trip/${trip.tripID}`} rel="noopener noreferrer">
                    <i className="fas fa-info" />
                  </Link>
                </td>
                <td>{getDriverName(drivers, trip.driverID)}</td>
                <td>{trip.user.name}</td>
                <td>N{trip.billedAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
