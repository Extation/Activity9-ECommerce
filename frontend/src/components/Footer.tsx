import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-brand">ShopHub</h3>
          <p className="footer-description">
            Your trusted e-commerce platform for quality products at competitive prices. 
            Shop with confidence and enjoy a seamless shopping experience.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <FaEnvelope className="contact-icon" />
              <span>support@shophub.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Commerce St, City, State 12345</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ShopHub. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#terms">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
