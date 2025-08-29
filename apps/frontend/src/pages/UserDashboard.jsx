import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError('');

    if (editForm.newPassword !== editForm.confirmPassword) {
      setEditError('New passwords do not match');
      setEditLoading(false);
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
          name: editForm.name,
          currentPassword: editForm.currentPassword,
          newPassword: editForm.newPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Profile updated successfully!');
        setShowEditModal(false);
        // Update local user data
        const updatedUser = { ...user, name: editForm.name };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.location.reload(); // Refresh to update the display
      } else {
        setEditError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setEditError('Network error. Please try again.');
      console.error('Update profile error:', err);
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <button 
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name || 'User'}! 👋</h1>
        <p>Manage your farm connections and profile settings</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button onClick={() => navigate('/cold-storage')} className="action-btn">
              🏭 Cold Storage
            </button>
            <button onClick={() => navigate('/marketplace')} className="action-btn">
              🛒 Marketplace
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Profile Settings</h3>
          <button 
            onClick={() => setShowEditModal(true)} 
            className="edit-profile-btn"
          >
            ✏️ Edit Profile
          </button>
        </div>

        <div className="dashboard-card">
          <h3>Quick Stats</h3>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Active Orders</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Saved Items</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Account</h3>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="disabled-input"
                />
                <small>Email cannot be changed</small>
              </div>

              <div className="form-group">
                <label>Current Password:</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={editForm.currentPassword}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={editForm.newPassword}
                  onChange={handleEditChange}
                  placeholder="Leave blank to keep current password"
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={editForm.confirmPassword}
                  onChange={handleEditChange}
                  placeholder="Confirm new password"
                />
              </div>

              {editError && <div className="error-message">{editError}</div>}

              <div className="modal-buttons">
                <button 
                  type="button" 
                  onClick={() => setShowEditModal(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={editLoading}
                  className="save-btn"
                >
                  {editLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
