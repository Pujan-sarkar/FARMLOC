// Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

import signupImage from "../assets/images/signup.png";
import '../index.css';

const Signup = () => {

  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.cpassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5050/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="auth-container">
      <button 
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <div className="auth-left">
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h2>Create an <span className="highlight">Account</span></h2>
        {error && <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Enter your full name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label>Email Address</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />

          <label>Confirm Password</label>
          <input 
            type="password" 
            name="cpassword"
            placeholder="Confirm password" 
            value={formData.cpassword}
            onChange={handleChange}
            required 
          />

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;