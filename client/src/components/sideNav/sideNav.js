import React from 'react';
import styles from './sideNav.module.css';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <div className={styles.side}>
      <div className={styles.logo}>
        <Link
          to="./"
          rel="noopener noreferrer"
          style={{ fontSize: '3rem', color: 'inherit' }}
        >
          <i className="fab fa-discourse" />
        </Link>
      </div>
      <nav className={styles.otherContainer}>
        <ul className={styles.otherList}>
          <li>
            <Link
              to="./"
              rel="noopener noreferrer"
              style={{ fontSize: '2rem', color: 'inherit' }}
            >
              <i className="fas fa-house-damage" />
            </Link>
          </li>
          <li>
            <Link
              to="drivers"
              rel="noopener noreferrer"
              style={{ fontSize: '2rem', color: 'inherit' }}
            >
              <i className="fas fa-chart-line" />
            </Link>
          </li>
          <li>
            <Link
              to="trips"
              rel="noopener noreferrer"
              style={{ fontSize: '2rem', color: 'inherit' }}
            >
              <i className="fas fa-users" />
            </Link>
          </li>
          <li>
            <Link
              to="./"
              rel="noopener noreferrer"
              style={{ fontSize: '2rem', color: 'inherit' }}
            >
              <i className="fas fa-plus" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
