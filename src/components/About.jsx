import React from 'react';
import '../styles/About.css';
import sewingMachineImg from '../assets/sewing-machine.webp';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-text-wrapper">
            <span className="section-tag">FROM CONCEPT TO DELIVERY</span>
            <h2 className="section-title">YOUR GLOBAL APPAREL PARTNER</h2>
            <p className="paragraph-lead">
              Manufacturing, sourcing, and quality assurance powered by our advanced custom PLM system. We deliver end-to-end apparel solutions with precision and consistency, ensuring every product meets global standards.
            </p>
            <p className="paragraph-body">
              From concept development to final production, our integrated workflow guarantees transparency, speed, and seamless collaboration at every stage. We specialize in high-quality knits, premium denim, durable outerwear, and performance-driven activewear, offering complete material sourcing, mill management, product engineering, and compliance oversight. With robust quality checkpoints and real-time production tracking, we help brands reduce lead times, optimize costs, and achieve unmatched reliability across their supply chain.
            </p>
          </div>
          <div className="about-image-wrapper">
            <div className="luxury-image-card">
              <img src={sewingMachineImg} alt="Advanced Apparel Manufacturing Facility" />
            </div>
          </div>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <h3>Flexible Business Models</h3>
            <p>Designed to support short lead times, optimized costs, and scalable production volumes.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <h3>Sustainable Product Solutions</h3>
            <p>Focused on eco-friendly materials, responsible sourcing, and long-term environmental impact.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <h3>Strong Global Sourcing</h3>
            <p>Network across low-cost and duty-free regions to ensure efficiency and reliability.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-num">04</div>
            <h3>Competitive Pricing</h3>
            <p>Strategies combined with high-quality service to deliver maximum value across the entire supply chain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}