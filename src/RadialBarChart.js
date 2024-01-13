// RadialBarChart.js
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const RadialBarChart = (props) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 h-200">
        <PieChart
          data={[{ value: props.value, color: '#23D6AA' }]}
          lineWidth={15}
          animate
          animationDuration={500}
          animationEasing="ease-out"
          startAngle={-90}
          totalValue={100}
          lengthAngle={360}
          background='#D3F7EE'
          rounded
          label={() => {
            return (
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-lg font-bold">
                {props.value + '%'}
              </text>
            );
          }}
        />
        <div className="text-center">
          <span className="text-base font-bold">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default RadialBarChart;
