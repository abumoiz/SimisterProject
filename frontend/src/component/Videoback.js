import React from 'react';


 
const videoStyle = {
  position: 'absolute',
  marginTop:"70px",
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyle = {
  marginTop:"70px" , 
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: 'white',
};


const overlayStyle2 = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
  };

// const textStyle = {
//   fontSize: '48px',
//   paddingLeft:"-30px",
//   fontWeight:"bold",

// };

const Videoback = () => {
  return (
    <div style={videoStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="video360.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={overlayStyle}>
        
        <h1 style={{fontSize: '48px', marginLeft:"-750px", fontWeight:"bold", marginTop:"-200px"}}>FOOTBALL 360:</h1>
        <h1 style={{fontSize: '48px', marginLeft:"-150px", fontWeight:"bold", marginTop:"-10px"}}>THE HOME OF FOOTBALL</h1>

     
      </div>
<div style={overlayStyle2}>
      <button style={{height:"70px" , width:"250px" , background:"black" , border:"2px solid grey" , borderRadius:"10px" , marginTop:"420px" , marginLeft:"100px"}}>
      <img
        src="google1.webp"
        alt="Image Alt Text"
        style={{height:"100%" , width:"100%"}}
      />
      <span style={{ color:"white" , fontSize:"20px" , fontWeight:"bold"}}></span>
    </button>

    <button style={{height:"70px" , width:"250px" , background:"black" , border:"2px solid grey" , borderRadius:"10px"  , paddingTop:"0px , 0px" , marginTop:"420px" , marginLeft:"70px"}}>
      <img
        src="appstore.png"
        alt="Image Alt Text"
        style={{height:"100%" , width:"100%" }}
      />
      <span style={{ color:"white" , fontSize:"20px" , fontWeight:"bold"}}></span>
    </button>

    </div>
    </div>
  );
};



export default Videoback;
