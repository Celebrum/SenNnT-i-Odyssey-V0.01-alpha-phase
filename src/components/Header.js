import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="SenNnT-i Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tool1">The Spark of Connection</a></li>
          <li><a href="#tool2">Curiosity Ignited</a></li>
          <li><a href="#tool3">Navigating the Seas of Self-Discovery</a></li>
          <li><a href="#tool4">Building Bridges to the Future</a></li>
          <li><a href="#tool5">Launching into the World</a></li>
          <li><a href="#tool6">The Gift of Companionship</a></li>
          <li><a href="#tool7">Nurturing Emotional Intelligence</a></li>
          <li><a href="#tool8">Fostering Creativity and Imagination</a></li>
          <li><a href="#tool9">Cultivating a Lifelong Love of Learning</a></li>
          <li><a href="#tool10">Building a Brighter Future Together</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
