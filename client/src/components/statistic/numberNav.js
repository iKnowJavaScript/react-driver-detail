import React from 'react';
import { stat } from 'fs';

export default function NumberNav(props) {
  const { numberStat } = props;
  return (
    <div className="statContainer">
      {numberStat.map((stat, index) => (
        <section className="stat" key={index}>
          {stat.total}
        </section>
      ))}
    </div>
  );
}
