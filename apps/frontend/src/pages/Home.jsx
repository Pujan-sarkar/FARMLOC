import React from "react";
import { useTranslation } from 'react-i18next';
import mainImage from "../assets/images/home1.png";
import sideImage1 from "../assets/images/home2.png";
import sideImage2 from "../assets/images/home3.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="hero-text">
          <h1>{t('home.title')}</h1>
          <p>
            {t('home.description')}
          </p>

          <button className="explore-btn">{t('home.exploreButton')}</button>

          <div className="stats">
            <div>
              <h2>150+</h2>
              <p>{t('home.stats.coldStorage')}</p>
            </div>
            <div>
              <h2>3000+</h2>
              <p>{t('home.stats.farmers')}</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>{t('home.stats.products')}</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="main-img">
            <img src={mainImage} alt={t('home.imageAlts.main')} />
          </div>
          <div className="side-images">
            <img src={sideImage1} alt={t('home.imageAlts.side1')} />
            <img src={sideImage2} alt={t('home.imageAlts.side2')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;