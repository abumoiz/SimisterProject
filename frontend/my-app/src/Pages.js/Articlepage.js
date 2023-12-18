import Cardslider from "../component/Cardslider";
import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import Navbar from "../component/Navbar";


const articleContainerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    background: 'white',
    marginTop:"65px"
  };

  const articleContainerStyle2 = {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    background: 'white',
    marginTop:"15px" , 
    marginBottom:"15px"
  };
  
  const authorInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    marginTop:"15px"
  };

  const authorInfoStyle2 = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    marginTop:"0px"
  };
  
  const authorImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };
  
  const authorNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };
  
  const articleHeadingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };
  
  const articleContentStyle = {
    fontSize: '16px',
  };

  const overlayStyle = {
    marginTop:"70px" , 
   
    marginLeft:"40px" , 
 
    width: '80%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
  };
  


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

  const textOverlayStyle2 = {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 0, 1)', // Background color with opacity
    color: 'black', // Text color
    padding: '5px', // Add some padding
    textAlign: 'center', // Center the text

    fontSize:"25px"
  };


function Articlepage()
{
return(

    <>
    <Navbar/>
<div style={{backgroundImage: 'url("Animation2.svg")'}}>
<img src="https://t4.ftcdn.net/jpg/04/09/29/65/240_F_409296568_uGHB6ixhmRPMUEnbLuS68BUydsEWxfth.jpg"  style={{ width:"100%" ,marginTop:"0px"}}/>
<div style={articleContainerStyle}>
<div style={textOverlayStyle2}>Breaking</div>
      <div style={authorInfoStyle}>
      <img
  style={authorImageStyle}
  src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  alt="Author" 
/>
<div style={textOverlayStyle}>LATEST ARTICLES</div>


        <div style={authorNameStyle}>Ron Walker</div>
      </div>

      <h1 style={articleHeadingStyle}>Liam Manning: Bristol City appoint Oxford boss as new head coach 10 days after Nigel Pearson sacking</h1>

      <p style={articleContentStyle}>
      Oxford United boss Liam Manning takes over from Nigel Pearson at Bristol City 10 days after veteran boss' sacking; Manning leaves Yellows only eight months and 29 games after taking over at Kassam Stadium
      </p>
      <p style={articleContentStyle}>
      Bristol City have named Oxford United boss Liam Manning as their new head coach, 10 days after sacking Nigel Pearson.

Manning leaves Oxford second in League One only eight months and 29 games after joining the club in March.
      </p>

<img src="https://e0.365dm.com/23/11/1600x900/skysports-liam-manning-bristol-city_6351894.jpg?20231107145610" style={{height:"400px" , width:"700px" , marginTop:"15px" , marginBottom:"25px" , marginLeft:"170px"}}/>

<p style={articleContentStyle}>
The 39-year-old, who previously managed MK Dons, Belgian side FK Lommel and West Ham's U23s, will take charge of his first Bristol City game at second-bottom QPR on Saturday. Chris Hogg, who was his assistant at the Kassam Stadium, will join him at Ashton Gate.
      </p>
      <p style={articleContentStyle}>

      City are 11th in the Championship following a 1-0 win over basement side Sheffield Wednesday last weekend.

The Robins' previous assistant manager Curtis Fleming, who joined the club under Pearson's reign and took charge of that victory against the Owls, has left the club with Manning's arrival.


Merson Says: Postecoglou should have changed extraordinary tactics
Sheikh Jassim hoping for Man Utd success despite failure to agree takeover
Neville: PL must protect refs after 'dangerous' club VAR statements
Ref Watch: Officials get big calls right in chaotic London derby
Transfer Centre LIVE! Lampard: Chelsea blocked me signing Bellingham
<p style={articleContentStyle}>
'Why the PL is the best' | Spurs-Chelsea delivers one of PL's wildest games
Papers: Chelsea target Todibo as Thiago Silva replacement
Arteta: It's my duty to defend my club and my players
Rooney: I'd drink until I almost passed out in early Man Utd days
Video
Latest News
</p>

<p style={articleContentStyle}>
Chairman Jon Lansdown told the club's official website: "As soon as we made the change Liam was our first choice and we are grateful to Oxford United for the extremely professional way they have approached the departure of someone who was doing a fantastic job for them.

"We are excited about the arrival of Liam and Chris and fulfilling the ambition we all have for the club with this talented and committed group of players."
</p>

<video autoPlay loop muted  style={{height:"500px" ,width:"400px"  , marginLeft:"310px" , marginBottom:"15px"}}>
        <source src="articlevideo.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>

<p style={articleContentStyle}>
City are 11th in the Championship following a 1-0 win over basement side Sheffield Wednesday last weekend.


</p>
<p style={articleContentStyle}>
The Robins' previous assistant manager Curtis Fleming, who joined the club under Pearson's reign and took charge of that victory against the Owls, has left the club with Manning's arrival.
</p>
<p style={articleContentStyle}>
Chairman Jon Lansdown told the club's official website: "As soon as we made the change Liam was our first choice and we are grateful to Oxford United for the extremely professional way they have approached the departure of someone who was doing a fantastic job for them."
</p>
<p style={articleContentStyle}>
"We are excited about the arrival of Liam and Chris and fulfilling the ambition we all have for the club with this talented and committed group of players.""
</p>
      </p>
      
    </div>

























    <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"15px" , marginBottom:"0px"}}>Read More Articles</h1>


    <div style={articleContainerStyle2}>
