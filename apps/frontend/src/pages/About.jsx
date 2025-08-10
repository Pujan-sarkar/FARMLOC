/// src/pages/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImg from '../assets/images/about1.png';
import aboutCardImg from "../assets/images/about2..png";
import { Link } from 'react-router-dom';
import '../index.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">

                    {/* About Images */}
                    <div className="about-images">
                        <img src={aboutImg} alt={t('about.imageAlts.main')} className="main-about-img" />
                        <div className="card-img-container">
                            <img src={aboutCardImg} alt={t('about.imageAlts.card')} className="about-card-img" />
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="about-text">
                        <h2>{t('about.title')}</h2>
                        <p>
                            {t('about.paragraph1')}
                        </p>
                        <p>
                            {t('about.paragraph2')}
                        </p>
                        <Link to="/learn-more">
                            <button className="about-btn">{t('about.learnMoreButton')}</button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;