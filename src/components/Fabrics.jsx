import React from 'react';
import '../styles/Fabrics.css';

// Local asset imports matching your sidebar perfectly
import knitImg from '../assets/knit.webp';
import wovenImg from '../assets/woven.webp';
import outerWearImg from '../assets/outer wear.webp';
import activeWearImg from '../assets/active wear.webp';
import denimImg from '../assets/denim.webp';
import accessoriesImg from '../assets/accessories.webp'; // Newly integrated image asset

export default function Fabrics() {
  return (
    <section id="fabrics" className="fabrics-section">
      <div className="section-container">
        
        {/* Header Block mapping to your CSS configuration */}
        <div className="fabrics-header">
          <span className="section-tag">MATERIALS & PORTFOLIO</span>
          <h2 className="section-title">THE FABRICS PACKAGING</h2>
        </div>

        {/* Dynamic Display Showcase Layout */}
        <div className="fabrics-showcase-grid">
          
          {/* Tile 01: Knit */}
          <div className="fabric-tile">
            <img src={knitImg} alt="Knit Fabric Asset" />
            <div className="fabric-tile-overlay">
              <h3>KNIT</h3>
            </div>
          </div>

          {/* Tile 02: Woven */}
          <div className="fabric-tile">
            <img src={wovenImg} alt="Woven Fabric Asset" />
            <div className="fabric-tile-overlay">
              <h3>WOVEN</h3>
            </div>
          </div>

          {/* Tile 03: Outer Wear */}
          <div className="fabric-tile">
            <img src={outerWearImg} alt="Outer Wear Asset" />
            <div className="fabric-tile-overlay">
              <h3>OUTER WEAR</h3>
            </div>
          </div>

          {/* Tile 04: Active Wear */}
          <div className="fabric-tile">
            <img src={activeWearImg} alt="Active Wear Asset" />
            <div className="fabric-tile-overlay">
              <h3>ACTIVE WEAR</h3>
            </div>
          </div>

          {/* Tile 05: Denim */}
          <div className="fabric-tile">
            <img src={denimImg} alt="Denim Asset" />
            <div className="fabric-tile-overlay">
              <h3>DENIM</h3>
            </div>
          </div>

          {/* Tile 06: Accessories Corporate Image + Info Tile */}
          <div className="fabric-tile fabric-brand-tile">
            <img src={accessoriesImg} alt="PTX Accessories Brand Asset" />
            <div className="fabric-brand-overlay">
              <div className="fabric-brand-content">
                <span className="brand-label">ACCESSORIES</span>
                <h2>PTX</h2>
                <p>Curated premium hardware, trim solutions, and custom branded branding details.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}