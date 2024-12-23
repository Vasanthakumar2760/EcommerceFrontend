import React, { useState } from 'react';
import productData from '../assets/all_product';
import kids_banner from '../assets/kids_banner.jpg';
import './kids.css';

export const Kids = ({ addToCart }) => {
  const [addedItems, setAddedItems] = useState({});
  const slicedProducts = productData.slice(24, 36);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    setTimeout(() => {
      setAddedItems((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));
    }, 2000);
  };

  return (
    <>
      <div className="banner">
        <img src={kids_banner} alt="Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-title">Fashion for the Little Ones</h1>
          <p className="banner-description">Style and Comfort for Kids</p>
        </div>
      </div>

      <div className="products-container">
        {slicedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrapper">
              <img src={product.image} alt={product.name} className="product-img" />
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <div className="price-container">
                <p className="new-price">${product.new_price.toFixed(2)}</p>
                <p className="old-price">${product.old_price.toFixed(2)}</p>
              </div>
            </div>
            <div className="hover-btn-container">
              <button 
                className={`buy-now-btn ${addedItems[product.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(product)}
              >
                {addedItems[product.id] ? 'Cart Added' : 'BUY NOW'}
              </button>
            </div>

            {addedItems[product.id] && (
              <div className="cart-message">Item added to cart</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Kids;
