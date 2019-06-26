import React from 'react';

export default function Content() {
  return (
    <div>
      <Main />
      <Aside />
    </div>
  );
}

function Main() {
  return (
    <main>
      <h2>Total Sales</h2>
      <p>Use your mouse to see statistic from particular day</p>
    </main>
  );
}

function Aside() {
  return <aside />;
}
