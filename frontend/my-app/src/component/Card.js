import 'bootstrap/dist/css/bootstrap.min.css';
function Card ()
{

    const pr = [
       
        
      {
        img :" https://i.dailymail.co.uk/1s/2023/10/25/13/76982911-0-image-a-50_1698236455496.jpg",
        title: " HUGE points deduction",
 description: "  Premier League 'recommend a HUGE points deduction for Everton' - which would put them on NEGATIVE points - ",



    },
    {
      img :"https://i.dailymail.co.uk/1s/2023/10/25/12/76980439-0-image-a-25_1698232703550.jpg ",
      title: "Chelsea future plans ",
      description: "Chelsea 'are finalising their future plans' on whether to stay at Stamford Bridge or move to Earls Court. ",

      
  },
  {
    img :"https://i.guim.co.uk/img/media/5fb7b5f0be3f7d55915652d3b80b0a30a5e3c63e/0_51_3500_2099/master/3500.jpg?width=620&dpr=1&s=none",
    title: " Niamh Charles hopes",
    description: " Niamh Charles hopes FA changes will make England ‘more representative’ FA now spreading talent centres around ",

    
},
{
  img :"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/5995/production/_131633922_gettyimages-1778791372.jpg",
  title: "Young Boys vs Man City ",
  description: " Young Boys vs Man City LIVE! Champions League team news, analysis, match commentary all are posted on match details",

  
}
,
{
img :"https://i.guim.co.uk/img/media/98432b6e42b3f3ea5710eb1bd0add079aff111bf/259_226_2566_1540/master/2566.jpg?width=1300&dpr=1&s=none ",
title: "Ramos gets his moment  ",
description: "At the end of Real Madrid’s 1-1 draw at Sevilla on Saturday evening, the battle finally over in a draw  ",


},
{
img :"https://i.guim.co.uk/img/media/383c2dcc75749e8b164d2cd6a06dd22da983e3be/0_310_9335_5602/master/9335.jpg?width=1300&dpr=1&s=none ",
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

