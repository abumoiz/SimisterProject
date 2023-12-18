import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
// import '../Component2/Login.css';
function Loginp(){
    return(
    
    <div style={{backgroundImage: 'url("Animation2.svg")'}}>
      <Navbar/>
      <div style={{ paddingTop:"150px", marginLeft:"600px"}}>
        <img  src="football3602.png" alt="Logo" style={{ width: '100px', height: '85px', marginRight: '10px' }} />
      <h3 style={{ color: "black", marginTop:"10px" }}>Football 360</h3>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35vh' }}>
      
        <div class="form-container">
          <p class="title">Welcome To Football360.com</p>
          <form class="form">
            <input style={{width:"300px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}} type="email" class="input" placeholder="Email"/>
            <input style={{width:"100px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}} type="password" class="input" placeholder="Password"/>
            <button  style={{width:"70px" , height:"50px" , borderRadius:"15px" , marginLeft:"20px"}} class="form-btn">Log in</button>
          </form>
          <p  style={{marginTop:"15px"}} class="sign-up-label">
            Don't have an account?
            <Link to='/Signup'>
              <span  style={{marginTop:"15px"}} class="sign-up-link">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};
export default Loginp;