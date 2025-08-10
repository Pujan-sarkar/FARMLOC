import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

// Importing service images
import storageImg from '../assets/images/storage.png';
import marketImg from '../assets/images/market.svg';
import supportImg from '../assets/images/support.png';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.coldStorage.title'),
      description: t('services.items.coldStorage.description'),
      image: storageImg,
    },
    {
      title: t('services.items.marketplace.title'),
      description: t('services.items.marketplace.description'),
      image: marketImg,
    },
    {
      title: t('services.items.support.title'),
      description: t('services.items.support.description'),
      image: supportImg,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-heading">{t('services.heading')}</h1>
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