<div style={textOverlayStyle2}>Breaking</div>
      <div style={authorInfoStyle2}>
      <img
  style={authorImageStyle}
  src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  alt="Author" 
/>



        <div style={authorNameStyle}>Jamie Jackson</div>
      </div>

      <h1 style={articleHeadingStyle}>Copenhagen comeback floors 10-man Manchester United after Rashford red</h1>

      <p style={articleContentStyle}>
     
After seven goals, two pivotal VAR decisions, two penalties and a red card, 10-man Manchester United ended on the wrong end of a shattering 4-3 defeat on a night of harum-scarum entertainment.
      </p>
      <p style={articleContentStyle}>
      It leaves Erik ten Hag’s band of misfiring men bottom of Group A and having, yet again, to reset and go again this season. With two matches left of the phase they have three points, one behind Galatasaray and Copenhagen, who deserved victory here even if it turned on a dubious Marcus Rashford sending off.
      </p>

<img src="https://i.guim.co.uk/img/media/e848427dee080dc199a6108d4d478606e9776346/105_295_5106_3064/master/5106.jpg?width=620&dpr=1&s=none" style={{height:"400px" , width:"700px" , marginTop:"15px" , marginBottom:"25px" , marginLeft:"170px"}}/>

<p style={articleContentStyle}>
United were in control and 2-0 ahead when the forward was dismissed, precipitating a collapse that had Denmark’s champions level by the break. Rashford’s was the first VAR adjudication via the touchline TV. The second came after Harry Maguire’s header was handled by Lukas Lerager and Donatas Rumsas, the referee, awarded a second spot-kick.
      </p>
      <p style={articleContentStyle}>

      All this was after Ten Hag’s side scored on 171 seconds to shush Jacob Neestrup, the Copenhagen coach who promised Parken would be a wall of noise. It was – via a ramped-up atmosphere that featured the Imperial March from Star Wars, an extended banner which declared “Welcome To Your Theatre Of Nightmares”, and billboard-sized images that showed a sleeping red devil and other images referencing Copenhagen’s 2006 1-0 win here, also in a group meeting.
<p style={articleContentStyle}>
Yet inside three minutes United had their travelling support jumping and the Danes upset due to their finest move this season. As Copenhagen pressed, Diogo Dalot surged along the left and pinged the ball to Fernandes. His crossfield spiral was killed with aplomb by Rashford who caressed it down the right. There, Aaron Wan-Bissaka crossed to Scott McTominay whose relay was stabbed in by Rasmus Højlund.
</p>

