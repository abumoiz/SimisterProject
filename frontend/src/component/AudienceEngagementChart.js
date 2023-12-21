// AudienceEngagementChart.js

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const AudienceEngagementChart = () => {
  // Sample data for demonstration
  const lineChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Audience Behavior',
        data: [10, 20, 15, 25, 18],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderWidth: 2,
      },
    ],
  };

  const candlestickChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Candlesticks',
        data: [
          { t: 'Day 1', o: 10, h: 15, l: 8, c: 12 },
          { t: 'Day 2', o: 20, h: 25, l: 18, c: 22 },
          { t: 'Day 3', o: 15, h: 20, l: 12, c: 18 },
          { t: 'Day 4', o: 25, h: 30, l: 22, c: 28 },
          { t: 'Day 5', o: 18, h: 23, l: 15, c: 20 },
        ],
      },
    ],
  };

  // Styling for the component
  const chartStyle = {
    width: '80%',
    margin: '20px auto',
  };

  return (
    <div style={chartStyle}>
      <div>
        <h2>Line Chart - Audience Behavior</h2>
        <Line data={lineChartData} />
      </div>
      <div>
        <h2>Candlestick Chart - Audience Behavior</h2>
        <Bar
          data={candlestickChartData}
          type="bar"
          options={{
            scales: {
              x: {
                type: 'time', // Use 'time' scale for x-axis
                time: {
                  unit: 'day', // Adjust as needed
                },
                title: {
                  display: true,
                  text: 'Days',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default AudienceEngagementChart;
