import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to toggle background style dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">

        {/* Brand Logo */}
        <div className="nav-logo">
          <a href="#home">PTX</a>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#ethics">Ethics</a>
          <a href="#fabrics">Fabrics</a>
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta-btn">
          Get in Touch
        </a>

        {/* Hamburger (Mobile Only) */}
        <button
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </div>

      {/* Mobile Dropdown */}
      <div
        className={`navbar-menu-mobile ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-links-container">
          <a href="#home"     onClick={handleLinkClick}>Home</a>
          <a href="#about"    onClick={handleLinkClick}>About</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#ethics"   onClick={handleLinkClick}>Ethics</a>
          <a href="#fabrics"  onClick={handleLinkClick}>Fabrics</a>
          <a href="#contact" className="mobile-cta-btn" onClick={handleLinkClick}>
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}