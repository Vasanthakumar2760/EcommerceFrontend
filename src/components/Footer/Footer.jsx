import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import logo from '../assets/logoWatch.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Watches Logo" />
        <p className="footer-brand-name">Timeo</p>
      </div>

      <ul className="footer-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mens">Mens</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>&copy; 2024 Timeo - All Rights Reserved</p>
      </div>
    </div>
  );
};
