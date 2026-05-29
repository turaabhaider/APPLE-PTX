import React from 'react';
import '../styles/Services.css';

// Importing all 4 assets matching your exact sidebar filenames
import researchDevImg from '../assets/research-development.webp';
import designSamplingImg from '../assets/design sampling.webp';
import productionImg from '../assets/production.webp';
import operationSupportImg from '../assets/operation-support.webp';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="services-header">
          <span className="section-tag">COMPLETE APPAREL SOLUTIONS FOR GLOBAL STANDARDS</span>
          <h2 className="section-title">THE FOUNDATION OF ANY COLLECTION</h2>
        </div>
        
        <div className="services-grid">
          {/* 01. Research & Development */}
          <div className="service-card">
            <div className="service-img-holder">
              <img src={researchDevImg} alt="Research & Development" />
            </div>
            <div className="service-info">
              <h3>RESEARCH & DEVELOPMENT</h3>
              <p>In-depth trend analysis, fabric sourcing, and market research to ensure your collection is built on strong insights. We focus on modern textiles and engineering.</p>
            </div>
          </div>

          {/* 02. Design & Sampling */}
          <div className="service-card">
            <div className="service-img-holder">
              <img src={designSamplingImg} alt="Design & Sampling" />
            </div>
            <div className="service-info">
              <h3>DESIGN & SAMPLING</h3>
              <p>From initial sketches to final samples, we transform creative ideas into high-quality garments. Our design team ensures attention to detail and fit perfection.</p>
            </div>
          </div>

          {/* 03. Production */}
          <div className="service-card">
            <div className="service-img-holder">
              <img src={productionImg} alt="Production" />
            </div>
            <div className="service-info">
              <h3>PRODUCTION</h3>
              <p>Advanced manufacturing processes combined with strict quality control ensure consistent output. We prioritize efficiency, safety, and modern execution techniques.</p>
            </div>
          </div>

          {/* 04. Operation Support */}
          <div className="service-card">
            <div className="service-img-holder">
              <img src={operationSupportImg} alt="Operation Support" />
            </div>
            <div className="service-info">
              <h3>OPERATION SUPPORT</h3>
              <p>Comprehensive operational support including logistics, compliance, and supply chain management. We streamline processes to minimize disruptions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}