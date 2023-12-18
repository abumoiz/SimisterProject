import React from 'react';

const containerStyle = {
  height: '530px',
 marginTop:"-8px" , 
  display: 'flex',
  backgroundImage: 'url("Tableback3.svg")', // Replace with your image file path
  backgroundSize: 'cover', // You can adjust this based on your image size and layout
};


const column1Style = {
  flex: '65%',
  border:"2px red",
  marginTop:"-8px" , 
  // background: '#eee', // You can set your desired background color
  padding: '10px',
  marginLeft:"150px"
};

const column2Style = {
  flex: '35%',
  border:"2px red",
  marginBottom:"-17px" , 
  // background: '#ddd', // You can set your desired background color
  padding: '10px',
};

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


const Pictures = () => {
  return (

    <>
<div style={{marginTop:"-30px" , marginBottom:"-7px"}}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Points Table</h1>
    {/* <div style={containerStyle}>
      <div style={column1Style}>
        <img src='laligafix.PNG'  style={{height:"480px" , marginLeft:"100px"}}></img>
      </div>
      <div style={column2Style}>
        <h2 style={{marginTop:"200px"}}>LALIGA Table after</h2>
        <h2>Matchday 10</h2>
      </div>
    </div>


<div style={containerStyle}>
      <div style={column2Style}>
      <h2 style={{marginTop:"200px" , marginLeft:"120px"}}>PL Table after</h2>
        <h2 style={{ marginLeft:"120px"}}>Matchday 9</h2>
      </div>
      <div style={column1Style}>
      <img src='plfix.PNG'  style={{height:"480px" , marginRight:"80px"}}></img>
      </div>
    </div> */}

    <div style={ containerStyle }>
<div style={column1Style }>
      
      <table style={{border:"2px solid black" , marginTop:"10px"}}>
        <thead style={{}}>
          <tr style={tableHeaderStyle}>
            <th style={tableCellStyle}>Team</th>
            <th style={tableCellStyle}>Played</th>
            <th style={tableCellStyle}>Wins</th>
            <th style={tableCellStyle}>Draws</th>
            <th style={tableCellStyle}>Losses</th>
            <th style={tableCellStyle}>Points</th>
          </tr>
        </thead>
        <tbody style={{}}>
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
<div style={column2Style}>
  <h1 style={{marginTop:"200px"}}>LaLiga Table</h1>
</div>


</div>
    </div>
    </>
  );
};

export default Pictures;
