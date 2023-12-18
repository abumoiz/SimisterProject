import 'bootstrap/dist/css/bootstrap.min.css';

function Card ()
{

  


    const pr = [
       
        
      {
        img :"card.1.avif",
        title: " HUGE points deduction",
 description: "  Premier League 'recommend a HUGE points deduction for Everton' - which would put them on NEGATIVE points - ",



    },
    {
      img :"card.2.avif ",
      title: "Chelsea future plans ",
      description: "Chelsea 'are finalising their future plans' on whether to stay at Stamford Bridge or move to Earls Court. ",

      
  },
  {
    img :"card.3.avif",
    title: " Niamh Charles hopes",
    description: " Niamh Charles hopes FA changes will make England ‘more representative’ FA now spreading talent centres around ",

    
},
{
  img :"card.4.jpg",
  title: "Young Boys vs Man City ",
  description: " Young Boys vs Man City LIVE! Champions League team news, analysis, match commentary all are posted on match details",

  
}
,
{
img :"card.5.avif",
title: "Ramos gets his moment  ",
description: "At the end of Real Madrid’s 1-1 draw at Sevilla on Saturday evening, the battle finally over in a draw  ",


},
{
img :"card.6.avif ",
title: "MLS Future ",
description: " The league was once made up of would-bes and has-beens. Now there’s a burgeoning middle class ",


}
    ]
return(
  <div style={{ backgroundImage: 'url("Tableback.svg")' , marginTop:"-40px"}}>
    <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Trending Now</h1>

  <div className="container-fluid">
  <div className="row">
    {pr.map((item) => (
      <div  className="col-md-4">
        <div className="card" style={{ margin: "30px", border: "1px solid black"  , height:"410px"  }}>
          <img src={item.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <button type="button" className="btn btn-primary" style={{ margin: "4px" }}>
              Read More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
);
}
export default Card;

