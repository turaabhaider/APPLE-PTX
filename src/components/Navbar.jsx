import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to toggle the background style dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    /* Dynamically adds 'navbar-scrolled' class when moving away from top */
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-logo">
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>PTX</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#ethics">ETHICS</a>
          <a href="#fabrics">FABRICS</a>
          {/* Changed target href to #contact to slide down to newsletter */}
         
        </div>

        {/* Desktop CTA Button */}
        <a href="#contact" className="nav-cta-btn">Get in Touch</a>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button 
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu Overlay */}
      <div className={`navbar-menu-mobile ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links-container">
          <a href="#home" onClick={handleLinkClick}>HOME</a>
          <a href="#about" onClick={handleLinkClick}>ABOUT</a>
          <a href="#services" onClick={handleLinkClick}>SERVICES</a>
          <a href="#ethics" onClick={handleLinkClick}>ETHICS</a>
          <a href="#fabrics" onClick={handleLinkClick}>FABRICS</a>
          {/* Changed target href to #contact for mobile view too */}
          
          <a href="#contact" className="mobile-cta-btn" onClick={handleLinkClick}>
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}