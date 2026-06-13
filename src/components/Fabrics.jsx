import React, { useState } from 'react';
import '../styles/Fabrics.css';

import knitImg from '../assets/knit.webp';
import wovenImg from '../assets/woven.webp';
import outerWearImg from '../assets/outer wear.webp';
import activeWearImg from '../assets/active wear.webp';
import denimImg from '../assets/denim.webp';
import accessoriesImg from '../assets/accessories.webp';

const tiles = [
  { id: 'knit',       img: knitImg,       label: 'KNIT',        alt: 'Knit Fabric' },
  { id: 'woven',      img: wovenImg,      label: 'WOVEN',       alt: 'Woven Fabric' },
  { id: 'outerwear',  img: outerWearImg,  label: 'OUTER WEAR',  alt: 'Outer Wear' },
  { id: 'activewear', img: activeWearImg, label: 'ACTIVE WEAR', alt: 'Active Wear' },
  { id: 'denim',      img: denimImg,      label: 'DENIM',       alt: 'Denim' },
];
export default function Fabrics() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="fabrics" className="fabrics-section">
      <div className="section-container">
        <div className="fabrics-header">
          <span className="section-tag">MATERIALS & PORTFOLIO</span>
          <h2 className="section-title">THE FABRIC SELECTION</h2>
        </div>

        <div className="fabrics-showcase-grid">
          {tiles.map(({ id, img, label, alt }) => (
            <div
              key={id}
              className={`fabric-tile ${activeId === id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveId(id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === id ? null : id)}
            >
              <img src={img} alt={alt} />
              <div className="fabric-tile-overlay">
                <h3>{label}</h3>
              </div>
            </div>
          ))}
          
          <div className="fabric-tile fabric-brand-tile">
            <img src={accessoriesImg} alt="PTX Accessories" />
            <div className="fabric-brand-overlay">
              <div className="fabric-brand-content">
                <span className="brand-label">ACCESSORIES</span>
                <h2>PTX</h2>
                <p>Curated premium hardware, trim solutions, and custom branding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}