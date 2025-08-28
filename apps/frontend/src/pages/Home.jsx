
// src/pages/Home.jsx
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import mainImage from "../assets/images/home1.png";
import sideImage1 from "../assets/images/home2.png";
import sideImage2 from "../assets/images/home3.png";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Theme Toggle Button */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10
        }}>
          <button
            onClick={toggleTheme}
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '2px solid #2c5530',
              backgroundColor: 'transparent',
              color: '#2c5530',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === "light" ? <BiMoon size={20} /> : <BiSun size={20} />}
          </button>
        </div>
        
        <div className="hero-text">
          <h1>Connecting Cold Storages.<br /> Empowering Farmers. 🌾 🧊</h1>
          <p>
            FARMLOC bridges the gap between rural producers and cold storage facilities. 
            Shop fresh groceries and support local farming.
          </p>

          <button className="explore-btn">Explore More</button>

          <div className="stats">
            <div>
              <h2>150+</h2>
              <p>Cold Storage Units</p>
            </div>
            <div>
              <h2>3000+</h2>
              <p>Farmers Connected</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Marketplace Products</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="main-img">
            <img src={mainImage} alt="Main" />
          </div>
          <div className="side-images">
            <img src={sideImage1} alt="Side 1" />
            <img src={sideImage2} alt="Side 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
