import React from 'react';
import '../styles/Hero.css';
import heroBg from '../assets/hero.webp';

export default function Hero() {
  const startAutoScroll = (e) => {
    e.preventDefault();

    // Prevent multiple scroll loops from stacking if clicked again
    if (window.isAutoScrolling) return;
    window.isAutoScrolling = true;

    // Increased from 1.2 to 2.2 to make it slide down a bit faster
    const scrollSpeed = 2.2; 

    const scrollStep = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // If we haven't reached the bottom and auto-scroll flag is still true
      if (currentScroll < maxScroll && window.isAutoScrolling) {
        window.scrollTo(0, currentScroll + scrollSpeed);
        requestAnimationFrame(scrollStep);
      } else {
        window.isAutoScrolling = false;
      }
    };

    // Stop auto-scrolling instantly if the user interacts or scrolls manually
    const stopAutoScroll = () => {
      window.isAutoScrolling = false;
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('keydown', stopAutoScroll);
    };

    window.addEventListener('wheel', stopAutoScroll, { passive: true });
    window.addEventListener('touchmove', stopAutoScroll, { passive: true });
    window.addEventListener('keydown', stopAutoScroll, { passive: true });

    // Kick off the animation frame loop
    requestAnimationFrame(scrollStep);
  };

  return (
    <header id="home" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-bg-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">FROM CONCEPT TO DELIVERY</p>
        <h1 className="hero-title animate-fade-in">
          Professional Apparel<br />
          <span>Solutions</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-delayed">
          Delivering high-quality sourcing, manufacturing, and logistics services
          for global brands with a commitment to precision and compliance.
        </p>
        <div className="hero-actions animate-fade-in-delayed">
          <a href="#about" className="btn-hero-primary" onClick={startAutoScroll}>
            Explore Full Web
            <span className="btn-arrow">→</span>
          </a>
          <a href="#services" className="btn-hero-ghost">
            Our Services
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        <div className="hero-stat">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-number">200+</span>
          <span className="stat-label">Global Clients</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-number">50+</span>
          <span className="stat-label">Countries Served</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Compliance Rate</span>
        </div>
      </div>

    </header>
  );
}