import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { BiMoon, BiSun } from 'react-icons/bi';
import '../index.css';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
  };

  const handleEditProfile = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowEditProfile(true);
    setMessage('');
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validation
    if (profileData.newPassword && profileData.newPassword !== profileData.confirmPassword) {
      setMessage('New passwords do not match');
      setLoading(false);
      return;
    }

    if (profileData.newPassword && profileData.newPassword.length < 6) {
      setMessage('New password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('jwt_token');
      const response = await fetch('http://localhost:5050/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: profileData.name,
          currentPassword: profileData.currentPassword,
          newPassword: profileData.newPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Profile updated successfully!');
        // Update local user data
        const updatedUser = { ...user, name: profileData.name };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // You might want to update the auth context here
        setTimeout(() => {
          setShowEditProfile(false);
          setMessage('');
        }, 2000);
      } else {
        setMessage(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
      console.error('Profile update error:', err);
    } finally {
      setLoading(false);
    }
  };

  const closeEditProfile = () => {
    setShowEditProfile(false);
    setMessage('');
  };

  return (
    <>
      <div className="dashboard-container" style={{
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="dashboard-header" style={{
          textAlign: 'center',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0'
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
                transition: 'all 0.3s ease'
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === "light" ? <BiMoon size={20} /> : <BiSun size={20} />}
            </button>
          </div>
          <h1 style={{ color: '#2c5530', marginBottom: '1rem' }}>
            Welcome back, {user?.name}! 👋
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Manage your farm storage, marketplace activities, and more
          </p>
        </div>

        <div className="dashboard-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Cold Storage Management */}
          <div className="dashboard-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c5530', marginBottom: '1rem' }}>🧊 Cold Storage</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Manage your cold storage units and monitor temperature settings
            </p>
            <Link to="/cold-storage" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2c5530',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Manage Storage
            </Link>
          </div>

          {/* Marketplace */}
          <div className="dashboard-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c5530', marginBottom: '1rem' }}>🛒 Marketplace</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Buy and sell fresh produce in our marketplace
            </p>
            <Link to="/market" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2c5530',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Visit Marketplace
            </Link>
          </div>

          {/* Profile Settings */}
          <div className="dashboard-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c5530', marginBottom: '1rem' }}>👤 Profile</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Update your profile information and preferences
            </p>
            <button 
              onClick={handleEditProfile}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Edit Profile
            </button>
          </div>

          {/* Quick Stats */}
          <div className="dashboard-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c5530', marginBottom: '1rem' }}>📊 Quick Stats</h3>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>
                <strong>Storage Units:</strong> 2 active
              </p>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>
                <strong>Products Listed:</strong> 15 items
              </p>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>
                <strong>Total Sales:</strong> ₹25,000
              </p>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          borderTop: '1px solid #e9ecef'
        }}>
          <button 
            onClick={handleLogout}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Logout
          </button>
          <p style={{ color: '#666', marginTop: '1rem' }}>
            Or <Link to="/" style={{ color: '#2c5530', textDecoration: 'none' }}>
              return to home page
            </Link>
          </p>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ color: '#2c5530', margin: 0 }}>Edit Profile</h2>
              <button 
                onClick={closeEditProfile}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>

            {message && (
              <div style={{
                padding: '0.75rem',
                marginBottom: '1rem',
                borderRadius: '6px',
                backgroundColor: message.includes('successfully') ? '#d4edda' : '#f8d7da',
                color: message.includes('successfully') ? '#155724' : '#721c24',
                border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
              }}>
                {message}
              </div>
            )}

            <form onSubmit={handleProfileSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    backgroundColor: '#f8f9fa',
                    color: '#666'
                  }}
                  disabled
                />
                <small style={{ color: '#666', fontSize: '0.875rem' }}>
                  Email cannot be changed
                </small>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={profileData.currentPassword}
                  onChange={handleProfileChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter current password to make changes"
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  New Password (optional)
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={profileData.newPassword}
                  onChange={handleProfileChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Leave blank to keep current password"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleProfileChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Confirm new password"
                  disabled={!profileData.newPassword}
                />
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end'
              }}>
                <button
                  type="button"
                  onClick={closeEditProfile}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#2c5530',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Updating...' : 'Update Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
