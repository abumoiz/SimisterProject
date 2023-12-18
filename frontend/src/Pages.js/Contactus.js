import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Footerweb from '../component/Footerweb';
import Contactuspage from './Contactuspage';

function Contactus() {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const formStyle = {
        background: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        marginLeft:"25px"
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const textAreaStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const textOverlayStyle = {
        position: 'absolute',
        bottom: 270,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Background color with opacity
        color: 'black', // Text color
        padding: '5px', // Add some padding
        textAlign: 'center', // Center the text
        fontSize: "60px",
        fontWeight: "1000"
    };

    const mapStyle = {
        width: '900px',
       
        height: '80vhpx',
    };

    return (
        <>
            <Navbar />
            <div style={{backgroundImage: 'url("Animation2.svg")'}}>
                <img src="contactus.1.jpg" style={{ width: "100%" }} />

                <div style={textOverlayStyle}>CONTACT US</div>


                <h3 style={{ fontSize:"" , fontWeight:"700" , marginLeft:"300px" , marginTop:"50px" , color :"#5A5A5A" }}>Share your football stories, questions, or ideas with us.</h3>
                <h1  style={{marginLeft:"660px" , fontWeight:"700" }}>-</h1>
  <h3 style={{  fontSize:"" , fontWeight:"700" , marginLeft:"350px" , marginTop:"" , color :"#5A5A5A"}}>Want to discuss the latest matches or players?</h3>
  
  <h1 style={{marginLeft:"660px" , fontWeight:"700" }}>-</h1>
  
  <h3 style={{  fontSize:"" , fontWeight:"700" , marginLeft:"410px" , marginTop:"" , color :"#5A5A5A"}}>Passionate about football? So are we!</h3>

  <h2 style={{  fontSize:"" , fontWeight:"700" , marginLeft:"560px" , marginTop:"77px" , color:"black"}}>CONTACT US</h2>


  <p style={{ fontSize:"17px" , fontWeight:"500" , marginLeft:"300px" , marginTop:"" , color:"#5A5A5A"}}> by filling out the form below or by sending us an email directly at football360@gmail.com</p>

                <div style={containerStyle}>
<Contactuspage/>
             
                    {/* <form style={formStyle}>
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                        <textarea placeholder="Your Message" style={textAreaStyle} rows="5" />
                        <button type="submit" style={buttonStyle}>
                            Submit
                        </button>
                    </form> */}
                    <div style={mapStyle}>
                        <iframe  
                            title="Google Map"
                            src="https://maps.google.com/maps?q=abbottabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            style={{ height:"550px" , width:"550px" , marginTop:"-0px"  , marginLeft:"70px" , border:"1px  solid grey"}}
                            allowFullScreen   
                        />
                    </div>
                  
                </div>

            </div>
            <Footer />
            <Footerweb />
        </>
    )
}

export default Contactus;