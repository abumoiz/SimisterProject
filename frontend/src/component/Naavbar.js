import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
 function Naavbar()
 
 {

   return(
    
   <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
  <img src= "football3602.png" class="rounded nav-link active" alt="World Jobs" href="http://localhost:3000/Home" style={{ width: "90px", height: "80px" , paddingLeft:"20px"}} />  
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/Home" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jobs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" >About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search" style={{marginRight: "450px",width: "550px"}}>
        <input class="form-control me-2" type="search" placeholder="Find Jobs" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        
      </form>
      
      <div style={{marginLeft: "-280px" }}>
      <button type="button" class="btn btn-danger" style={{margin: "4px" }} >Post a Job</button>
     
      <button type="button" class="btn btn-primary" style={{margin: "4px" }}>Dashboard</button>
     
      <button type="button" class="btn btn-success" style={{margin: "4px" }}>Employer</button>

      </div>
    </div>
    
  </div>

</nav>
   </div>
  
   );
 }
 export default Naavbar;