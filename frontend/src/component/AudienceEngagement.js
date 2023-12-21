// import React, { Component } from 'react';
// import { Line, Bar } from 'react-chartjs-2';

// class AudienceEngagement extends Component {
//  constructor(props) {
//     super(props);
//     this.state = {
//       chartData: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//           {
//             label: 'Likes',
//             data: [10, 20, 30, 40, 50, 60, 70],
//             borderColor: 'rgba(75, 192, 192, 1)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           },
//           {
//             label: 'Shares',
//             data: [70, 60, 50, 40, 30, 20, 10],
//             borderColor: 'rgba(153, 102, 255, 1)',
//             backgroundColor: 'rgba(153, 102, 255, 0.2)',
//           },
//         ],
//       },
//     };
//  }

//  render() {
//     const chartStyle = {
//       width: '600px',
//       height: '400px',
//       margin: '20px auto',
//     };

//     return (
//       <div className="AudienceEngagement">
//         <h1>Audience Engagement</h1>
//         <div style={chartStyle}>
//           <Line data={this.state.chartData} />
//         </div>
//         <div style={chartStyle}>
//           <Bar data={this.state.chartData} />
//         </div>
//       </div>
//     );
//  }
// }

// export default AudienceEngagement;


import React from 'react';

const AudienceEngagement = () => {
  // Replace this data with your actual engagement data
  const engagementData = [
    { month: 'January', views: 500, likes: 200, comments: 50 },
    { month: 'February', views: 600, likes: 250, comments: 60 },
    // Add more months as needed
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' , width:"80vw" }}>
      <h2 style={{color:"black"}}>Audience Engagement</h2>
      <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{color:"black"}}>Month</th>
            <th style={{color:"black"}}>Views</th>
            <th style={{color:"black"}}>Likes</th>
            <th style={{color:"black"}}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {engagementData.map((data, index) => (
            <tr style={{color:"black"}} key={index}>
              <td style={{color:"black"}}>{data.month}</td>
              <td style={{color:"black"}}>{data.views}</td>
              <td style={{color:"black"}}>{data.likes}</td>
              <td style={{color:"black"}}>{data.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ width: '80%', margin: '20px auto' }}>
        <h3 style={{color:"black"}}>Engagement Chart</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {engagementData.map((data, index) => (
            <div key={index} style={{ flex: '1', textAlign: 'center', padding: '10px' }}>
              <div style={{ height: `${data.views / 5}px`, backgroundColor: '#3498db', margin: '5px' }}>
                <p style={{ margin: '0', color: 'white' }}>{data.month}</p>
              </div>
              <p style={{ margin: '0' , color:"black" }}>Views: {data.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceEngagement;




// import React, { useState } from 'react';

// const AudienceEngagement = () => {
//   const [feedback, setFeedback] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Here you can implement the logic to submit feedback
//     // For demonstration purposes, let's just log the feedback to the console
//     console.log('Submitted Feedback:', feedback);
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h2>Audience Engagement</h2>
//       {!submitted ? (
//         <div>
//           <p>We'd love to hear your feedback!</p>
//           <textarea
//             style={{ width: '80%', height: '100px', margin: '10px' }}
//             placeholder="Type your feedback here..."
//             value={feedback}
//             onChange={handleInputChange}
//           />
//           <br />
//           <button
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//             onClick={handleSubmit}
//           >
//             Submit Feedback
//           </button>
//         </div>
//       ) : (
//         <p>Thank you for your feedback!</p>
//       )}
//     </div>
//   );
// };

// export default AudienceEngagement;
