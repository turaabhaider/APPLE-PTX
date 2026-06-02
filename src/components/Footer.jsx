import React, { useState } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className="footer-section">
      <div className="section-container footer-grid">

        {/* Brand */}
        <div className="footer-brand-column">
          <h2 className="footer-logo">PTX</h2>
          <p className="footer-description">
            Your trusted authentic low cost sourcing partner, always ready to create real benefits in your supply chain.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-info-column">
          <h3>WE ARE HERE</h3>
          <ul className="contact-list">
            <li><span className="contact-icon">📍</span>Laguna Beach, CA 92651</li>
            <li><span className="contact-icon">📞</span>1 (949) 283-9554</li>
            <li><span className="contact-icon">🕒</span>Mon – Sat | 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-links-column">
          <h3>FOLLOW US</h3>
          <ul className="social-links-list">
            <li><a href="https://www.facebook.com/PakistanTextileExchange" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a></li>
            <li><a href="https://www.instagram.com/theptxofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/paktex-apparel/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a></li>
            <li className="footer-email-item">
              <button 
                type="button" 
                onClick={() => setShowEmail(!showEmail)} 
                className={`social-link-btn ${showEmail ? 'active' : ''}`}
              >
                Email Support
              </button>
              {showEmail && (
                <div className="footer-email-badge">
                  david@paktex.com
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Copyright — full width row inside the same grid box */}
        <div className="footer-copyright-row">
          <p className="copyright-text">© 2026 Copyright: Paktex.com</p>
        </div>

      </div>
    </footer>
  );
}