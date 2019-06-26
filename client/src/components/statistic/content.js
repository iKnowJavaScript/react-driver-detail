import React from 'react';

export default function Content(props) {
  return (
    <>
      <Main style={props.style} />
      <Aside style={props.style} />
    </>
  );
}

function Main(props) {
  const {
    style: { box, boxDaily },
  } = props;
  return (
    <main className={`${box} ${boxDaily}`}>
      <div className="nav">
        <h2>Total Sales</h2>
        <p>Use your mouse to see statistic from particular day</p>
      </div>
      <div className="table-container">
        <p>react</p>
      </div>
    </main>
  );
}

function Aside(props) {
  const {
    style: { boxSide, box },
  } = props;

  return <aside className={`${box} ${boxSide}`}>aside</aside>;
}
