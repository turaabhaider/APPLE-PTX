import React from 'react';
import '../styles/Ethics.css';
import ethicsPhoto from '../assets/ethics wali photo.avif';
import gotsLogo from '../assets/t-shirt.png';
import wrapLogo from '../assets/wrap.png';

export default function Ethics() {
  return (
    <section id="ethics" className="ethics-section">
      <div className="section-container">
        <div className="ethics-top-grid">

          {/* Left */}
          <div className="ethics-left">
            <span className="section-tag">OBJECTIVES AND PRACTICES</span>
            <h2 className="section-title">SUSTAINABILITY</h2>
            <p className="paragraph-body">
              Reuse, recycle, reborn — we create sustainable fabrics and solutions. We help partners achieve sustainability goals and protect our planet. We see ourselves as the extended arm, ear, and eye of our customer. We deliver our best efforts that all business objectives and practices are aligned to create a positive impact for your worldwide supply chain and the surrounding environment.
            </p>
          </div>

          {/* Right — Certifications */}
          <div className="ethics-right">
            <h4 className="certifications-title">TRUSTED CERTIFICATIONS THAT DEFINE OUR QUALITY & RESPONSIBILITY</h4>
            <div className="certifications-list">

              <div className="cert-item">
                <div className="cert-logo-wrapper">
                  <img src={gotsLogo} alt="GOTS Certified" className="cert-logo" />
                </div>
                <div className="cert-text">
                  <h5>GOTS Certified</h5>
                  <p>Global Organic Textile Standard</p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-logo-wrapper">
                  <img src={wrapLogo} alt="WRAP Certified" className="cert-logo" />
                </div>
                <div className="cert-text">
                  <h5>WRAP Certified</h5>
                  <p>Worldwide Responsible Accredited Production</p>
                </div>
              </div>

              <div className="cert-item cert-item-oeko">
                <div className="cert-logo-wrapper cert-oeko-badge">
                  <span className="oeko-text">OEKO</span>
                  <span className="oeko-dash">—</span>
                  <span className="oeko-tex">TEX®</span>
                </div>
                <div className="cert-text">
                  <h5>OEKO-TEX Standard</h5>
                  <p>Confidence in Textiles Certification</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Quote Banner */}
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