import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", section: "home", display: t('navbar.home') },
    { path: "/", section: "about", display: t('navbar.about') },
    { path: "/", section: "cold-storage", display: t('navbar.coldStorage') },
    { path: "/", section: "market", display: t('navbar.marketplace') },
    { path: "/", section: "review", display: t('navbar.reviews') },
    { path: "/", section: "contact", display: t('navbar.contact') },
  ];


  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  const handleNavClick = (path, section) => {
    toggleMenu();
    if (window.location.pathname !== path) {
      navigate(path);
    }

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <FaLeaf className="leaf-icon" style={{ marginRight: "8px", color: "#4CAF50" }} />
          <span>FARMLOC</span>
        </div>

        <nav ref={menuRef} className="nav-menu">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.path, link.section)}
              className="nav-link"
            >
              {link.display}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-selector-container" style={{ marginRight: '10px' }}>
            <LanguageSelector />
          </div>
          <Link to="/login" className="login-btn">{t('navbar.login')}</Link>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </button>
          <span onClick={toggleMenu} className="menu-icon">
            <BiMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;