import React from 'react';
import styles from './sideNav.module.css';

export default function SideNav() {
  return (
    <div className={styles.side}>
      <div className={styles.logo}>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <i className="fas fa-drum-steelpan" />
        </a>
        Logo
      </div>
      <nav className={styles.otherContainer}>
        <ul className={styles.otherList}>
          <li>
            <a
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            Home
          </li>
          <li>
            <a
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            Dashboarfffffd
          </li>
          <li>
            <a
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            Drivers
          </li>
          <li>
            <a
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            Reload
          </li>
        </ul>
      </nav>
    </div>
  );
}
