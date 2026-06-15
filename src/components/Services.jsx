import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Services.css';

import researchDevImg    from '../assets/research-development.webp';
import designSamplingImg from '../assets/design sampling.webp';
import productionImg     from '../assets/production.webp';
import operationSupportImg from '../assets/operation-support.webp';

/* ── Service data — same content, same images ── */
const SERVICES = [
  {
    step: '01',
    title: 'Research & Development',
    desc:  'In-depth trend analysis, fabric sourcing, and market research to ensure your collection is built on strong insights. We focus on modern textiles and engineering.',
    tags:  ['Trend Analysis', 'Fabric Sourcing', 'Market Research'],
    img:   researchDevImg,
    alt:   'Research & Development',
  },
  {
    step: '02',
    title: 'Design & Sampling',
    desc:  'From initial sketches to final samples, we transform creative ideas into high-quality garments. Our design team ensures attention to detail and fit perfection.',
    tags:  ['Concept Sketching', 'Fit Perfection', 'Proto Sampling'],
    img:   designSamplingImg,
    alt:   'Design & Sampling',
  },
  {
    step: '03',
    title: 'Production',
    desc:  'Advanced manufacturing processes combined with strict quality control ensure consistent output. We prioritize efficiency, safety, and modern execution techniques.',
    tags:  ['Quality Control', 'Efficiency', 'Modern Execution'],
    img:   productionImg,
    alt:   'Production',
  },
  {
    step: '04',
    title: 'Operation Support',
    desc:  'Comprehensive operational support including logistics, compliance, and supply chain management. We streamline processes to minimize disruptions.',
    tags:  ['Logistics', 'Compliance', 'Supply Chain'],
    img:   operationSupportImg,
    alt:   'Operation Support',
  },
];

