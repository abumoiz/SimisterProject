import React from 'react';

function  Footer() {
  const footerStyle = {
    backgroundColor: '#01172F',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '24px',
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  };

  const imageStyle = {
    width: '42px', // Adjust the width as needed
    height: '42px', // Adjust the height as needed
    margin: '0 30px', // Spacing between icons
  };

  return (
    <footer style={footerStyle}>
      <div>

      <p style ={{color:"#F3F6F4" , marginTop:"15px" , marginBottom:"25px" , fontSize:"20px"}}>Follow us on social media for updates</p>

        <a href="#" className="social-icon" style={iconStyle}>
          <img src="fblogowithoutbg.png" alt="Facebook" style={imageStyle} />
        </a>
        <a href="#" className="social-icon" style={iconStyle}>
          <img src="twitter.png" alt="Twitter" style={imageStyle} />
        </a>
        <a href="#" className="social-icon" style={iconStyle}>
          <img src="instagram.png" alt="Instagram" style={imageStyle} />
        </a>
        <a href="#" className="social-icon" style={iconStyle}>
          <img src="linkedin.webp" alt="LinkedIn" style={imageStyle} />
        </a>
        <a href="#" className="social-icon" style={iconStyle}>
          <img src="youtube.webp" alt="YouTube" style={imageStyle} />
        </a>
      </div>
     
    </footer>
  );
}

export default Footer;
