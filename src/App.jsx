import React from 'react';
import './App.css'; // Explicitly loading the structural shell configuration

// Component Layer Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Ethics from './components/Ethics';
import Fabrics from './components/Fabrics';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
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