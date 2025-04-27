import React, { useState } from 'react';
import './contact.css'; // Import the CSS for styling
import Navbar from './Navbar';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    if (!email || !name || !message || !phone) {
      setError('All fields are required.');
    } else {
      setSuccess('You have been registered successfully!');
      setEmail('');
      setName('');
      setMessage('');
      setPhone('');
      setError('');
    }
  };

  return (
    <div>
    <Navbar />
    <div className="contact-container">
      <div className="contact-box">
        <h2>Register Now</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="input-field message-field"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="send-btn">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;