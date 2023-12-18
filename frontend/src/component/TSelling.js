
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './Card';
import TCard from './TCard'
function TSelling()
{
return(

    <div style={{  backgroundImage: 'url("Tableback.svg")' , marginTop:"-33px"}}>
            <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px" , marginTop:"50px"}}> Big Clashes Ahead</h1>

 <div className="Nw p-5">

    <div className="row container-fluid">
        <div className="col-md-6">
 <TCard src="tselling1.webp"
  description="EL Clasico" >

 </TCard>
        </div>
        <div className="col-md-6">
 <TCard src="tselling2.jpg"  
 description="Manchester Derby" >
 </TCard>
        </div>
    </div>
</div>
</div>
)
}
export default TSelling;