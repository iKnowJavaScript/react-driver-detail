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
  // console.log(trips);
  
  return (
    <div className={`${box} ${boxTable}`}>
      <table id="drivers">
        <tbody>
          <tr>
            <th>Info</th>
            <th>Driver Name</th>
            <th>Customer</th>
            <th>Amount</th>
          </tr>
          {trips.map((trip, index) => {
            return (
              <tr key={index}>
                <td style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                  <Link to="./trips" rel="noopener noreferrer">
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
