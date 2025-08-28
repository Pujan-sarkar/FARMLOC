import React from 'react';
import {
  FaCloudRain,
  FaBullhorn,
  FaBoxOpen,
  FaShoppingCart,
  FaTools,
  FaLeaf,
  FaTruck,
  FaUserShield,
  FaMoneyBillWave,
  FaChartLine
} from 'react-icons/fa';

const announcements = [
  <>
    <FaCloudRain style={{ verticalAlign: 'middle', marginRight: 6, color: '#4A90E2' }} />
    Weather Alert: Heavy rains expected tomorrow in North region.
  </>,
  <>
    <FaBullhorn style={{ verticalAlign: 'middle', marginRight: 6, color: '#F5A623' }} />
    New Govt Scheme: PM-Kisan application window is open.
  </>,
  <>
    <FaBoxOpen style={{ verticalAlign: 'middle', marginRight: 6, color: '#7ED321' }} />
    Storage Update: Cold storage available in Lucknow.
  </>,
  <>
    <FaShoppingCart style={{ verticalAlign: 'middle', marginRight: 6, color: '#D0021B' }} />
    New Listings: 3 new organic rice sellers added.
  </>,
  <>
    <FaTools style={{ verticalAlign: 'middle', marginRight: 6, color: '#BD10E0' }} />
    Platform Update: Search filter optimized for better results.
  </>,
  <>
    <FaLeaf style={{ verticalAlign: 'middle', marginRight: 6, color: '#28A745' }} />
    Agriculture News: Organic farming workshops scheduled next week.
  </>,
  <>
    <FaTruck style={{ verticalAlign: 'middle', marginRight: 6, color: '#FF6F00' }} />
    Logistics Update: New cold-chain routes established in Eastern region.
  </>,
  <>
    <FaUserShield style={{ verticalAlign: 'middle', marginRight: 6, color: '#007BFF' }} />
    Safety Alert: Advanced drone surveillance deployed to monitor agricultural zones.
  </>,
  <>
    <FaMoneyBillWave style={{ verticalAlign: 'middle', marginRight: 6, color: '#FFC107' }} />
    Finance Update: Subsidies for small farmers increased by 10%.
  </>,
  <>
    <FaChartLine style={{ verticalAlign: 'middle', marginRight: 6, color: '#17A2B8' }} />
    Market Trend: Organic rice demand rises sharply this quarter.
  </>
];

const AnnouncementBar = () => {
  return (
    <div
      className="announcement-bar border-bottom"
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "40px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "0 1rem",
        fontSize: "0.95rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
        width: "100%",         
        maxWidth: "1800px",     
        margin: "0 auto",      
        borderRadius: "8px"    
      }}
    >
      <div
        className="marquee"
        style={{
          display: "inline-block",
          animation: "marquee 25s linear infinite"
        }}
      >
        {announcements.map((msg, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              color: "#333",
              marginRight: "2rem"
            }}
          >
            {msg} | 
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
