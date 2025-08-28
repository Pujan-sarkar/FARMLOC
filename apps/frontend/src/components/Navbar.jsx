import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import {
  Container,
  Navbar as BsNavbar,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";

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
  const [theme, setTheme] = useState("light");
  const [expanded, setExpanded] = useState(false);

  // Apply theme class to body when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
      className="custom-navbar shadow-sm"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        minHeight: "64px", // uniform navbar height
        backgroundColor: "#fff", // keep white background
        padding: "0.6rem 1rem", // balance spacing
        display: "flex",
        alignItems: "center",
        zIndex: 1050,
      }}
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
                className="mx-2 fw-semibold"
                style={{ color: "#2c3e50", fontSize: "1rem" }}
              >
                {link.display}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Button
              variant="success"
              as={Link}
              to="/login"
              className="rounded-pill px-3 fw-semibold"
            >
              Login
            </Button>
            <Button
              variant="link"
              onClick={toggleTheme}
              className="theme-btn p-0 text-dark"
            >
              {theme === "light" ? (
                <BiMoon className="fs-4" />
              ) : (
                <BiSun className="fs-4" />
              )}
            </Button>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
