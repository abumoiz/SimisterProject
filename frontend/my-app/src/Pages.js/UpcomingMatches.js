import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import Navbar from "../component/Navbar";

function UpcomingMatches()
{


    const textOverlayStyle = {
        position: 'absolute',
        bottom: 270,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"60px" , 
        fontWeight:"1000"
      };

      const matchesData = [
        { id: 1, team1: ' AEK Athens', team2: 'Marseille', date: '2023-11-09', time: '20:00 GMT' },
        { id: 2, team1: 'Freiburg', team2: 'Strum graz', date: '2023-11-09', time: '20:00 GMT' },
        { id: 3, team1: 'Hackea', team2: 'Barka topola', date: '2023-11-09', time: '20:00 GMT' },
        { id: 2, team1: 'Rangers', team2: 'Molde', date: '2023-11-09', time: '20:00 GMT' },
        { id: 3, team1: 'Real Betis', team2: 'Sparta', date: '2023-11-09', time: '20:00 GMT' },
        // Add more matches as needed
      ];
    
      const matchesData1 = [
        { id: 1, team1: 'Lazio', team2: 'Celtic', date: '2023-11-28', time: '17:45 GMT' },
        { id: 2, team1: 'Shakhtar', team2: 'Antwerp', date: '2023-11-28', time: '17:45 GMT' },
        { id: 3, team1: 'Dortmund', team2: 'AC Milan', date: '2023-11-28', time: '20:00 GMT' },
        { id: 2, team1: 'Feyenoord', team2: 'Atletico', date: '2023-11-28', time: '20:00 GMT' },
        { id: 3, team1: 'Barca', team2: 'porto', date: '2023-11-28', time: '20:00 GMT' },
        // Add more matches as needed
      ];

      const matchesData2 = [
        { id: 1, team1: 'Aston Villa', team2: 'AZ', date: '2023-11-09', time: '20:00 GMT' },
        { id: 2, team1: 'Breidablik', team2: 'Genk', date: '2023-11-09', time: '20:00 GMT' },
        { id: 3, team1: 'Club Brugge', team2: 'Lugano', date: '2023-11-09', time: '20:00 GMT' },
        { id: 2, team1: 'Olimpija Ljubljana', team2: 'KI Klaksvik', date: '2023-11-09', time: '20:00 GMT' },
        { id: 3, team1: 'Slovan Bratislava', team2: 'Lille', date: '2023-11-09', time: '20:00 GMT' },
        // Add more matches as needed
      ];



      const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        paddingTop: '20px',
      };
    
      const matchStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '10px',
        padding: '10px',
      };
    
      const matchHeaderStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center'
      };
    
      const matchDateTimeStyle = {
        fontSize: '14px',
        color: '#555',
        textAlign: 'center'
      };
    


return(

    <>
    <Navbar/>
    <div style={{backgroundImage: 'url("Tableback4.svg")'}}>
<img src="https://t4.ftcdn.net/jpg/05/50/83/41/240_F_550834197_xq94HbZa1NMu4U5hl9A0HyAdszJ0OHNr.jpg" style={{width:"100%"}}/>
<div style={textOverlayStyle}>Upcoming Fixtures</div>

<div style={containerStyle}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Europa League</h1>

      <h2>Upcoming Matches</h2>
      {matchesData.map((match) => (
        <div key={match.id} style={matchStyle}>
          <div style={matchHeaderStyle}>
            {match.team1} vs {match.team2}
          </div>
          <div style={matchDateTimeStyle}>
            Date: {match.date} | Time: {match.time}
          </div>
        </div>
      ))}
    </div>



    <div style={containerStyle}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Champions League </h1>

      <h2>Upcoming Matches</h2>
      {matchesData1.map((match) => (
        <div key={match.id} style={matchStyle}>
          <div style={matchHeaderStyle}>
            {match.team1} vs {match.team2}
          </div>
          <div style={matchDateTimeStyle}>
            Date: {match.date} | Time: {match.time}
          </div>
        </div>
      ))}
    </div>




    <div style={containerStyle}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Conference League </h1>

      <h2>Upcoming Matches</h2>
      {matchesData2.map((match) => (
        <div key={match.id} style={matchStyle}>
          <div style={matchHeaderStyle}>
            {match.team1} vs {match.team2}
          </div>
          <div style={matchDateTimeStyle}>
            Date: {match.date} | Time: {match.time}
          </div>
        </div>
      ))}
    </div>


    </div>
    <Footer/>
    <Footerweb/>
    
    </>
)



}
export default UpcomingMatches;