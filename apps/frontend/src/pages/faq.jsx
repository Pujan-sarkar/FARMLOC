import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../index.css";
import faqImage from "../assets/images/faq.png"; // Replace with your actual path

const faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq.items.whatIsFarmloc.question'),
      answer: t('faq.items.whatIsFarmloc.answer'),
    },
    {
      question: t('faq.items.reduceSpoilage.question'),
      answer: t('faq.items.reduceSpoilage.answer'),
    },
    {
      question: t('faq.items.availability.question'),
      answer: t('faq.items.availability.answer'),
    },
    {
      question: t('faq.items.sustainability.question'),
      answer: t('faq.items.sustainability.answer'),
    },
    {
      question: t('faq.items.cooperatives.question'),
      answer: t('faq.items.cooperatives.answer'),
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-image">
        <img src={faqImage} alt={t('faq.imageAlt')} />
      </div>
      <div className="faq-content">
        <h2>{t('faq.heading')}</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;