/* ── Individual service panel ── */
function ServicePanel({ service, index, panelRef }) {
  const contentRef = useRef(null);

  /* Spotlight mouse-follow on the text column */
  const handleMouseMove = useCallback((e) => {
    const el = contentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    el.style.setProperty('--spot-x', `${x}%`);
    el.style.setProperty('--spot-y', `${y}%`);
  }, []);

  return (
    <article
      className="service-panel"
      ref={panelRef}
      data-index={index}
    >
      {/* Corner accents */}
      <div className="service-panel-corner service-panel-corner--tl" aria-hidden="true" />
      <div className="service-panel-corner service-panel-corner--br" aria-hidden="true" />

      {/* Image column */}
      <div className="service-panel-image">
        <img src={service.img} alt={service.alt} loading="lazy" />
        <div className="service-panel-image-overlay" aria-hidden="true" />
        <span className="service-panel-image-num" aria-hidden="true">{service.step}</span>
      </div>

      {/* Text column */}
      <div
        className="service-panel-content"
        ref={contentRef}
        onMouseMove={handleMouseMove}
        data-step={service.step}
      >
        <div className="service-panel-content-inner">

          {/* Step label */}
          <div className="service-step-label">
            <span className="step-num">{service.step}</span>
            Step {service.step} of {SERVICES.length}
          </div>

          {/* Title */}
          <h3 className="service-panel-title">{service.title}</h3>

          {/* Tags */}
          <div className="service-panel-tags" aria-label="Related topics">
            {service.tags.map((tag, i) => (
              <span key={i} className="service-tag-pill">{tag}</span>
            ))}
          </div>

          {/* Description */}
          <p className="service-panel-desc">{service.desc}</p>

          {/* CTA hint */}
          <span className="service-panel-cta" aria-hidden="true">
            <span className="service-panel-cta-line" />
             Service
            <span className="service-panel-cta-arrow">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════ */
export default function Services() {
  const sectionRef    = useRef(null);
  const headerRef     = useRef(null);
  const panelRefs     = useRef([]);
  const railFillRef   = useRef(null);
  const railDotRef    = useRef(null);
  const footerRef     = useRef(null);
  const trackerRef    = useRef(null);

  const [activePanel, setActivePanel] = useState(-1);

  /* ── Scroll-driven rail & tracker ── */
  useEffect(() => {
    const section  = sectionRef.current;
    const railFill = railFillRef.current;
    const railDot  = railDotRef.current;
    const tracker  = trackerRef.current;
    if (!section || !railFill || !railDot) return;

    const onScroll = () => {
      const rect   = section.getBoundingClientRect();
      const total  = section.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct    = Math.min(100, (scrolled / total) * 100);

      railFill.style.height = `${pct}%`;
      railDot.style.top     = `${pct}%`;

      /* Show tracker only while section is in view */
      if (tracker) {
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        tracker.classList.toggle('is-active', inView);
      }

      /* Determine which panel is "current" */
      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        const pr = el.getBoundingClientRect();
        const midpoint = window.innerHeight / 2;
        if (pr.top <= midpoint && pr.bottom >= midpoint) {
          setActivePanel(i);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver for reveal ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    /* Header */
    if (headerRef.current) {
      io.observe(headerRef.current);
      /* Trigger the section-level class for CSS transitions on tag/title */
      const headerObs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) sectionRef.current?.classList.add('is-header-visible'); },
        { threshold: 0.2 }
      );
      headerObs.observe(headerRef.current);
    }

    /* Panels */
    panelRefs.current.forEach((el) => { if (el) io.observe(el); });

    /* Footer */
    if (footerRef.current) {
      const footerObs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) footerRef.current.classList.add('is-visible'); },
        { threshold: 0.3 }
      );
      footerObs.observe(footerRef.current);
    }

    return () => io.disconnect();
  }, []);

  /* ── Rail marker positions (evenly spaced) ── */
  const markerPositions = SERVICES.map((_, i) =>
    Math.round(((i + 0.5) / SERVICES.length) * 100)
  );

  return (
    <section id="services" className="services-section" ref={sectionRef}>

      {/* ── Vertical process rail ── */}
      <div className="services-rail" aria-hidden="true">
        <div className="services-rail-fill" ref={railFillRef} />
        <div className="services-rail-dot"  ref={railDotRef}  />
        {markerPositions.map((pos, i) => (
          <div
            key={i}
            className={`services-rail-marker ${i <= activePanel ? 'is-passed' : ''}`}
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* ── Fixed side step tracker ── */}
      <div className="services-step-tracker" ref={trackerRef} aria-hidden="true">
        {SERVICES.map((_, i) => (
          <div
            key={i}
            className={`tracker-dot ${
              i === activePanel ? 'is-current' : i < activePanel ? 'is-done' : ''
            }`}
          />
        ))}
      </div>

      <div className="section-container">
        <div className="services-inner">

          {/* ── Section header ── */}
          <header className="services-header" ref={headerRef}>
            <div className="services-header-left">
              <span className="services-section-tag">
                Complete Apparel Solutions for Global Standards
              </span>
              <h2 className="services-section-title">
                The Foundation of{' '}
                <span className="title-light">Any Collection</span>
              </h2>
            </div>
            <div className="services-header-right" aria-label="4 services total">
              <span className="services-count-num">04</span>
              <span className="services-count-label">Core Services</span>
            </div>
          </header>

          {/* ── Service panels ── */}
          <div className="services-panels">
            {SERVICES.map((service, i) => (
              <ServicePanel
                key={service.step}
                service={service}
                index={i}
                panelRef={(el) => (panelRefs.current[i] = el)}
              />
            ))}
          </div>

          {/* ── Section footer ── */}
          <footer className="services-footer" ref={footerRef}>
            <p className="services-footer-text">
              Every service is part of a <strong>single integrated workflow</strong> — from
              the first trend brief to the final shipped carton, managed under one roof.
            </p>
            <a href="#contact" className="services-footer-btn">
              Start a Project
              <span className="services-footer-btn-arrow">→</span>
            </a>
          </footer>

        </div>
      </div>
    </section>
  );
}