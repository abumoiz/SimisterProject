import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import Navbar from "../component/Navbar";

function Aboutus()
{

    
    const textOverlayStyle = {
        position: 'absolute',
        bottom: 250,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize: "60px",
        fontWeight: "1000"
    };

    const containerStyle = {
        height: '480px',
       marginTop:"-8px" , 
        display: 'flex',
        // backgroundImage: 'url("Tableback3.svg")', // Replace with your image file path
        backgroundSize: 'cover', // You can adjust this based on your image size and layout
      };

      
      const column1Style = {
        flex: '50%',
        border:"2px red",
        marginTop:"-8px" , 
        // background: '#eee', // You can set your desired background color
        padding: '10px',
        marginLeft:"50px"
      };
      
      const column2Style = {
        flex: '50%',
        border:"2px red",
        marginBottom:"-17px" , 
        // background: '#ddd', // You can set your desired background color
        padding: '10px',
      };


return(

    <>
    <Navbar/>
<div style={{backgroundImage: 'url("animation2.svg")'}}>
<img src="aboutus.jpg" style={{width:"100%" ,  height:"450px"}}/>
<div style={textOverlayStyle}>ABOUT US</div>

<div style={containerStyle}>

    <div style={column1Style}>
       <img src="aboutus2.png" style={{width:"100%" , marginTop:"105px"}}/>

    </div>

    <div style={column2Style}>
<h2 style={{marginTop:"100px" , marginLeft:"120px" , fontWeight:"700"}}>Welcome to Football360</h2>
<p style={{marginTop:"15px" , textAlign: 'center' , fontSize:"17px"}}> " where the world of football comes full circle! We're here to provide football enthusiasts with a 360-degree view of the beautiful game. Our passion for football knows no bounds, and we're committed to bringing you the latest news, in-depth analysis, and a complete perspective on everything that makes football the global sensation it is. From match highlights to player profiles, team dynamics to transfer sagas, we cover it all. Football360 is not just a website; it's a hub for fans to immerse themselves in the spirit of football and connect with a like-minded community. Join us in celebrating the sport that unites the world, one goal at a time."</p>
    </div>


</div>

<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Our Services</h1>

<div style={containerStyle}>
<div style={column1Style}>
<img src="https://t3.ftcdn.net/jpg/02/59/66/12/240_F_259661219_wzkERSPcZdXo6BF56lwtJvE13RSGViNH.jpg" style={{width:"90%" , marginTop:"55px"}}/>
</div>

<div style={column2Style}>
<h2 style={{marginTop:"100px" , marginLeft:"190px" , fontWeight:"700"}}>New Updates</h2>
<p style={{marginTop:"15px" , textAlign: 'center' , fontSize:"17px"}}> "At Football360, we're dedicated to bringing you the pulse of the football world with the latest and most trending news. Our mission is to keep you informed and engaged with the top headlines, match analyses, and exclusive insights from the dynamic world of football. Whether it's breaking transfer updates, sensational goals, or in-depth coverage of your favorite teams, we've got you covered. Our team of passionate football enthusiasts works tirelessly to ensure you stay ahead of the game and experience the thrill of football's ever-evolving landscape. Join us on this exciting journey as we share the top trending news, making sure you never miss a beat in the world of football."</p>

</div>







</div>

<div style={containerStyle}>
<div style={column1Style}>
<h2 style={{marginTop:"100px" , marginLeft:"120px" , fontWeight:"700"}}>Upcoming Fixtures</h2>
<p style={{marginTop:"15px" , textAlign: 'center' , fontSize:"17px"}}> ""At Football360, we're your trusted source for staying up to date with the most exciting upcoming fixtures in the world of football. Whether it's the much-anticipated clash of top clubs or the exhilarating matches in your favorite league, we provide you with a comprehensive schedule of what's on the horizon. Our dedicated fixture section is designed to keep you informed about kick-off times, venues, and matchups, so you can plan your football viewing experience with ease. Don't miss a single goal, save the date with Football360, and get ready to immerse yourself in the action-packed world of football."</p>
</div>

<div style={column2Style}>
<img src="https://t3.ftcdn.net/jpg/01/95/43/90/240_F_195439082_wAPMnP4dYgSm2j8f5vmSpSivPsomhjcT.jpg" style={{width:"90%" , marginTop:"55px" , marginLeft:"90px" , height:"400px" , width:"400px"}}/>


</div>







</div>
<div style={containerStyle}>
<div style={column1Style}>
<img src="https://t3.ftcdn.net/jpg/06/29/73/66/240_F_629736644_Cl6HVrwpNKuAzFXljcbK3ynvWabPXKHt.jpg" style={{width:"90%" , marginTop:"115px"}}/>

</div>

<div style={column2Style}>
<h2 style={{marginTop:"100px" , marginLeft:"190px" , fontWeight:"700"}}>Matches Highlights</h2>
<p style={{marginTop:"15px" , textAlign: 'center' , fontSize:"17px"}}> "At Football360, we're passionate about bringing the heart-pounding excitement of football directly to your screens. We pride ourselves on offering the most captivating match highlights and skillful edits from the world of football. Whether it's the breathtaking goals, jaw-dropping skills, or memorable moments that define the beautiful game, we're here to deliver the best of the action. Our team of editors and creators meticulously craft content that captures the essence of each match, ensuring you relive the magic and drama whenever you want. Join us in celebrating the artistry of football with our curated collection of match highlights and edits, and experience the sport's electrifying moments in a whole new light."</p>

</div>







</div>

<img src="contactusaboutus.png" style={{  marginLeft:"200px", width:"900px"}}/>



</div>

    <Footer/>
    <Footerweb/>
    </>
)



}
export default Aboutus;