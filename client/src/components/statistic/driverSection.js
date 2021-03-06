import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './driverSection.css';

// axios.get('/api/drivers').then(data => console.log(data.data.data));

export default function DriverSection({ style }) {
  const { box, boxSection } = style;

  const [drivers, setDrivers] = useState([]);
  const [clickDriver, setClickDriver] = useState({});
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await axios.get('/api/drivers');
      setDrivers(response.data.data);
      setClickDriver(response.data.data[0]);
    };
    fetchDrivers();
  }, []); // only runs when it mounts

  const displayClick = (driver, index) => {
    setClickDriver(driver);
    setActive(index);
  };

  return (
    <div className={`${box} ${boxSection} driverContainer`}>
      <div className="driverList driverBox">
        <SearchDriver />
        <ul className="links">
          {drivers.map((driver, index) => {
            return (
              <li
                onClick={() => displayClick(driver, index)}
                className={`link ${index === active ? 'active' : ''}`}
                key={index}
                data-id={index}
              >
                <div className="link-pic">
                  <i className="fas fa-user-tie" />
                </div>
                <div className="link-info">
                  <h1 className="dirver-name">{driver.name}</h1>
                  <p className="details">{driver.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="displayDriver driverBox">
        <SearchDriver />
        <div className="displayDetail">
          <div className="profileContainer">
            <div className="profile">
              <div className="profile_avatar">
                <i className="fas fa-user-tie avatarFont" />
              </div>
              <div className="profileHeader">
                <h3>{clickDriver.name}</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nom
                  rep rem cumque magnam autem delectus qui.
                </p>
              </div>
            </div>
          </div>
          <div className="driverInfo">
            <div className="infoHeader">User Info</div>
            <p className="name">
              NAME: <span className="narate">{clickDriver.name}</span>
            </p>
            <p className="phone">
              PHONE: <span className="narate">{clickDriver.phone}</span>
            </p>
            <p className="email">
              EMAIL: <span className="narate">{clickDriver.email}</span>
            </p>
            <p className="driverId">
              DRIVER ID: <span className="narate">{clickDriver.driverID}</span>
            </p>
            <p className="DOB">
              DOB:{' '}
              <span className="narate">
                {new Date(clickDriver.DOB).toLocaleDateString()}
              </span>
            </p>
            <p className="agent">
              AGENT: <span className="narate">{clickDriver.agent}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchDriver() {
  return (
    <form>
      <input className="search__input" type="text" placeholder="Search" />
    </form>
  );
}
