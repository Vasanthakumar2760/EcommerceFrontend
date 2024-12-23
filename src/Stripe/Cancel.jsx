import React from 'react';
import { Link } from 'react-router-dom';
import './Cancel.css'; 
const OrderCancelled = () => {
    return (
        <div className="order-cancelled">
            <i className="fas fa-times-circle"></i>
            <h2>Your Order Has Been Cancelled</h2>
            <p>We’re sorry, but your order has been cancelled. If this was a mistake, don’t worry—feel free to place a new order or reach out to us for assistance.</p>

            <div className="order-details">
                <p><strong>Order Number:</strong> #987654321</p>
                <p><strong>Status:</strong> Cancelled</p>
                <p><strong>Reason:</strong> Payment Failed</p>
            </div>

            <Link to="/home" className="cta-button">Go Back to Shop</Link>
        </div>
    );
};

export default OrderCancelled;