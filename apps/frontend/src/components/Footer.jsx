import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { path: "https://github.com/Pujan-sarkar/FARMLOC", icon: <AiFillGithub /> },
  { path: "", icon: <AiOutlineInstagram /> },
  { path: "https://www.linkedin.com/in/pujan-sarkar/", icon: <RiLinkedinFill /> },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks01 = [
    { path: "/home", display: t('footer.quickLinks.home') },
    { path: "/about", display: t('footer.quickLinks.about') },
    { path: "/cold-storage", display: t('footer.quickLinks.coldStorage') },
    { path: "/marketplace", display: t('footer.quickLinks.marketplace') },
  ];

  const quickLinks02 = [
    { path: "/shop", display: t('footer.explore.shop') },
    { path: "/locate", display: t('footer.explore.locate') },
    { path: "/blogs", display: t('footer.explore.blogs') },
    { path: "/faq", display: t('footer.explore.faq') },
  ];

  const quickLinks03 = [
    { path: "/contact", display: t('footer.support.contact') },
    { path: "/support", display: t('footer.support.supportFarmloc') },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <h1>FARMLOC</h1>
          </div>
          <p className="footer-description">
            {t('footer.copyright', { year })}
          </p>
          <div className="footer-socials">
            {socialLinks.map((link, index) => (
              <Link to={link.path} key={index} className="social-icon">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h2>{t('footer.headings.quickLinks')}</h2>
          <ul>
            {quickLinks01.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>{t('footer.headings.explore')}</h2>
          <ul>
            {quickLinks02.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>{t('footer.headings.support')}</h2>
          <ul>
            {quickLinks03.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;