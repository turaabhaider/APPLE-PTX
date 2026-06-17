import React, { useState, useRef, useEffect } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const timerRef = useRef(null);

  const handleEmailToggle = () => {
    // Clear any active timer before setting a new one
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (showEmail) {
      // If manually clicked while open, close it instantly
      setShowEmail(false);
    } else {
      // Show the email badge and start a clean 3-second countdown
      setShowEmail(true);
      timerRef.current = setTimeout(() => {
        setShowEmail(false);
      }, 3000); // Adjusted to 3 seconds
    }
  };

  // Cleanup the timer if the component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
        <li>
          <a href="https://www.facebook.com/PakistanTextileExchange" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/theptxofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/paktex-apparel/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </li>
        <li className="footer-email-item">
          <button 
            type="button" 
            onClick={handleEmailToggle} 
            className={`social-link-btn ${showEmail ? 'active' : ''}`}
            aria-label="Email Support"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
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