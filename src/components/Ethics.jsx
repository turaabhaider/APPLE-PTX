import React from 'react';
import { Leaf, Shield, Globe } from 'lucide-react';
import '../styles/Ethics.css';
import ethicsPhoto from '../assets/ethics wali photo.avif';

export default function Ethics() {
  return (
    <section id="ethics" className="ethics-section">
      <div className="section-container">
        <div className="ethics-top-grid">
          <div className="ethics-left">
            <span className="section-tag">OBJECTIVES AND PRACTICES</span>
            <h2 className="section-title">SUSTAINABILITY</h2>
            <p className="paragraph-body">
              Reuse, recycle, reborn — we create sustainable fabrics and solutions. We help partners achieve sustainability goals and protect our planet. We see ourselves as the extended arm, ear, and eye of our customer. We deliver our best efforts that all business objectives and practices are aligned to create a positive impact for your worldwide supply chain and the surrounding environment.
            </p>
          </div>

          <div className="ethics-right">
            <h4 className="certifications-title">TRUSTED CERTIFICATIONS THAT DEFINE OUR QUALITY & RESPONSIBILITY</h4>
            <div className="certifications-list">
              <div className="cert-item">
                <div className="cert-icon-wrapper"><Leaf size={24} /></div>
                <div>
                  <h5>GOTS Certified</h5>
                  <p>Global Organic Textile Standard</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-wrapper"><Shield size={24} /></div>
                <div>
                  <h5>WRAP Certified</h5>
                  <p>Worldwide Responsible Accredited Production</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-wrapper"><Globe size={24} /></div>
                <div>
                  <h5>OEKO-TEX Standard</h5>
                  <p>Confidence in Textiles Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="quote-banner"
          style={{ backgroundImage: `url(${ethicsPhoto})` }}
        >
          <div className="quote-overlay"></div>
          <blockquote>
            "YOU CAN NOT MAKE A GOOD ECONOMICS OUT OF A BAD ETHICS"
            <cite>— Ezra Pound</cite>
          </blockquote>
        </div>

      </div>
    </section>
  );
}