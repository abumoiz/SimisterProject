// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const AnalyticsComponent = () => {
//   // Replace this data with your actual success ratio data
//   const teamSuccessData = {
//     labels: ['Team A', 'Team B', 'Team C', 'Team D'],
//     datasets: [
//       {
//         label: 'Success Ratio',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//         data: [70, 45, 60, 80], // Success ratios in percentage
//       },
//     ],
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h2>Team Success Ratio</h2>
//       <div style={{ width: '80%', margin: '20px auto' }}>
//         <Bar
//           data={teamSuccessData}
//           options={{
//             scales: {
//               x: {
//                 type: 'category',
//                 beginAtZero: true,
//               },
//               y: {
//                 beginAtZero: true,
//                 max: 100,
//               },
//             },
//             plugins: {
//               legend: {
//                 display: true,
//                 position: 'top',
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default AnalyticsComponent;
