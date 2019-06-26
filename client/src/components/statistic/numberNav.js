import React from 'react';

export default function NumberNav(props) {
  const {
    style: { box, boxNumber },
  } = props;
  return (
    <div className={`${box} ${boxNumber}`}>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '10px',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}
      >
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
          <div>
            <p>New Customer</p>
            <h2>147</h2>
          </div>
          <div>trend</div>
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
          <div>
            <p>New Customer</p>
            <h2>147</h2>
          </div>
          <div>trend</div>
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(235, 235, 238)',
            flex: 1,
            marginRight: '10px',
            height: '115%',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0px 2px 5px -1px rgba(0,0,0,0.75)',
          }}
        >
          <div>
            <p>New Customer</p>
            <h2>147</h2>
          </div>
          <div>trend</div>
        </li>
      </ul>
    </div>
  );
}

// {numberStat.map((stat, index) => (
//   <section className="stat" key={index}>
//     {stat.total}
//   </section>
// ))}
