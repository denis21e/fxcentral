
import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} FXcentral. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <Link to="/terms" className="footer-link">Terms of Use</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link> 
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

