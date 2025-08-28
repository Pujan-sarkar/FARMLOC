import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { Container, Navbar as BsNavbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: "/", section: "home", display: "Home" },
  { path: "/", section: "about", display: "About Us" },
  { path: "/", section: "cold-storage", display: "Cold Storage" },
  { path: "/", section: "market", display: "Marketplace" },
  { path: "/", section: "review", display: "Reviews" },
  { path: "/", section: "contact", display: "Contact Us" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path, section) => {
    setExpanded(false);
    if (section && path === window.location.pathname) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(path);
      }
  };

  return (
    <BsNavbar 
      expand="lg" 
      className="custom-navbar"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid>
        <BsNavbar.Brand className="d-flex align-items-center">
          <FaLeaf className="leaf-icon me-2" style={{ color: "#4CAF50" }} />
          <span className="fw-bold">FARMLOC</span>
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <BiMenu className="fs-3" />
        </BsNavbar.Toggle>
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                as={Button}
                variant="link"
                onClick={() => handleNavClick(link.path, link.section)}
                className="nav-link-custom mx-2 text-dark fw-semibold"
              >
                {link.display}
              </Nav.Link>
            ))}
          </Nav>
          
          <div className="d-flex align-items-center gap-3">
            {user ? (
              <>
                <Button 
                  variant="outline-success" 
                  as={Link} 
                  to="/dashboard" 
                  className="rounded-pill px-3 fw-semibold"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="danger" 
                  onClick={logout}
                  className="rounded-pill px-3 fw-semibold"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="success" 
                as={Link} 
                to="/login" 
                className="rounded-pill px-3 fw-semibold"
              >
                Login
              </Button>
            )}
            <Button 
              variant="outline-secondary" 
              onClick={toggleTheme} 
              className="theme-btn rounded-circle p-2"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #6c757d',
                backgroundColor: 'transparent'
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === "light" ? <BiMoon className="fs-5" /> : <BiSun className="fs-5" />}
            </Button>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;