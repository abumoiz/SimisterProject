import React from 'react';

const tableData = [
  { team: 'Girona', played: 12, wins: 7, draws: 2, losses: 1, points: 31 },
  { team: 'Real Madrid', played: 12, wins: 7, draws: 2, losses: 1, points: 29 },
  { team: 'Barcelona', played: 12, wins: 6, draws: 3, losses: 1, points: 27 },
  { team: 'Atletico Madrid', played: 12, wins: 6, draws: 2, losses: 2, points: 25 },
  { team: 'Athletic club', played: 12, wins: 6, draws: 4, losses: 2, points: 21 },
  { team: 'Real Betis', played: 12, wins: 6, draws: 2, losses: 2, points: 20 },
  { team: 'Real Sociedad', played: 12, wins: 6, draws: 3, losses: 3, points: 19 },
  { team: 'Valencia', played: 12, wins: 6, draws: 1, losses: 4, points: 18 },
  { team: 'Rayo Vallecano', played: 12, wins: 6, draws: 2, losses: 4, points: 18 },
  { team: 'Las Palmas', played: 12, wins: 6, draws:4, losses: 3, points: 17 },
  // Add more teams and data as needed
];

const tableHeaderStyle = {
  backgroundColor: '#0096FC',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
};

const tableRowStyle = {
  borderBottom: '1px solid #ccc',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'center',
};

function LaligaTable() {
  return (
    <div>
      <h2>La Liga Table</h2>
      <table>
        <thead>
          <tr style={tableHeaderStyle}>
            <th style={tableCellStyle}>Team</th>
            <th style={tableCellStyle}>Played</th>
            <th style={tableCellStyle}>Wins</th>
            <th style={tableCellStyle}>Draws</th>
            <th style={tableCellStyle}>Losses</th>
            <th style={tableCellStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} style={tableRowStyle}>
              <td style={tableCellStyle}>{data.team}</td>
              <td style={tableCellStyle}>{data.played}</td>
              <td style={tableCellStyle}>{data.wins}</td>
              <td style={tableCellStyle}>{data.draws}</td>
              <td style={tableCellStyle}>{data.losses}</td>
              <td style={tableCellStyle}>{data.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaligaTable;
