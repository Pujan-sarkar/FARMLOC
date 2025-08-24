import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/images/login.png";
import "../index.css";
import API_BASE_URL from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Login successful!");
        if (data.token) localStorage.setItem("token", data.token);
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h2>Welcome <span className="highlight">Back</span></h2>
        <form className="auth-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-button">Log In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
