import React, { PureComponent } from 'react';
import { Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';

// graph
const colors = scaleOrdinal(schemeCategory10).range();

const graphData = [
  {
    name: 'Page C',
    uv: 2000,
    female: 9800,
    male: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    female: 3908,
    male: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    female: 4800,
    male: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    female: 3800,
    male: 2500,
  },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y +
  height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y +
  height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  render() {
    return (
      <BarChart
        width={400}
        height={250}
        data={graphData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="female"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {graphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    );
  }
}

export default Graph;
