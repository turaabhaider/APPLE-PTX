import React from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/accessories.webp';

export default function Hero() {
  const startAutoScroll = (e) => {
    e.preventDefault();
    if (window.isAutoScrolling) return;
    window.isAutoScrolling = true;
    const scrollSpeed = 2.2;
    const scrollStep = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (currentScroll < maxScroll && window.isAutoScrolling) {
        window.scrollTo(0, currentScroll + scrollSpeed);
        requestAnimationFrame(scrollStep);
      } else {
        window.isAutoScrolling = false;
      }
    };
    const stopAutoScroll = () => {
      window.isAutoScrolling = false;
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('keydown', stopAutoScroll);
    };
    window.addEventListener('wheel', stopAutoScroll, { passive: true });
    window.addEventListener('touchmove', stopAutoScroll, { passive: true });
    window.addEventListener('keydown', stopAutoScroll, { passive: true });
    requestAnimationFrame(scrollStep);
  };

  return (
    <header id="home" className="hero-section">
      {/* ── Left panel ── */}
      <div className="hero-left-panel">
        <div className="hero-pill">
          <span className="hero-dot" />
          <span className="hero-pill-text">Premium Manufacturing Studio</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            <span className="word">Professional</span>{' '}
            <span className="word">Apparel</span>
            <span className="title-line-italic">
              <span className="word">Solutions.</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Delivering high-quality sourcing, manufacturing, and logistics services
            for global brands with a commitment to precision and compliance.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-hero-primary" onClick={startAutoScroll}>
              Explore Full Web
              <span className="btn-arrow">→</span>
            </a>
            <a href="#services" className="btn-hero-ghost">
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="hero-stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Global Clients</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Compliance Rate</span>
          </div>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="hero-right-panel">
        <div className="hero-thread-lines" aria-hidden="true" />
        <div className="hero-scan-line" aria-hidden="true" />

        {/* Updated Image Implementation */}
        <img
          src={heroImg}
          alt="Premium industrial fabric production facility"
          className="hero-bg-image"
        />

        <div className="hero-image-overlay" />

     

        <div className="hero-corner-tl" aria-hidden="true" />
        <div className="hero-corner-br" aria-hidden="true" />
        <div className="hero-image-accent-bar" aria-hidden="true" />

        <div className="hero-image-card">
          <span className="hero-image-card-eyebrow">End-to-End Production</span>
          <p className="hero-image-card-text">
            From concept to delivery — every step managed with care, consistency,
            and accountability.
          </p>
        </div>
      </div>
    </header>
  );
}