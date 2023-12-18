import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import Navbar from "../component/Navbar";

function Matchhighlights()
{
    const containerStyle = {
        height: '550px',
       marginTop:"20px" , 
        display: 'flex',
        // backgroundImage: 'url("Tableback3.svg")', // Replace with your image file path
        backgroundSize: 'cover', // You can adjust this based on your image size and layout
      };

      
      const column1Style = {
        flex: '40%',
        border:"2px red",
        marginTop:"-8px" , 
        // background: '#eee', // You can set your desired background color
        padding: '10px',
        marginLeft:"50px"
      };
      
      const column2Style = {
        flex: '60%',
        border:"2px red",
        marginTop:"38px" , 
        marginBottom:"-17px" , 
        // background: '#ddd', // You can set your desired background color
        padding: '10px',
      };


      const textOverlayStyle = {
        position: 'absolute',
        bottom: -100,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };
      const textOverlayStyle1 = {
        position: 'absolute',
        bottom: -670,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };
      const textOverlayStyle2 = {
        position: 'absolute',
        bottom: -1250,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };
      const textOverlayStyle3 = {
        position: 'absolute',
        bottom: -1950,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };

      const textOverlayStyle4 = {
        position: 'absolute',
        bottom: -2518,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };

      const textOverlayStyle5 = {
        position: 'absolute',
        bottom: 270,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"30px" , 
        fontWeight:"700"
      };




      const displaytext ={

        backgroundColor: 'rgba(0, 0, 0, 0.5)',
         color:"#F3F6F4"  , 
         fontSize:"30px" , 
         fontWeight:"700", 
         marginTop:"35px" ,
          textAlign: 'center'
         

      }

return(

    <>
    <Navbar/>
<div style={{ backgroundImage: 'url("Animation2.svg")' }}>

<img src="highlighttop.jpg" style={{width:"100%"}}/>

<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"0px"}}>Yesterday MatchDay Highlights</h1>






<div>

<div style={containerStyle}>

    <div style={column1Style}>
        <div style={textOverlayStyle}> Real Madrid vs Braga</div>
        
       <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1919,h_1079,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_en_international_web/01hde4ypws1hs5483g7q.jpg" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
    <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="bvsr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


</div>




<div style={containerStyle}>

    <div style={column1Style}>
    <div style={textOverlayStyle1}> Bayern vs Galatasary</div>
       <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1915,h_1077,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_en_international_web/01hejnarzb30tp8vfcck.png" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
    <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="bvsg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


</div>

<div style={containerStyle}>

    <div style={column1Style}>
    <div style={textOverlayStyle2}> Arsenal vs Sevilla</div>
       <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1079,h_606,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_en_international_web/01hejsa7x64btzj8ftsw.jpg" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
    <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="arvsse.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


</div>


<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Previous Matchday Highlights</h1>



<div style={containerStyle}>

    <div style={column1Style}>
    <div style={textOverlayStyle3}> Man City vs Young Boys</div>
       <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1919,h_1079,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_en_international_web/01hejdmms0vmctk2axtj.jpg" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
    <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="ybvsmc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


</div>


<div style={containerStyle}>

    <div style={column1Style}>
    <div style={textOverlayStyle4}>Kobenhavn vs Man united</div>
       <img src="https://ichef.bbci.co.uk/news/1024/branded_sport/f458/live/753984e0-7a45-11ee-b315-7d1db3f558c6.png" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
    <video autoPlay loop muted style={{ height:"500px" , width:"700px" , marginLeft:"130px" , marginTop:"0px"}}>
        <source src="uvsk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


</div>

</div>











</div>
    
    <Footer/>
    <Footerweb/>
    </>
)



}
export default Matchhighlights;