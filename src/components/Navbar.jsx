import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="nav-logo">
          <a href="#home">PTX</a>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#ethics">Ethics</a>
          <a href="#fabrics">Fabrics</a>
        </div>

        <a href="#contact" className="nav-cta-btn">Get in Touch</a>

        <button
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* The Updated Mobile "Blackout" Drawer */}
      <div className={`navbar-menu-mobile ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links-container">
          {['Home', 'About', 'Services', 'Ethics', 'Fabrics'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={handleLinkClick}>
              {link}
            </a>
          ))}
          <a href="#contact" className="mobile-cta-btn" onClick={handleLinkClick}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}