import React from 'react';
import styles from './header.module.css';

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
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/iam_remymartins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </p>
          <p>image</p>
        </li>
      </ul>
    </nav>
  );
}
