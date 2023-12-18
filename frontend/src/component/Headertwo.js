import React from 'react';
import 
 { BsGear }
 from 'react-icons/bs';
 import { FaRegBell } from "react-icons/fa";

function Headertwo() {
 
    const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        margin: '20px',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        
        
      };
      
      const inputStyle = {
        flex: 1,
        padding: '8px',
        fontSize: '16px',
        border: 'none',
        outline: 'none',
      };
      
      const searchIconStyle = {
        padding: '8px',
        fontSize: '20px',
        cursor: 'pointer',
        backgroundColor: '#ccc',
        borderRadius: '0 20px 20px 0',
      };
    return (
    <header className='header'>
       
        <div className='header-left' style={{color:"black"}}>
       <h2 style ={{fontWeight:"bold" , fontSize:"30px"}}> Welcome back, Admin  <img   style={{height:"33px" , width:"33px"}}  src='handwaving.png'></img>  </h2>
       <p> What operations do you want to perform...</p>
        </div>
        
          <div className='header-right' style={{marginLeft:"20px"}}>

          <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search..."
       
       
        style={inputStyle}
      />
      <span  style={searchIconStyle}>
        &#128269;
      </span>
    </div>

      {/* <BsGear className='icon' />
      <FaRegBell className='icon' />

      <img
        className='rounded-circle icon'
        src=''
        alt=''
        style={{ width: '50px', height: '50px' }}
      /> */}
    </div>
    </header>
  );
}

export default Headertwo;