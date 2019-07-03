import React from 'react';
import { Circle, CircleTwo } from './charts/circle';
import Graph from './charts/graph';
import styles from './content.module.css';

export default function Content(props) {
  return (
    <>
      <Main style={props.style} stats={props.stats} />
      <Aside style={props.style} stats={props.stats} />
    </>
  );
}

function Main({ style }) {
  const { box, boxDaily } = style;
  return (
    <main className={`${box} ${boxDaily} ${styles.center}`}>
      <div className={styles.tableContainer}>
        <Graph />
      </div>
    </main>
  );
}

function Aside(props) {
  const {
    style: { boxSide, box },
  } = props;

  return (
    <aside
      className={`${box} ${boxSide}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgb(235, 235, 238)',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <Circle stats={props.stats} />
        <div>
          <p>52% Male</p>
          <p>48% Female</p>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          borderBottomColor: 'green',
          borderBlockEndWidth: '3px',
          backgroundColor: 'rgb(235, 235, 238)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
        }}
      >
        <CircleTwo stats={props.stats} />
        <div style={{ flex: 1 }}>
          <p>52% Cash</p>
          <p>48% Non Cash</p>
        </div>
      </div>
    </aside>
  );
}
