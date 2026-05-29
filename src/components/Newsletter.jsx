import React, { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    const targetEmail = "david@paktex.com";
    const subject = encodeURIComponent("PTX Newsletter Subscription Request");
    const body = encodeURIComponent(`Hello David,\n\nPlease add my email to the PTX newsletter updates mailing list:\n\nSubscriber Email: ${email}`);
    
    // Direct web-link to Gmail compose window targeting david@paktex.com
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    
    // Opens up Gmail cleanly in a new tab with all data pre-filled
    window.open(gmailComposeUrl, '_blank');
    
    // Optional: Clear the input field after redirecting
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}