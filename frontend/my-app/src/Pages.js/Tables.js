import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import LaligaTable from "../component/LaligaTable";
import Navbar from "../component/Navbar";

import { useState } from "react";
import Pltable from "./Pltable";
import Bundestable from "./Bundestable";

function Tables()
{


    const textOverlayStyle4 = {
        position: 'absolute',
        bottom: -40,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize: "30px",
        fontWeight: "1000"
    };
    const textOverlayStyle = {
        position: 'absolute',
        bottom: -820,
        left: 100, 
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
height:"85px"  , 
width:"85px"
    };
    const textOverlayStyle3 = {
        position: 'absolute',
        bottom: -2254,
        left: 100, 
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
height:"85px"  , 
width:"85px"
    };

    const textOverlayStyle2 = {
        position: 'absolute',
        bottom: -1545,
        left: 100, 
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
height:"95px"  , 
width:"105px"
    };



    const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      image: 'https://www.mancity.com/meta/media/b1omlphx/wide-highlights_bou-h.jpg',
      caption: 'Man City regains their 1st spot ',
    },
    {
        id: 2,
        image: 'https://www.fcbarcelona.com/photo-resources/2023/11/04/6b822962-1e68-4b21-8256-f0e4d407f626/_GP22434.jpg?width=1200&height=750',
        caption: 'Last minute winner',
      },
    {
      id: 3,
      image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta170b050bb68b8fa/650c56b0e1d01e4ceffcd455/Power_Rank_Real_Madrid.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      caption: 'Madrid drop points on the last weekend',
    },
    
  ]
  

  const sliderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '900px',
    margin: '0 auto',
    position: 'relative',
   
  };

  const slideStyle = {
    display: 'none',
    height:"500px" , 
    width:"900px"
  };

  slideStyle.display = 'block';

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const captionStyle = {
    fontSize: '24px',
    margin: '10px 0',
    fontWeight:"650"
  };

  const buttonStyle = {
    fontSize: '24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    border:"none",
    background:"transparent"
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '10px',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '10px',
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

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
  


return(

    <>
    <Navbar/>
   <div style={{ backgroundImage: 'url("Tableback3.svg")'}}>

   <img src="https://goalkeepersanonymous.com/wp-content/uploads/2021/02/big5.jpg" style={{width:"100%" ,  height:"550px"}}/>
{/* <div style={textOverlayStyle}>ABOUT US</div> */}
<h2 style={textOverlayStyle4}>LATEST UPDATES</h2>

<div style={{marginTop:"75px" }}>
<div style={sliderStyle}>
      <button style={prevButtonStyle} onClick={handlePrev}>
        &#10094;
      </button>
      {data.map((slide, index) => (
        <div key={slide.id} style={{ ...slideStyle, display: index === currentIndex ? 'block' : 'none' }}>
          <img src={slide.image} alt={slide.caption} style={imageStyle} />
          <p style={captionStyle}>{slide.caption}</p>
        </div>
      ))}
      <button style={nextButtonStyle} onClick={handleNext}>
        &#10095;
      </button>
    </div>
</div>






<div style={{}}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"270px" , marginTop:"100px"}}>LaLiga Points Table</h1>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/1200px-LaLiga_logo_2023.svg.png" alt="La Liga Logo" style={textOverlayStyle } />
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

<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"270px" , marginTop:"100px"}}>Priemer League Points Table</h1>

<img src="pllogo5.png" alt="La Liga Logo" style={textOverlayStyle2 } />

</div>

<Pltable/>

<div>

<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"270px" , marginTop:"100px"}}>Bundesliga Points Table</h1>

<img src="pllogo7.png" alt="La Liga Logo" style={textOverlayStyle3 } />


</div>
<Bundestable/>
   </div>
    <Footer/>
    <Footerweb/>
    
    
    </>
)



}
export default Tables;