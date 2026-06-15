import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import sewingMachineImg from '../assets/sewing-machine.webp';

export default function About() {
  const imageColRef = useRef(null);
  const textColRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (imageColRef.current) observer.observe(imageColRef.current);
    if (textColRef.current)  observer.observe(textColRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      num: '01',
      title: 'Flexible Business Models',
      text: 'Scalable production with adaptive timelines tailored to your growth.',
    },
    {
      num: '02',
      title: 'Sustainable Solutions',
      text: 'Eco-conscious materials and responsible manufacturing processes.',
    },
    {
      num: '03',
      title: 'Global Sourcing Network',
      text: 'Direct access to premium raw material suppliers worldwide.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-split-grid">

        {/* ── Left column — Image ── */}
        <div className="about-image-col" ref={imageColRef}>
          <img
            src={sewingMachineImg}
            alt="Precision sewing machinery on the production floor"
            className="about-main-image"
          />
          <div className="about-image-overlay" />

          {/* Year badge */}
          <div className="about-year-badge">
            <span className="about-year-num">25+</span>
            <span className="about-year-label">Years of craft</span>
          </div>

          {/* Bottom caption */}
          <div className="about-image-caption">
            <span className="about-image-caption-line" />
            <span className="about-image-caption-text">
              Pakistan Textile Exchange<br />Manufacturing Excellence
            </span>
          </div>
        </div>

        {/* ── Right column — Content ── */}
        <div className="about-text-col" ref={textColRef}>
          <div className="about-content-inner">

            {/* Tag */}
            <span className="section-tag">From Concept to Delivery</span>

            {/* Title */}
            <h2 className="section-title">
              Your Global{' '}
              <span className="title-accent">Apparel</span>{' '}
              Partner
            </h2>

            {/* Lead paragraph */}
            <p className="paragraph-lead">
              Manufacturing, sourcing, and quality assurance powered by our advanced 
              custom PLM system. We deliver end-to-end apparel solutions with precision 
              and consistency.
            </p>

            {/* Body paragraph */}
            <p className="paragraph-body">
              From concept development to final production, our integrated workflow 
              guarantees transparency, speed, and seamless collaboration at every stage. 
              We specialize in high-quality knits, premium denim, and durable outerwear, 
              ensuring every product meets global standards.
            </p>

            {/* Feature boxes */}
            <div className="about-boxes-stack">
              {features.map((box, i) => (
                <div key={i} className="feature-box">
                  <span className="box-num">{box.num}</span>
                  <div className="feature-box-body">
                    <h3>{box.title}</h3>
                    <p>{box.text}</p>
                  </div>
                  <span className="feature-box-arrow" aria-hidden="true">→</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}