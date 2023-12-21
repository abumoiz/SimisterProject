import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const listItemStyle = {
    marginRight: '30px',
  };


  

  

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    color: '#F3F6F4',
    borderBottom: '2px solid #F3F6F4',
    transition: 'border-color 0.3s', // Transition for hover effect
  };

  const listItemHoverStyle = {
    borderBottom: '2px solid #F3F6F4',
  };

  return (
    <nav style={{ backgroundColor: '#01172F', color: '#fff', paddingTop: '25px', paddingBottom: '25px', paddingLeft: '35px', display: 'flex', alignItems: 'center' }}>
      <img src="football3602.png" alt="Logo" style={{ width: '100px', height: '85px', marginRight: '10px' }} />
      <h4 style={{ color: "#F3F6F4" }}>Football 360</h4>

      <ul style={{ listStyle: 'none', display: 'flex', paddingLeft: '20px', marginLeft: '150px', marginTop: "13px"}}>
        <li style={{ ...listItemStyle }}>
          <Link to="/" style={navLinkStyle} activeStyle={listItemHoverStyle}>
            Home
          </Link>
        </li>
        <li style={{ ...listItemStyle }}>
          <Link to="/aboutus" style={navLinkStyle} activeStyle={listItemHoverStyle}>
            About
          </Link>
        </li>
        <li style={{ ...listItemStyle }}>
          <Link to="/news" style={navLinkStyle} activeStyle={listItemHoverStyle}>
            News
          </Link>
        </li>

        <li style={{ ...listItemStyle }}>
          <Link to="/articles" style={navLinkStyle} activeStyle={listItemHoverStyle}>
           Articles
          </Link>
        </li>


        <li style={{ ...listItemStyle }}>
          <Link to="/contactus" style={navLinkStyle} activeStyle={listItemHoverStyle}>
            Contact
          </Link>
        </li>

        {/* <li style={{ ...listItemStyle }}>
          <Link to="/customers" style={navLinkStyle} activeStyle={listItemHoverStyle}>
           Customers
          </Link>
        </li> */}

        <li style={{ ...listItemStyle }}>
          <Link to="/loginp" style={navLinkStyle} activeStyle={listItemHoverStyle}>
           Login
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navLinkStyle}>
            More
          </a>
          <ul className="dropdown-menu">
<Link to="/matchhighlights">
            <li><a className="dropdown-item" href="#">Match highlights</a></li>
            </Link > 

            <Link to="/pointstable">
            <li><a className="dropdown-item" href="#">Points table</a></li>
            </Link>
            {/* <li><hr className="dropdown-divider" /></li> */}
            <Link to="/upcomingmatches">
            <li><a className="dropdown-item" href="#">Upcoming matches</a></li>
            </Link>
          </ul>
        </li>
      </ul>

      <Link to="/dashboard">
      <div>
          <button type="button" style={{ marginLeft: "150px", marginRight: "15px", height: "50px", width: "120px", border: "px solid black", borderRadius: "10px", fontSize: "17px", background: "#F3F6F4" }}>Dashboard</button>
        </div>  
      </Link>
    </nav>
  );
}

export default Navbar;
