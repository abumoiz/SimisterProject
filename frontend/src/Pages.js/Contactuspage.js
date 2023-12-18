import React, { useState } from 'react';

const Contactuspage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  };

  const formStyle = {
    background: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    marginLeft:"40px" , 
    width:"600px"

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

  const selectStyle = {
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

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    const formData = new FormData(e.target);

    if (!formData.get('name')) {
      setErrors({ name: 'Please provide your name' });
    } else {
      // Handle form submission here (e.g., send data to the server)
      // For demonstration purposes, we'll just set submitted to true.
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div style={containerStyle}>
      {submitted ? (
        <p style={{ fontSize: '24px' }}>Thank you for your submission!</p>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <input type="text" name="name" placeholder="Your Name" style={inputStyle} />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

          <input type="email" name="email" placeholder="Your Email" style={inputStyle} />

          <select name="subject" style={selectStyle}>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>

          <input type="tel" name="phone" placeholder="Your Phone Number" style={inputStyle} />

          <textarea name="message" placeholder="Your Message" style={textAreaStyle} rows="5" />

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contactuspage;
