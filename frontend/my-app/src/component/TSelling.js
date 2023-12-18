
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
 <TCard src="https://www.insidesport.in/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-23-at-10.18.49-PM.jpeg"
  description="EL Clasico" >

 </TCard>
        </div>
        <div className="col-md-6">
 <TCard src="https://cdn.houstonpublicmedia.org/wp-content/uploads/2017/07/18111727/Manchester-Derby-Red-Blue.jpg"  
 description="Manchester Derby" >
 </TCard>
        </div>
    </div>
</div>
</div>
)
}
export default TSelling;