import React from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-us" id="contact">
      <Container>
        <h2 className="text-center mb-4">🌾 Contact FARMLOC Support</h2>
        <p className="text-center mb-5">
          Have questions? Reach out to us for help with cold storage, resources,
          or farm management.
        </p>

        <div className="contact-container">
          <Row className="contact-row">
            {/* Left side - SVG */}
            <Col md={6} className="svg-column">
              <div className="svg-container">
                <svg
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-svg"
                >
                  {/* Background */}
                  <rect width="400" height="300" fill="#f8f9fa" className="svg-background" />

                  {/* Background city buildings */}
                  <g opacity="0.1">
                    <rect x="20" y="80" width="30" height="60" fill="#ddd" />
                    <rect x="60" y="60" width="25" height="80" fill="#ccc" />
                    <rect x="90" y="70" width="35" height="70" fill="#ddd" />
                    <rect x="130" y="50" width="20" height="90" fill="#bbb" />
                    <rect x="155" y="65" width="30" height="75" fill="#ccc" />

                    {/* Building windows */}
                    <rect x="25" y="85" width="4" height="6" fill="#fff" />
                    <rect x="35" y="85" width="4" height="6" fill="#fff" />
                    <rect x="25" y="95" width="4" height="6" fill="#fff" />
                    <rect x="35" y="95" width="4" height="6" fill="#fff" />

                    <rect x="65" y="70" width="4" height="6" fill="#fff" />
                    <rect x="75" y="70" width="4" height="6" fill="#fff" />
                    <rect x="65" y="85" width="4" height="6" fill="#fff" />
                    <rect x="75" y="85" width="4" height="6" fill="#fff" />
                  </g>

                  {/* Desk/Table */}
                  <ellipse
                    cx="200"
                    cy="240"
                    rx="180"
                    ry="40"
                    fill="#e8e8e8"
                    opacity="0.3"
                  />
                  <rect
                    x="80"
                    y="220"
                    width="240"
                    height="20"
                    rx="5"
                    fill="#8d6e63"
                  />

                  {/* Monitor stand */}
                  <rect x="245" y="180" width="8" height="40" fill="#666" />
                  <rect
                    x="235"
                    y="215"
                    width="28"
                    height="8"
                    rx="4"
                    fill="#666"
                  />

                  {/* Monitor screen */}
                  <rect
                    x="220"
                    y="120"
                    width="80"
                    height="60"
                    rx="5"
                    fill="#2c2c2c"
                  />
                  <rect
                    x="225"
                    y="125"
                    width="70"
                    height="50"
                    rx="2"
                    fill="#000"
                  />

                  {/* Speech bubble from monitor */}
                  <ellipse
                    cx="320"
                    cy="80"
                    rx="20"
                    ry="15"
                    fill="#fff"
                    stroke="#ddd"
                    strokeWidth="1"
                  />
                  <circle cx="315" cy="80" r="2" fill="#666" />
                  <circle cx="320" cy="80" r="2" fill="#666" />
                  <circle cx="325" cy="80" r="2" fill="#666" />
                  <path d="M310 90 L305 95 L315 92 Z" fill="#fff" />

                  {/* Coffee cup with plant */}
                  <ellipse cx="120" cy="215" rx="12" ry="8" fill="#8d4e2d" />
                  <ellipse cx="120" cy="210" rx="10" ry="6" fill="#d7a86e" />
                  <ellipse cx="120" cy="208" rx="8" ry="4" fill="#6f4e37" />

                  {/* Plant in cup */}
                  <circle cx="120" cy="205" r="3" fill="#2e7d32" />
                  <ellipse cx="115" cy="200" rx="6" ry="8" fill="#4caf50" />
                  <ellipse cx="125" cy="198" rx="5" ry="6" fill="#66bb6a" />
                  <ellipse cx="120" cy="195" rx="4" ry="5" fill="#4caf50" />

                  {/* Woman's body */}
                  {/* Shirt */}
                  <path
                    d="M140 180 Q130 170 120 180 L120 220 Q130 225 150 225 Q170 225 180 220 L180 180 Q170 170 160 180 Z"
                    fill="#1976d2"
                  />

                  {/* Arms */}
                  <ellipse
                    cx="110"
                    cy="190"
                    rx="8"
                    ry="25"
                    fill="#f4c2a1"
                    transform="rotate(-20 110 190)"
                  />
                  <ellipse
                    cx="190"
                    cy="190"
                    rx="8"
                    ry="25"
                    fill="#f4c2a1"
                    transform="rotate(20 190 190)"
                  />

                  {/* Hands */}
                  <circle cx="105" cy="210" r="6" fill="#f4c2a1" />
                  <circle cx="195" cy="210" r="6" fill="#f4c2a1" />

                  {/* Woman's head and hair */}
                  {/* Hair back */}
                  <ellipse cx="150" cy="140" rx="25" ry="35" fill="#2c2c2c" />

                  {/* Face */}
                  <ellipse cx="150" cy="145" rx="18" ry="22" fill="#f4c2a1" />

                  {/* Hair front */}
                  <path
                    d="M132 130 Q140 120 150 120 Q160 120 168 130 Q165 135 150 135 Q135 135 132 130"
                    fill="#2c2c2c"
                  />
                  <path
                    d="M130 140 Q135 135 140 140 Q145 145 140 150 Q135 145 130 140"
                    fill="#2c2c2c"
                  />
                  <path
                    d="M170 140 Q165 135 160 140 Q155 145 160 150 Q165 145 170 140"
                    fill="#2c2c2c"
                  />

                  {/* Eyes */}
                  <ellipse cx="145" cy="142" rx="2" ry="3" fill="#333" />
                  <ellipse cx="155" cy="142" rx="2" ry="3" fill="#333" />
                  <ellipse cx="145" cy="141" rx="1" ry="1" fill="#fff" />
                  <ellipse cx="155" cy="141" rx="1" ry="1" fill="#fff" />

                  {/* Nose */}
                  <ellipse cx="150" cy="148" rx="1" ry="2" fill="#e6a684" />

                  {/* Mouth */}
                  <path
                    d="M148 152 Q150 154 152 152"
                    fill="none"
                    stroke="#d4956b"
                    strokeWidth="1"
                  />

                  {/* Hand on chin gesture */}
                  <ellipse
                    cx="105"
                    cy="210"
                    rx="6"
                    ry="8"
                    fill="#f4c2a1"
                    transform="rotate(-30 105 210)"
                  />
                  <path
                    d="M98 205 Q105 200 110 205"
                    fill="none"
                    stroke="#e6a684"
                    strokeWidth="1"
                  />

                  {/* Decorative dots pattern */}
                  <g opacity="0.2">
                    <circle cx="50" cy="50" r="2" fill="#1976d2" />
                    <circle cx="60" cy="45" r="2" fill="#1976d2" />
                    <circle cx="70" cy="55" r="2" fill="#1976d2" />
                    <circle cx="80" cy="40" r="2" fill="#1976d2" />

                    <circle cx="320" cy="180" r="2" fill="#4caf50" />
                    <circle cx="330" cy="175" r="2" fill="#4caf50" />
                    <circle cx="340" cy="185" r="2" fill="#4caf50" />
                    <circle cx="350" cy="170" r="2" fill="#4caf50" />

                    <circle cx="40" cy="260" r="1.5" fill="#666" />
                    <circle cx="50" cy="265" r="1.5" fill="#666" />
                    <circle cx="60" cy="255" r="1.5" fill="#666" />
                  </g>

                  {/* Additional desk items */}
                  {/* Mouse */}
                  <ellipse cx="170" cy="210" rx="8" ry="12" fill="#666" />
                  <ellipse cx="170" cy="208" rx="6" ry="10" fill="#999" />

                  {/* Keyboard suggestion */}
                  <rect
                    x="200"
                    y="200"
                    width="40"
                    height="15"
                    rx="2"
                    fill="#333"
                    opacity="0.7"
                  />

                  {/* Small decorative elements */}
                  <circle cx="380" cy="60" r="8" fill="#e0e0e0" opacity="0.5" />
                  <circle cx="30" cy="200" r="6" fill="#e0e0e0" opacity="0.3" />
                </svg>
              </div>
            </Col>

            {/* Right side - Form */}
            <Col md={6} className="contact-form-column">
              <div className="form-content">
                <form className="contact-form">
                  <div className="form-section">
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <div className="name-fields">
                      <input
                        type="text"
                        placeholder="First"
                        className="form-input"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-input full-width"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-section">
                    <label>
                      Leave us a few words <span className="required">*</span>
                    </label>
                    <textarea
                      className="form-input full-width textarea"
                      placeholder="Enter your comments"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="divider"></div>

                  <button type="submit" className="submit-button">
                    SUBMIT
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
