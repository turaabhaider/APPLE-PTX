import React, { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [showMobileNotice, setShowMobileNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // ON PHONES: Show the elegant fallback alert notice instantly
      setShowMobileNotice(true);
    } else {
      // ON COMPUTERS: Run your original working Gmail tab launch
      const targetEmail = "david@paktex.com";
      const subject = encodeURIComponent("PTX Newsletter Subscription Request");
      const body = encodeURIComponent(`Hello David,\n\nPlease add my email to the PTX newsletter updates mailing list:\n\nSubscriber Email: ${email}`);
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
      window.open(gmailComposeUrl, '_blank');
    }
    
    // Clear the input text field
    setEmail('');
  };

  return (
    <section id="contact" className="newsletter-section">
      <div className="newsletter-card">
        <h2 className="newsletter-title">NEWSLETTER</h2>
        <p className="newsletter-subtitle">To receive our updates via email</p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address here..." 
            className="newsletter-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (showMobileNotice) setShowMobileNotice(false); // Hide message if they start re-typing
            }}
            required
          />
          <button type="submit" className="newsletter-submit-btn">
            SUBMIT
          </button>
        </form>

        {/* Clean dynamic notification structure */}
        {showMobileNotice && (
          <div className="mobile-notice-box">
            <p>Please check our direct email address in the footer below to connect with us!</p>
          </div>
        )}
      </div>
    </section>
  );
}