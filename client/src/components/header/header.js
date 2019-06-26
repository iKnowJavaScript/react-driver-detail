import React from 'react';

export default function Header(props) {
  const { narator } = props;
  return (
    <nav>
      <ul>
        <li>{narator}</li>
        <li>
          <p>notification</p>
          <p>relaod</p>
          <p>image</p>
        </li>
      </ul>
    </nav>
  );
}
