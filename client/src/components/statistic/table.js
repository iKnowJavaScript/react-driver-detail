import React from 'react';
import './table.css';
import { Link } from 'react-router-dom';

export default function Table(props) {
  const {
    style: { box, boxTable },
  } = props;
  return (
    <div className={`${box} ${boxTable}`}>
      <table id="drivers">
        <tr>
          <th>Link</th>
          <th>Driver</th>
          <th>Customer</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            <Link to="./" rel="noopener noreferrer" target="_blank">
              info
            </Link>
          </td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>
            <Link to="./" rel="noopener noreferrer" target="_blank">
              info
            </Link>
          </td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>$400</td>
        </tr>
      </table>
    </div>
  );
}
