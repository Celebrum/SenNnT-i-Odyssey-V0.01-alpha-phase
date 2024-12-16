import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#tool1">The Spark of Connection</a>
          <a href="#tool2">Curiosity Ignited</a>
          <a href="#tool3">Navigating the Seas of Self-Discovery</a>
          <a href="#tool4">Building Bridges to the Future</a>
          <a href="#tool5">Launching into the World</a>
          <a href="#tool6">The Gift of Companionship</a>
          <a href="#tool7">Nurturing Emotional Intelligence</a>
          <a href="#tool8">Fostering Creativity and Imagination</a>
          <a href="#tool9">Cultivating a Lifelong Love of Learning</a>
          <a href="#tool10">Building a Brighter Future Together</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SenNnT-i. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
