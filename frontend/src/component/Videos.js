import React from 'react';

const containerStyle = {
  height: '500px',
  border:"2px red",
  marginTop:"-8px" , 
  backgroundImage: 'url("Animation.svg")' ,
  display: 'flex',
};

const column1Style = {
  flex: '65%',
  border:"2px red",
  marginTop:"-8px" , 
  // background: '#eee', // You can set your desired background color
  padding: '10px',
};

const column2Style = {
  marginTop:"-8px" , 
  flex: '35%',
  border:"2px red",
  // background: '#ddd', // You can set your desired background color
  padding: '10px',
};

const Videos = () => {
  return (

    <>

    <div style={{marginTop:"-35px"}}>
    <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Goal Videos</h1>

    <div style={containerStyle}>
      <div style={column1Style}>

      <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="bellingham.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       
      </div>
      <div style={column2Style}>
        <h2 style={{marginTop:"200px"}}>Bellingham shines for</h2>
        <h2 >Real Madrid</h2>
       
      </div>
    </div>


{/* <div style={containerStyle}>
      <div style={column2Style}>
      <h2 style={{marginTop:"200px" , marginLeft:"100px"}}>American Soccor is too</h2>
        <h2 style={{ marginLeft:"100px"}}>easy for Lionel Messi</h2>
      </div>
      <div style={column1Style}>
      <video autoPlay loop muted style={{ height:"400px" , width:"600px" , marginRight:"190px" , marginTop:"50px"}}>
        <source src="messi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div> */}

    </div>
    </>
  );
};

export default Videos;
