import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

// Importing service images
import storageImg from '../assets/images/storage.png';
import marketImg from '../assets/images/market.svg';
import supportImg from '../assets/images/support.png';

const services = [
  {
    title: "Nearby Cold Storage",
    description: "Locate the closest cold storage to keep your harvest fresh and reduce wastage.",
    image: storageImg,
  },
  {
    title: "Grocery Marketplace",
    description: "Sell or buy farm-fresh groceries directly from local farmers and vendors.",
    image: marketImg,
  },
  {
    title: "Farmer Support",
    description: "Access expert advice, weather updates, and government schemes to boost productivity.",
    image: supportImg,
  },
];

const Services = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section className="services-section">
      <button 
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-img" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
