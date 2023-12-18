import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const AudienceSection = () => {
  const audienceData = {
    labels: ['Engaged', 'Not Engaged'],
    datasets: [
      {
        data: [70, 30], // Replace with your actual engagement percentages
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Ensure the chart doesn't maintain a fixed aspect ratio
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Audience Engagement</h2>
      <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
        <Doughnut data={audienceData} options={options} />
      </div>
      {/* Add additional content or information as needed */}
    </div>
  );
};

export default AudienceSection;
