import React from 'react';
import '../styles/Hero.css';
import heroBg from '../assets/hero.webp';

export default function Hero() {
  return (
    <header id="home" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">
          PROFESSIONAL APPAREL <br /><span>SOLUTIONS</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-delayed">
          Delivering high-quality sourcing, manufacturing, and logistics services for global brands with a commitment to precision and compliance.
        </p>
        <div className="hero-actions animate-fade-in-delayed">
          <a href="#about" className="btn-primary">Explore Corporate Profile</a>
        </div>
      </div>
      <div className="hero-scroll-indicator"></div>
    </header>
  );
}