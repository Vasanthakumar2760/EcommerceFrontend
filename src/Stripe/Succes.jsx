import React from 'react';
import { Link } from 'react-router-dom';
import './Succes.css'; 

const OrderSuccess = () => {
    return (
        <div className="order-success">
            <i className="fas fa-check-circle"></i>
            <h2>Your Order is Successful!</h2>
            <p>Thank you for shopping with us! Your order has been successfully placed. We’re getting it ready for shipment and will notify you once it’s on its way.</p>

            <div className="order-details">
                <p><strong>Order Number:</strong> #123456789</p>
            </div>

            <Link to="/home" className="cta-button">Explore More</Link>
        </div>
    );
};

export default OrderSuccess;