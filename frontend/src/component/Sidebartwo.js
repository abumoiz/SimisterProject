import React from 'react';
import { Link } from 'react-router-dom';
import 
{BsBriefcaseFill}
 from 'react-icons/bs';

function Sidebartwo() {
  
    const adminData = {
        name: 'Abdul Moiz',
        qualification: 'Website Admin',
        imageSrc: 'personicon.png', // Provide the correct path to your admin's image
      };
    
      const styles = {
        card: {
          display: 'flex',
          flexDirection: 'row', // Change to 'row'
          alignItems: 'center',
        },
        image: {
          borderRadius: '50%',
          border:"2px solid grey",
          width: '50px', // Adjust the size of the image as needed
          height: '50px',
          objectFit: 'cover',
          marginLeft:"15px",
          marginBottom:"20px",
          marginRight: '8px', // Add margin for spacing between image and text
        },
        textContainer: {
          display: 'flex',
          marginBottom:"20px",
          flexDirection: 'column',
        },
        name: {
          fontWeight: 'bold',
          fontSize: '16px',
        },
        qualification: {
          fontSize: '14px',
          color: '#555',
        },
      };
  
    return (
    <aside id="sidebar" >
        <div className='sidebar-title' style={{ height:"70px"}}>
            <div className='sidebar-brand'>
               <img style={{height:"45px" , width:"45px"}} src='football3602.png'></img>  Football 360
            </div>
            
        </div>

        <ul className='sidebar-list'>
        <div className='sidebar-list-item1'>ANALYTICS</div>
            <li className='sidebar-list-item'>
               <Link to="/">
                <a >
                    <img style={{height:"20px" , width:"20px" , marginRight:"15px" , marginLeft:"20px"}} src='hometwoicon.png'></img>
                    Home
                </a>
                </Link> 
            </li>
            
            <li className='sidebar-list-item'>
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px", marginLeft:"20px"}} src='dashboardicon.webp'></img>

                     Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px", marginLeft:"20px"}} src='notificationicon.png'></img>

                    Notifications
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a >
                     Jobs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a >
                   Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a >
                     History
                </a>
            </li> */}
            <div style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"10px"}}>
            
            </div>
            <div className='sidebar-list-item1'>FEATURES</div>
            <li className='sidebar-list-item'>
              <Link to="/dashboard/add">
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px", marginLeft:"20px"}} src='articleicon.jpg'></img>

                    Add Article
                </a>
                </Link>
            </li >
            <li className='sidebar-list-item'>
               <Link to="/dashboard/update">
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px", marginLeft:"20px"}} src='eyeicon.png'></img>

                    View
                </a>
                </Link>
            </li >
           
            <li className='sidebar-list-item'>
            <Link to="/dashboard/publisher">
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px", marginLeft:"20px"}} src='publishertwoicon.png'></img>

                    Publishers
                </a>
                </Link>
            </li >
            
            <li className='sidebar-list-item'>
                <a >
                <img style={{height:"20px" , width:"20px" , marginRight:"15px" , marginLeft:"20px"}} src='audienceicon.png'></img>

                    Engagement
                </a>
            </li >
        </ul>

        <div style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"0px"}}>
            
            </div>
            <div className='sidebar-list-item1'>PROFILE</div>
            <div style={styles.card}>
      <img src={adminData.imageSrc} alt="Admin" style={styles.image} />
      <div style={styles.textContainer}>
        <div style={styles.name}>{adminData.name}</div>
        <div style={styles.qualification}>{adminData.qualification}</div>
      </div>
    </div>
    </aside>
  )
}

export default Sidebartwo;