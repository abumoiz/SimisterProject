import Footer from "../component/Footer";
import Footerweb from "../component/Footerweb";
import Navbar from "../component/Navbar";

function Trending()
{


    const detailedNews = {
        title: 'VAR has got out of control - Man Utd lose again on chaotic night in Copenhagen',
        content: 'On a chaotic night in Copenhagen there were seven goals, two penalties, a "game-changing" red card, a protester on the pitch and a late winner by a 17-year-old substitute - but once more we are left talking about VAR.',
      };
    
      const newsCards = [
        {
            title: " HUGE points deduction",
            img :" https://i.dailymail.co.uk/1s/2023/10/25/13/76982911-0-image-a-50_1698236455496.jpg",
        },
        {
            title: "Chelsea future plans ",
            img :"https://i.dailymail.co.uk/1s/2023/10/25/12/76980439-0-image-a-25_1698232703550.jpg ",
        },
        {
            title: " Niamh Charles hopes",
            img :"https://i.guim.co.uk/img/media/5fb7b5f0be3f7d55915652d3b80b0a30a5e3c63e/0_51_3500_2099/master/3500.jpg?width=620&dpr=1&s=none",
        },
        {
            title: "Young Boys vs Man City ",
            img :"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/5995/production/_131633922_gettyimages-1778791372.jpg",
        },
          {
            title: "Ramos gets his moment  ",
            img :"https://i.guim.co.uk/img/media/98432b6e42b3f3ea5710eb1bd0add079aff111bf/259_226_2566_1540/master/2566.jpg?width=1300&dpr=1&s=none ",
        },
          
          {
            title: 'Barca vs Shaktar',
            img: 'https://www.cnet.com/a/img/resize/252166b7ca025b4bee4dc845022c5f62ae0d1a2f/hub/2023/11/07/abf6b07e-92b8-4625-9c37-17b4d9588afa/gettyimages-1765387487.jpg?auto=webp&width=1200',
          },
        // Add more news cards as needed
    ]
    
     
    
      const newsPageStyle = {
        display: 'flex',
        width: '100%',
      };
    
      const detailedNewsStyle = {
        flex: '70%',
        padding: '20px',
      };
    
      const newsCardsStyle = {
        marginTop:"15px" , 
        flex: '30%',
        display: 'flex',
        height:"650px" , 
        flexDirection: 'column', // Change flexDirection to 'column'
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        gap: '10px',
      };
    
      const cardStyle = {
        flex: '0 0 calc(50% - 5px)',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        flexDirection: 'column', // Change flexDirection to 'column'
        textAlign: 'center',
      };
    
      const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
      };


      const textOverlayStyle = {
        position: 'absolute',
        bottom:320,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize:"60px" , 
        fontWeight:"1000"
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

return(

    <>
    <Navbar/>


<div>
<img src="https://t4.ftcdn.net/jpg/02/92/02/61/240_F_292026112_7LcDd72Xxdd1pkJiElEVmIeCZNY5N4oL.jpg" style={{width:"100%"}}/>
<div style={textOverlayStyle}>TRENDING NEWS</div>



<div style={newsPageStyle}>
      <div style={detailedNewsStyle}>

        <h2>{detailedNews.title}</h2>
        <img src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/8F93/production/_131655763_gettyimages-1782665984.jpg" style={{marginTop:"20px" , marginBottom:"15px"}}/>
        <p style={{fontWeight:"650"}}>On a chaotic night in Copenhagen there were seven goals, two penalties, a "game-changing" red card, a protester on the pitch and a late winner by a 17-year-old substitute - but once more we are left talking about VAR.</p>
<p>In a week that has seen video technology in the headlines because of its use in Monday's madness at Tottenham, it came to the fore to make key decisions in Denmark as Manchester United slipped to a damaging Champions League defeat.</p>     
     <p>United manager Erik ten Hag felt its use to dismiss Marcus Rashford for planting his foot on the ankle of Elias Jelert "changed the game". At the time, the visitors led 2-0. "In real time it's just not a red," former United midfielder Paul Scholes told TNT Sports.</p>
     <p>Referee Donatas Rumsas would be called to the pitchside monitor twice more in the game, to award a penalty to each side for handball - both described as "soft" by Scholes' ex-United team-mate and colleague in the TNT studio, Owen Hargreaves.</p>
     
     <p>With United smarting from another chastening defeat which leaves them facing a huge task to qualify for the last 16, BBC Sport picks through the chaos and controversies in the Danish capital.</p>
     
     <p>---------------------------------------------------------------------------------------------------------------------------------------</p>
      
     <h2>
Phil Neville returns to MLS with a point to prove, but a fanbase that doesn’t want him</h2>
        <img src="https://i.guim.co.uk/img/media/28353dd7b21652b6bbe9d95703dce9b2fac5a496/0_34_3000_1799/master/3000.jpg?width=1140&dpr=1&s=none" style={{marginTop:"20px" , marginBottom:"15px" , width:"90%"}}/>
        <p style={{fontWeight:"650"}}>
Phil Neville returns to MLS with a point to prove, but a fanbase that doesn’t want him
The Timbers announced Neville as their new head coach this week, five months after he was sacked by Inter Miami</p>
<p>phil Neville, somehow, is back in Major League Soccer. A lot of Portland Timbers fans wish he wasn’t - and they have been vocal in saying so. When the club published an announcement video of Neville stepping over the stands at Providence Park, it inadvertently symbolised how the concerns of supporters have been ignored to appoint the former England international. The video was deleted, but fans aren’t ready to accept Neville</p>     
<p>Timbers fans have also questioned Neville’s character, particularly relating to his past statements on social about women. “[Neville] has a history of sexist public statements that run counter to our ethos as a club, city and supporters’ group,” the Timbers Army said in a statement. Neville acknowledged his statements after being appointed manager of the England women’s team. “The tweets were wrong then and wrong now,” Neville told the Guardian in 2019.</p>
    
<p>This isn’t the first time Neville’s distasteful comments about women from more than a decade ago have been dredged up, but the discussion is particularly pertinent given the Portland Timbers’ recent controversies. This is, after all, an organization (including the Portland Thorns) that faced widespread criticism for its handling of a series of sexual misconduct and domestic violence allegations. The club settled a domestic violence lawsuit with the estranged wife of former midfielder Andy Polo in 2022. MLS fined Portland $25,000 for failing to disclose the allegations of domestic violence.</p>     
     <p>---------------------------------------------------------------------------------------------------------------------------------------</p>
      
      
      </div>


      
      <div style={newsCardsStyle}>
        <h4>Trending Now</h4>
        {newsCards.map((card, index) => (
          <div style={cardStyle} key={index}>
            <img src={card.img} alt={card.title} style={imgStyle} />
            <h3 style={{marginTop:"8px"}}>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
    <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"0px", marginBottom:"0px"}}> Matchday Breakdown</h1>
   <div style={{backgroundImage: 'url("Animation.svg")', marginTop:"0px"}}>
    <video id="videoPlayer" width="640" height="360" controls
        src="matchupdatevideo.mp4" type="video/mp4"  style={{width:"80%" , height:"65%" , marginLeft:"140px" , marginBottom:"30px" , marginTop:"35px"}}>
        Your browser does not support the video tag.
    </video>
    </div>
<div>



    
</div>

</div>

    
    <Footer/>
    <Footerweb/>
    </>
)

};


export default Trending;