<img src="https://i.guim.co.uk/img/media/2776a4c7791514096af355012e5813cf59dd4d30/0_34_2610_1566/master/2610.jpg?width=620&dpr=1&s=none" style={{height:"400px" , width:"700px" , marginTop:"15px" , marginBottom:"25px" , marginLeft:"170px"}}/>


<p style={articleContentStyle}>
Ten Hag again chose Maguire and Evans at centre-back, suggesting the 30- and 35-year-old are first choice ahead of Victor Lindelöf and Raphaël Varane, who came on for the Northern Irishman. This was Evans’s first Champions League start since a Sir Alex Ferguson United XI drew 1-1 with Real Madrid in 2013 and his removal is further injury woe for Ten Hag. “I don’t know [how serious] it is,” said the Dutchman.
</p>

<p style={articleContentStyle}> This came after he first hammered the free-kick for Rashford’s foul off André Onana’s bar. Play broke, Peter Ankersen crossed from the right, Diogo Gonçalves sidefooted the ball back in and an unmarked Elyounoussi finished.

Scott McTominay was culpable for Copenhagen’s second as the Scot’s wild punt went to those in white who moved into the area, where Gonçalves’s effort hit Maguire’s hand. Rumsas awarded a penalty and the same player scored in the ninth minute of added time.</p>

{/* <video autoPlay loop muted  style={{height:"500px" ,width:"400px"  , marginLeft:"310px" , marginBottom:"15px"}}>
        <source src="articlevideo.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video> */}

<p style={articleContentStyle}>
Scott McTominay was culpable for Copenhagen’s second as the Scot’s wild punt went to those in white who moved into the area, where Gonçalves’s effort hit Maguire’s hand. Rumsas awarded a penalty and the same player scored in the ninth minute of added time.

Ten Hag felt sore about Rashford’s dismissal and the manager complained, too, that each of Copenhagen’s strikes should not have stood, as he believed Elyounoussi’s was offside due to a different Copenhagen player being in Onana’s line of vision, and that Maguire could not move out of way of Gonçalves’s shot for the spot-kick


</p>
<p style={articleContentStyle}>
For the second half, Sofyan Amrabat’s defensive qualities replaced Eriksen’s flair, though United still operated an attack trident of Fernandes, Højlund and Garnacho, causing Copenhagen to hunt the ball. When they did, the visitors became a 4-4-1 that was a test of Copenhagen’s creativity. Denis Vavro’s 30-yard pea-roller that Onana saved with ease suggested a lack of the commodity, while an attack that had Dalot shooting into Grabara’s arm encouraged.</p>
<p style={articleContentStyle}>
The Parken faithful remained vocal, mixing songs with jeers whenever Onana slowed the contest, though you could hardly blame the No 1. But, after Fernandes’s penalty, came the interventions of Lerager and Bardghji.</p>


<img src="matchstates.PNG" style={{height:"400px" , width:"900px" , marginTop:"15px" , marginBottom:"25px" , marginLeft:"50px"}}/>


      </p>
      
    </div>








    {/* <div>
    
      <div style={overlayStyle}>
        
        <h1 style={{fontSize: '48px', marginLeft:"-750px", fontWeight:"bold", marginTop:"-200px"}}>FOOTBALL 360:</h1>
        <h1 style={{fontSize: '48px', marginLeft:"-150px", fontWeight:"bold", marginTop:"-10px"}}>THE HOME OF FOOTBALL</h1>

     
      </div>
      </div> */}
    {/* <div>
        
        <img src="https://t3.ftcdn.net/jpg/02/38/38/62/240_F_238386255_oV6J5nFpScDUEZv1cQpKbVVEfTmU2xhg.jpg"  style={{ width:"70%" , height:"40%" , marginLeft:"230px"}}/>
        <div style={overlayStyle}>
            <h2 style={{color:"red"}}>cfcfed</h2>
</div>
</div> */}
</div>
   
    <Footer/>
    <Footerweb/>
    
    </>
)



}
export default Articlepage;