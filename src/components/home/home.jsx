import React, { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './home.css';
import { Link } from 'react-router-dom';
import hi111 from "../assets/ban1.jpg";
import productData from '../assets/all_product'; 
import hi112 from "../assets/ban2.jpg";

const Home = ({ addToCart }) => {
  const [addedProduct, setAddedProduct] = useState(null);  

  const slicedProducts = productData.slice(36, 40);
  const slicedProducts1 = productData.slice(40, 44);

  const handleAddToCart = (product) => {
    addToCart(product);  
    setAddedProduct(product.id);  

    setTimeout(() => {
      setAddedProduct(null);
    }, 2000);
  };

  return (
    <div className="home">
      <div className="banner" id="h11">
        <img src={hi112} alt="Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-title">Welcome to the Watches Collection</h1>
          <p className="banner-description">Explore the latest designs and premium quality timepieces.</p>
        </div>
      </div>

      <section className="collection">
        <h2>Explore Our Collection</h2>
        <div className="card-grid">
          {slicedProducts.map((product) => (
            <div className="card" key={product.id}>
              <div className="product-img-wrapper">
                <img src={product.image} className="product-img" alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="price-container">
                  <p className="new-price">${product.new_price.toFixed(2)}</p>
                  <p className="old-price">${product.old_price.toFixed(2)}</p>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  className={`add-to-cart ${addedProduct === product.id ? 'added' : ''}`}
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProduct === product.id ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-image">
        <img src={hi111} alt="Featured Watch" />
      </section>

      <section className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="card-grid">
          {slicedProducts1.map((product) => (
            <div className="card" key={product.id}>
              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {product.name}
                </h3>
                <p className="product-price" style={{ fontSize: '1rem', color: '#333' }}>
                  From ${product.new_price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Find Your Perfect Watch?</h2>
        <p>Browse our entire collection and find the perfect timepiece for you.</p>
        <Link to="/mens" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
};

export default Home;
