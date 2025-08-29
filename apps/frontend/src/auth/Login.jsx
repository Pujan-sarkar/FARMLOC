// Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

import loginImage from "../assets/images/login.png";
import '../index.css';

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include' // Include cookies for JWT
      });

      const data = await response.json();

      if (response.ok) {
        // Use auth context to login
        login(data.data, data.jwt_token);
        
        alert('Login successful!');
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
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
            src={loginImage}
            alt="Login Illustration"
            className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h2>Welcome <span className="highlight">Back</span></h2>
        <form className="auth-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <button type="submit" className="submit-button">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;