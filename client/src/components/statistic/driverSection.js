import React from 'react';
import './driverSection.css';

export default function DriverSection(props) {
  const {
    style: { box, boxSection },
  } = props;
  return (
    <div className={`${box} ${boxSection} driverContainer`}>
      <div className="driverList driverBox">
        <SearchDriver />
        <ul className="links">
          <li className="link" data-id={1}>
            <div className="link-pic">
              <i className="fab fa-github" />
            </div>
            <div className="link-info">
              <h1 className="dirver-name">Name</h1>
              <p className="details">Has 2 Vehincles</p>
            </div>
          </li>
          <li className="link" data-id={1}>
            <div className="link-pic">
              <i className="fab fa-github" />
            </div>
            <div className="link-info">
              <h1 className="dirver-name">Name</h1>
              <p className="details">Has 2 Vehincles</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="displayDriver driverBox">
        <SearchDriver />
        <div className="displayDetail">name</div>
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
