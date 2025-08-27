import React from 'react';
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
  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="card-border">
                    <img src={service.image} alt={service.title} className="service-img" />
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="service-desc">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
