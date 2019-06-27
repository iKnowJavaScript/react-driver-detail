import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';


export default function Header(props) {
  const {
    narator,
    style: { box, boxHeader },
  } = props;
  return (
    <nav className={`${styles.navHeader} ${box} ${boxHeader}`}>
      <ul className={styles.header}>
        <li className={styles.headerTitle} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem' }}>{narator.toUpperCase()}</h2>
          <p style={{ fontStyle: 'italic' }}>
            View and Review the Driver Datas
          </p>
        </li>
        <li className={styles.otherNav}>
          <p>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: '1.5rem', color: 'inherit' }}
            >
              <i class="far fa-bell" />
            </a>
          </p>
          <p>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: '1rem', color: 'inherit' }}
            >
              <i class="fas fa-sync" />
            </a>
          </p>
          <p>
            <Link
              to="./"
              rel="noopener noreferrer"
              style={{ fontSize: '2.5rem', color: 'inherit' }}
            >
              <i class="fas fa-users-cog" />
            </Link>
          </p>
        </li>
      </ul>
    </nav>
  );
}
