import React from 'react';
import { Link } from "react-router-dom";
import Formsuser from './Formsuser';


const Dashboardweb = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  };

  const dashboardHeadingStyle = {
    fontSize: '24px',
    // height:"500px" , 
    margin: '20px 0',
    marginLeft:""
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    margin: '10px',
    marginTop:"40px" , 
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width:"150px"
  };

  return (
    <div style={{}}>
       <nav  style={{ backgroundColor: '#01172F', color: '#fff', paddingTop: '25px', paddingBottom: '25px', paddingLeft: '35px', display: 'flex', alignItems: 'center' }}>
      <img src="football3602.png" alt="Logo" style={{ width: '100px', height: '85px', marginRight: '10px' }} />
<h4 style={{color:"#F3F6F4"}}>Football 360</h4>
<Link to = "/">
<button type="button" style={{ marginLeft: "750px", marginRight: "15px", height: "50px", width: "120px", border: "px solid black", borderRadius: "10px", fontSize: "17px", background: "#F3F6F4" }}>View Website</button>
</Link>
</nav>
      <div style={dashboardHeadingStyle}>
        <h2 stytle={{}}  >Welcome to the Admin Dashboard</h2>
        <div className="row " style={{  height: "90vh"   , paddingBottom:"-300px" }}>
        <div
          className="col-md-2 bg-black"
          style={{  height: "80vh" }}
        >
 {/* <Link to = "/dashboard/create">
<button style={buttonStyle}>Create</button>
</Link>    */}
        
<Link to = "/dashboard/add">
<button style={buttonStyle}>Create</button>
</Link>  
<Link to = "/dashboard/update">
<button style={buttonStyle}>View</button>
</Link>  
{/* <Link to = "/dashboard/delete">
<button style={buttonStyle}>Delete</button>
</Link>   */}
        
        </div>
        <div
          className="col-md-10"
          style={{  height: "90%"   , width:"80%"  }}
        >
              

<Formsuser/>

        
         
        </div>
      </div>
    
      </div>
      </div>
  );
};

export default Dashboardweb;
