import 'bootstrap/dist/css/bootstrap.min.css';

function Morecards ()
{
  const pr = [
    {
        img : "morecard1.webp",
        title: "The academy graduate",
        description: "Fermin Lopez was crucial in Barcelona's first, and scored a wonderful second, as the Blaugrana saw off Shakhtar Donetsk to maintain their perfect record in the Champions League. Xavi's side took a 2-0 lead, but conceded in the second half to make for a nervy finish to a 2-1 victory.    ",

        
    },
    {
        img : "morecard2.webp",
        title: "Real Madrid players",
        description: "Vinicius Jr provided a duo of assists, while Jude Bellingham was back among the goals as Real Madrid saw off Braga to pick up a tricky Champions League away victory. Los Blancos took a 2-0 lead, but the home side worked their way back into the game, forcing Madrid to see out a nervy 2-1 win.",

        
    },
    {
        img : "morecard3.webp",
        title: "Man United Dramatic Win",
        description: "The goalkeeper produced a stunning penalty save from Jordan Larsson to preserve all three points after a towering header from the England centre-back Andre Onana became the most unlikely hero for Manchester United by saving a last-gasp penalty from Copenhagen's Jordan Larsson and salvaging a 1-0 win and three golden Champions League points.",

        
    },

]

return(
<div style ={{marginTop:"-30px" }}>
<h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> More For You</h1>

<div class="card mb-3" style={{border: "0px solid black" , backgroundImage: 'url("Tableback3.svg")' , marginTop:"-8px"}} >
{pr.map((item) => (

  <div class="row g-0" style={{marginTop:"30px",border: "3px solid black",  borderRadius:"8px" , marginLeft:"40px" ,  marginRight:"40px"}}>
    <div class="col-md-4">
      <img src={item.img} style={{height : "250px", width: "450px" }} class="img-fluid rounded-start" alt="Placeholder Image"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
      <p class="card-text">{item.description}</p>
      <button type="button"  style={{ height:"50px"  , width:"400px", background:"black",  color:"#F3F6F4" , border:"3px solid grey" , borderRadius:"8px"  , marginLeft:"190px" , marginTop:"15px"}}>Read More</button>
      </div>
    </div>
  </div>
    ))}

</div>
</div>
);

}
export default Morecards;