import { createRef } from "react";
function Add()
{
const ref1 = createRef(null);
function handle()
{
ref1.current.style.background="green";

}
return(
<>
<div>
   
    <div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Article Tittle</label>
  </div>
  <div class="col-auto">
    <input class="form-control" />
  </div>
  <div class="col-auto">
    
  </div>
</div>




<div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Article Content</label>
  </div>
  <div class="col-auto" >
    <input ref={ref1}  type="password" id="inputPassword6" class="form-control" style={{width: "700px", height: "150px"}}/>
  </div>
  
</div>





<button  type="button" class="btn btn-primary" style={{margin: "30px"  }} onClick={handle}>Add article </button>

</div>


</>

)

}

export default Add;