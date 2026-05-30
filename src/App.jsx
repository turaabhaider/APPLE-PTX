import React from 'react';
import './App.css';

import useReveal from './components/useReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Ethics from './components/Ethics';
import Fabrics from './components/Fabrics';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ethics />
      <Fabrics />
      <Newsletter />
      <Footer />
    </div>
  );
}