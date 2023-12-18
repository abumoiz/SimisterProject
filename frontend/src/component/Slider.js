import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Slider()
{
return(

    <div style={{ backgroundImage: 'url("Animation2.svg")' , height:"720px" , marginTop:"-20px"}}>

        <h1 style={{background:"#01172F" , color:"#F3F6F4" , paddingTop:"20px" , paddingBottom:"20px" , paddingLeft:"120px"}}> Top Leagues</h1>
<div id="carouselExampleCaptions" class="carousel slide pt-5 " style={{width: "80% " , marginLeft:"150px" , marginTop:"-25px"}}>
<div>

  <div class="carousel-inner" >
    <div class="carousel-item active ">
      <img src="slider.1.jpg" class="d-block w-100 " alt="Unable to Load" style={{ cursor: "pointer" , height: "85vh"}}
        onClick={() => window.location.href = 'your_destination_url_2'}/>
      <div class="carousel-caption d-none d-md-block">
        

      </div>
    </div>
    <div class="carousel-item">
      <img src="slider.2.jpg" class="d-block w-100" alt="Unable to Load" style={{ cursor: "pointer",height: "85vh" }}
        onClick={() => window.location.href = 'your_destination_url_2'}
      />
      <div class="carousel-caption d-none d-md-block">
        
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="slider.3.jpg" class="d-block w-100" alt="Unable to Load" style={{ cursor: "pointer",height: "85vh" }}
        onClick={() => window.location.href = 'your_destination_url_2'}/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  </div>
                  {/* <img src="..." alt="Image 1" className="sidebar-image" /> */}
              
        




</div>


</div>


)
}
export default Slider;