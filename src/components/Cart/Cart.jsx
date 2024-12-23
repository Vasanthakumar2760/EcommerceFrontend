import React, { useState } from 'react';
import './Cart.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePublicKey = "pk_test_51QY0SlKOdJ26wLD3qLIccAUY4nIZqcNAdhPZ5i4um2yUJZOsWSvUCqAM9BBAua8bROg3YTTcMj3w0rxr8t2JnL1J00KUMWjoGD";


const CartPage = ({ cartItems, setCartItems }) => {

  const onCheckout = async () => {
    const lineItems = cartItems.map(item => {
      if (!item.new_price || item.new_price <= 0) {
        return null;
      }
      const priceInCents = Math.round(item.new_price * 100);
  
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: priceInCents,
        },
        quantity: item.quantity,
      };
    }).filter(item => item !== null);

    if (lineItems.length === 0) {
      return;
    }
  
    try {
      const response = await fetch('https://ecommercebackend-3ul4.onrender.com/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineItems }),
      });
  
      const data = await response.json();
      if (response.ok) {
        const { id } = data;
        const stripe = window.Stripe(stripePublicKey);
        stripe.redirectToCheckout({ sessionId: id });
      }
    } catch (error) {
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map((item) =>
      item.id === id ? {
        ...item,
        quantity: item.quantity + 1,
        new_price: item.new_price * (item.quantity + 1) / item.quantity
      } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? {
        ...item,
        quantity: item.quantity - 1,
        new_price: item.new_price * (item.quantity - 1) / item.quantity
      } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-contaainer">
      <h2 className="cart-title">Your Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
        </div>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-card-image" />
              <div className="cart-card-details">
                <h4 className="cart-card-title">{item.name}</h4>
                <div className="cart-card-prices">
                  <span className="old-price">${item.old_price}</span>
                  <span className="new-price">${item.new_price.toFixed(2)}</span>
                </div>
                <div className="cart-card-quantity">
                  <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="checkout-section">
          <button onClick={onCheckout} className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
