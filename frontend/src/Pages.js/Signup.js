import { useState } from 'react';
import { addLogindata } from '../services/api';
import '../Pages.js/Signup.css';
import Navbar from '../component/Navbar';
function Signup(){


  // const [login, setlogin] = useState({
  //   Name:"",
  //   Email: "",
  //   Password: "",
  //   Confirmpass: "",
  // });



  const initialDataState ={
    Name:"",
    Email: "",
    Password: "",
    Confirmpass: "",
  }

  const [login, setlogin]= useState(initialDataState);



  const {Name, Email, Password, Confirmpass}=login;

  const handleInputChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };



  const isEmailValid = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    try {



            // Email validation
            if (!isEmailValid(Email)) {
              alert('Please enter a valid email address.');
              return;
            }
      



      if (Password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (Password !== Confirmpass) {
        alert('Passwords do not match.');
        return;
      }

      
      console.log(login);
      await addLogindata(login);
      alert("Data is succesfully added");

      setlogin(initialDataState);


    } 
    catch (error) {
      console.log("Not saved...", error);
    }
  };

    return(

      <div style={{backgroundImage: 'url("Animation2.svg")'}}>
        <Navbar/>
        <div style={{ paddingTop:"150px", marginLeft:"600px"}}>
        <img  src="football3602.png" alt="Logo" style={{ width: '100px', height: '85px', marginRight: '10px' }} />
      <h3 style={{ color: "black", marginTop:"10px" }}>Football 360</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '35vh' }}>
          <div class="form-container">
            <p class="title">Registration form</p>
            <form class="form">
              <input style={{width:"300px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}}  type="text" name="Name" value={Name} onChange={handleInputChange} class="input" placeholder="Enter Your Name"/>
              <input style={{width:"300px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}}  type="email" name="Email" value={Email} onChange={handleInputChange} class="input" placeholder="Enter an email"/>
              <input style={{width:"100px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}} type={showPassword ? 'text' : 'password'} name="Password" value={Password} onChange={handleInputChange} class="input" placeholder="Password"/>
              <input style={{width:"100px" , height:"50px" , borderRadius:"15px" , borderWidth:"5px"}} type={showPassword ? 'text' : 'password'} name="Confirmpass" value={Confirmpass} onChange={handleInputChange} class="input" placeholder="Confirm Password"/>

              <label>
              <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} className="password-toggle-checkbox" />
              Show Password
            </label>

              <button style={{width:"90px" , height:"50px" , borderRadius:"15px" , marginLeft:"20px", borderWidth:"5px"}} type='button' onClick={handleSubmit} class="form-btn">sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
};
export default Signup;