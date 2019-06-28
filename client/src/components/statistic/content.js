import React from 'react';
import { Circle, CircleTwo } from './charts/circle';
import Graph from './charts/graph';

export default function Content(props) {
  return (
    <>
      <Main style={props.style} stats={props.stats} />
      <Aside style={props.style} stats={props.stats} />
    </>
  );
}

function Main(props) {
  const {
    style: { box, boxDaily },
  } = props;
  return (
    <main className={`${box} ${boxDaily}`}>
      <div
        className="table-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
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
          border: '0px solid white',
          borderBottomColor: 'green',
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
