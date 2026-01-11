import React from 'react';
import './LandingPage.css';
import { FaShoppingCart, FaBox, FaShieldAlt, FaTruck, FaCreditCard, FaHeadset } from 'react-icons/fa';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="brand-name">ShopHub</span>
            </h1>
            <p className="hero-subtitle">
              Your one-stop destination for quality products at unbeatable prices
            </p>
            <p className="hero-description">
              Discover thousands of products across multiple categories. Shop with confidence 
              and enjoy fast, secure checkout with our modern e-commerce platform.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onGetStarted}>
                <FaShoppingCart /> Start Shopping
              </button>
              <button className="btn-secondary" onClick={onGetStarted}>
                <FaBox /> Browse Products
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <FaShoppingCart className="card-icon" />
              <span>Easy Shopping</span>
            </div>
            <div className="floating-card card-2">
              <FaTruck className="card-icon" />
              <span>Fast Delivery</span>
            </div>
            <div className="floating-card card-3">
              <FaShieldAlt className="card-icon" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose ShopHub?</h2>
          <p>Experience the best online shopping with our premium features</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaBox />
            </div>
            <h3>Wide Selection</h3>
            <p>Browse through thousands of products across multiple categories including electronics, accessories, and home goods.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Secure Shopping</h3>
            <p>Shop with confidence knowing your data is protected with industry-standard security measures.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaTruck />
            </div>
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly with our reliable shipping partners and real-time tracking.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaCreditCard />
            </div>
            <h3>Easy Checkout</h3>
            <p>Streamlined checkout process with multiple payment options for your convenience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaHeadset />
            </div>
            <h3>24/7 Support</h3>
            <p>Our dedicated customer support team is always ready to help you with any questions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaShoppingCart />
            </div>
            <h3>Smart Cart</h3>
            <p>Manage your shopping cart easily with real-time stock updates and price calculations.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Find exactly what you're looking for</p>
        </div>
        <div className="categories-grid">
          <div className="category-card" onClick={onGetStarted}>
            <div className="category-icon electronics">
              <FaBox />
            </div>
            <h3>Electronics</h3>
            <p>Latest gadgets and tech</p>
          </div>
          <div className="category-card" onClick={onGetStarted}>
            <div className="category-icon accessories">
              <FaBox />
            </div>
            <h3>Accessories</h3>
            <p>Essential add-ons</p>
          </div>
          <div className="category-card" onClick={onGetStarted}>
            <div className="category-icon home">
              <FaBox />
            </div>
            <h3>Home & Living</h3>
            <p>Comfort for your space</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Products Available</p>
          </div>
          <div className="stat-card">
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Secure Payments</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of satisfied customers and discover amazing deals today!</p>
          <button className="btn-cta" onClick={onGetStarted}>
            <FaShoppingCart /> Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
