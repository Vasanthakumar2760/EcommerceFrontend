import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ecommercebackend-3ul4.onrender.com/login', {
        email,
        password,
      });

      setMessage(response.data.message);
      setToken(response.data.access_token);

      if (response.data.access_token) {
        navigate('/home');
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="main-container">
      <div className="form-wrapper">
        <div className="form-content">
          <form className="form login-form active" onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>
            <p>Login to your account to continue</p>
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
            <button type="submit" className="btn">Login</button>
            <p className="m1">
              New user? click here to <span className="hel"><Link to="/signup">Signup</Link></span>
            </p>

            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
