import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { Link } from 'react-router-dom'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`https://ecommercebackend-3ul4.onrender.com/signup`, { email, password });
      setMessage(response.data.message); 
      navigate('/'); 
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="main-container">
      <div className="form-wrapper">
        <div className="form-content">
          <form className="form signup-form active" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <p>Sign up to explore our Collections</p>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="input-icon">📧</span>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="input-icon">🔒</span>
            </div>
            <button type="submit" className="btn">Sign Up</button>
            <p className="m1">
              Existing user? click here to <span className="hel"><Link to="/">Login</Link></span>
            </p>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
