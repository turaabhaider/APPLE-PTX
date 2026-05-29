import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-container footer-grid">
        
        {/* Left Column: Brand Statement */}
        <div className="footer-brand-column">
          <h2 className="footer-logo">PTX</h2>
          <p className="footer-description">
            Your trusted authentic low cost sourcing partner, always ready to create real benefits in your supply chain.
          </p>
        </div>

        {/* Center Column: Contact Matrix */}
        <div className="footer-info-column">
          <h3>WE ARE HERE</h3>
          <ul className="contact-list">
            <li>
              <span className="contact-icon">📍</span>
              Laguna Beach, CA 92651
            </li>
            <li>
              <span className="contact-icon">📞</span>
              1 (949) 283-9554
            </li>
            <li>
              <span className="contact-icon">🕒</span>
              Mon - Sat | 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        {/* Right Column: Live Connected Social Links */}
        <div className="footer-links-column">
          <h3>FOLLOW US</h3>
          <ul className="social-links-list">
            <li>
              <a 
                href="https://www.facebook.com/PakistanTextileExchange" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/theptxofficial/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/paktex-apparel/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="mailto:david@paktex.com" 
                className="social-link"
              >
                Email Support
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Sub-bar */}
      <div className="footer-bottom-bar">
        <div className="section-container bottom-bar-flex">
          <p className="copyright-text">© 2026 Copyright: Paktex.com</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}