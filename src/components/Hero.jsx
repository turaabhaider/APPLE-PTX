import React from 'react';
import '../styles/Hero.css';

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

      {/* ── Status pill ── */}
      <div className="hero-pill">
        <span className="hero-dot" />
        <span className="hero-pill-text">Premium Manufacturing Studio</span>
      </div>

      {/* ── Content row: copy left, visual block right ── */}
      <div className="hero-content-row">

        {/* Left: headline + sub + CTAs */}
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Professional Apparel<br />
            <span>Solutions.</span>
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

        {/* Right: decorative data-card visual */}
        <div className="hero-visual-block">
          <div className="hero-visual-chart">
            <div className="hero-chart-col" />
            <div className="hero-chart-col tall" />
            <div className="hero-chart-col mid" />
          </div>
          <div className="hero-visual-lines">
            <div className="hero-visual-line w80" />
            <div className="hero-visual-line w50" />
          </div>
        </div>

      </div>

      {/* ── Stats bar ── */}
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

    </header>
  );
}