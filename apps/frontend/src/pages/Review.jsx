import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../index.css";
import shreya from "../assets/images/review1.png";
import john from "../assets/images/review2.png";
import michael from "../assets/images/review3.png";
import aarti from "../assets/images/review4.png";
import ravi from "../assets/images/review5.png";

const FARMLocReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const { t } = useTranslation();

  const reviews = [
    {
      name: t('reviews.items.shreya.name'),
      image: shreya,
      stars: 5,
      text: t('reviews.items.shreya.text'),
    },
    {
      name: t('reviews.items.john.name'),
      image: john,
      stars: 5,
      text: t('reviews.items.john.text'),
    },
    {
      name: t('reviews.items.michael.name'),
      image: michael,
      stars: 5,
      text: t('reviews.items.michael.text'),
    },
    {
      name: t('reviews.items.aarti.name'),
      image: aarti,
      stars: 5,
      text: t('reviews.items.aarti.text'),
    },
    {
      name: t('reviews.items.ravi.name'),
      image: ravi,
      stars: 5,
      text: t('reviews.items.ravi.text'),
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleCardClick = (index) => {
    setHighlightedIndex(index);
  };

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);
  const slideStartIndex = currentSlide * cardsPerSlide;
  const visibleCards = reviews.slice(slideStartIndex, slideStartIndex + cardsPerSlide);

  return (
    <div id="review" className="review-section">
      <h2 className="review-heading">{t('reviews.heading')}</h2>
      <p className="review-subtext">
        {t('reviews.subtext')}
      </p>

      <div className="review-cards">
        {visibleCards.map((review, index) => {
          const globalIndex = slideStartIndex + index;
          return (
            <div
              key={globalIndex}
              className={`review-card ${
                highlightedIndex === globalIndex ? "highlighted" : ""
              }`}
              onClick={() => handleCardClick(globalIndex)}
            >
              <div className="reviewer">
                <img src={review.image} alt={review.name} />
                <div>
                  <h4>{review.name}</h4>
                  <div className="stars">{"★".repeat(review.stars)}</div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          );
        })}
      </div>

      <div className="slider-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FARMLocReviewSection;