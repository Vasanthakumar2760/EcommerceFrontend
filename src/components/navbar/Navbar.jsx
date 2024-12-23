import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logoWatch.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className='watch' />
        <p className='m11'>Timeo</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/home'>Home</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/cart'>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to='/home' onClick={() => setMenu("shop")}>Home</Link>
        <Link to='/mens' onClick={() => setMenu("mens")}>Men</Link>
        <Link to='/womens' onClick={() => setMenu("womens")}>Women</Link>
        <Link to='/kids' onClick={() => setMenu("kids")}>Kids</Link>

        <Link to='/cart'>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>

        <div className="close-menu" onClick={toggleMobileMenu}>
          &times;
        </div>
      </div>
    </div>
  );
};
