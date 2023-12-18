function Pltable()
{
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
        { team: 'Man City', played: 12, wins: 7, draws: 2, losses: 1, points: 31 },
        { team: 'Tottenham', played: 12, wins: 7, draws: 2, losses: 1, points: 29 },
        { team: 'Liverpool', played: 12, wins: 6, draws: 3, losses: 1, points: 27 },
        { team: 'Arsenal', played: 12, wins: 6, draws: 2, losses: 2, points: 25 },
        { team: 'Asten villa', played: 12, wins: 6, draws: 4, losses: 2, points: 21 },
        { team: 'Newcastle', played: 12, wins: 6, draws: 2, losses: 2, points: 20 },
        { team: 'Brighton', played: 12, wins: 6, draws: 3, losses: 3, points: 19 },
        { team: 'Man United', played: 12, wins: 6, draws: 1, losses: 4, points: 18 },
        { team: 'Brentford', played: 12, wins: 6, draws: 2, losses: 4, points: 18 },
        { team: 'Chelsea', played: 12, wins: 6, draws:4, losses: 3, points: 17 },
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
      
return(
    <>
    
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
  <h1 style={{marginTop:"200px"}}>Priemer League</h1>
</div>


</div>


    </>
)



}

export default Pltable;