import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Mens } from './components/Mens/Mens';
import { Womens } from './components/Womens/Womens';
import { Kids } from './components/kids/Kids';
import CartPage from './components/Cart/Cart';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import OrderSuccess from './Stripe/Succes';
import OrderCancelled from './Stripe/Cancel';
import './app.css';
import Home from './components/home/home';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        updatedItems[itemIndex].new_price = updatedItems[itemIndex].price * updatedItems[itemIndex].quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const location = useLocation();

  const hideNavbarFooter = location.pathname === '/' || location.pathname === '/signup';

  return (
    <div id="root">
      <div className="main-content">
        {!hideNavbarFooter && <Navbar />} 
        <Routes>
       
          <Route path="/mens" element={<Mens addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/home" element={<Home  addToCart={addToCart}/>} />
        
          <Route path="/womens" element={<Womens addToCart={addToCart} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
 
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/cancel" element={<OrderCancelled />} />
        </Routes>
        {!hideNavbarFooter && <Footer />} 
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
