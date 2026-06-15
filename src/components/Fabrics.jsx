import React, { useEffect, useRef, useState } from 'react';
import '../styles/Fabrics.css';

import knitImg from '../assets/knit.webp';
import wovenImg from '../assets/woven.webp';
import outerWearImg from '../assets/outer wear.webp';
import activeWearImg from '../assets/active wear.webp';
import denimImg from '../assets/denim.webp';
import accessoriesImg from '../assets/accessories.webp';

const tiles = [
  { id: 'knit',       img: knitImg,       label: 'KNIT',        alt: 'Knit Fabric',       desc: 'Engineered for stretch, recovery, and breathability.' },
  { id: 'woven',      img: wovenImg,      label: 'WOVEN',       alt: 'Woven Fabric',      desc: 'Structured, durable, and timelessly crafted.' },
  { id: 'outerwear',  img: outerWearImg,  label: 'OUTER WEAR',  alt: 'Outer Wear',        desc: 'Weather-resistant protective layers.' },
  { id: 'activewear', img: activeWearImg, label: 'ACTIVE WEAR', alt: 'Active Wear',       desc: 'High-performance technical fabrics.' },
  { id: 'denim',      img: denimImg,      label: 'DENIM',       alt: 'Denim',             desc: 'Premium indigo and authentic twills.' },
];

export default function Fabrics() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tileRefs = useRef([]);
  const [activeId, setActiveId] = useState(null);

  /* Scroll-triggered reveals only */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) io.observe(headerRef.current);
    tileRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section id="fabrics" className="fabrics-section" ref={sectionRef}>
      <div className="section-container">
        
        {/* ── Header ── */}
        <header className="fabrics-header" ref={headerRef}>
          <div className="header-left">
            <span className="section-tag">MATERIALS & PORTFOLIO</span>
            <h2 className="section-title">
              THE FABRIC <span className="title-light">SELECTION</span>
            </h2>
          </div>
        </header>

        {/* ── Clean Editorial Grid ── */}
        <div className="fabrics-showcase-grid">
          {tiles.map(({ id, img, label, alt, desc }, i) => (
            <article
              key={id}
              ref={(el) => (tileRefs.current[i] = el)}
              className={`fabric-tile tile-${id}`}
              onMouseEnter={() => setActiveId(id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="fabric-image-wrapper">
                {/* No filters - natural colors only */}
                <img src={img} alt={alt} loading="lazy" />
                <div className="fabric-overlay-gradient"></div>
              </div>

              <div className="fabric-content">
                <span className="fabric-index">0{i + 1}</span>
                <h3>{label}</h3>
                <p className={`fabric-desc ${activeId === id ? 'is-active' : ''}`}>{desc}</p>
              </div>
            </article>
          ))}

          {/* ── PTX Brand Tile ── */}
          <article 
            className="fabric-tile fabric-brand-tile"
            ref={(el) => (tileRefs.current[tiles.length] = el)}
          >
            <div className="fabric-image-wrapper">
              <img src={accessoriesImg} alt="PTX Accessories" loading="lazy" />
              <div className="fabric-overlay-gradient brand-gradient"></div>
            </div>
            
            <div className="fabric-brand-content">
              <span className="brand-label">FINISHING TOUCHES</span>
              <h2>ACCESSORIES <span className="brand-mark">PTX</span></h2>
              <p>Curated premium hardware, trim solutions, and custom branding designed to elevate your final garment.</p>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}