import React, { useState } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaShoppingCart, 
  FaLeaf, 
  FaTruck, 
  FaStore,
  FaStar,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

import product1 from "../assets/images/tomatoes.jpg";
import product2 from "../assets/images/potatoes.jpeg";
import product3 from "../assets/images/dairy.jpeg";
import './Marketplace.css';

const Marketplace = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Rajesh Farms",
      price: "₹45/kg",
      storage: "GreenCold Storage (5km)",
      rating: 4.5,
      image: product1,
      category: "vegetables",
      harvestDate: "2 days ago"
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      farmer: "Singh Agri",
      price: "₹30/kg",
      storage: "AgriFresh (12km)",
      rating: 4.2,
      image: product2,
      category: "vegetables",
      harvestDate: "1 day ago"
    },
    {
      id: 3,
      name: "Buffalo Milk",
      farmer: "Dairy Bliss",
      price: "₹60/liter",
      storage: "ChillZone (8km)",
      rating: 4.7,
      image: product3,
      category: "dairy",
      harvestDate: "Today"
    }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === 'all' || product.category === activeCategory)
  );

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <section className="marketplace-section" id='market'>
      <button 
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <div className="marketplace-container">
        {/* Header */}
        <div className="marketplace-header">
          <h1>Farm Fresh Marketplace <FaLeaf className="icon" /></h1>
          <p>Connect directly with farmers and access produce stored in nearby cold storages</p>
        </div>

        {/* Search and Filters */}
        <div className="marketplace-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products (tomatoes, milk, etc.)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button 
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => setActiveCategory('all')}
            >
              <FaStore /> All
            </button>
            <button 
              className={activeCategory === 'vegetables' ? 'active' : ''}
              onClick={() => setActiveCategory('vegetables')}
            >
              <FaLeaf /> Vegetables
            </button>
            <button 
              className={activeCategory === 'dairy' ? 'active' : ''}
              onClick={() => setActiveCategory('dairy')}
            >
              <FaTruck /> Dairy
            </button>
            <button className="cart-button">
              <FaShoppingCart /> Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">
                    <FaStar /> {product.rating}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="farmer">By {product.farmer}</p>
                  <div className="product-meta">
                    <span className="price">{product.price}</span>
                    <span className="storage">{product.storage}</span>
                  </div>
                  <p className="harvest-date">Harvested: {product.harvestDate}</p>
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found matching your search</p>
              <button 
                className="reset-btn"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Cold Storage Integration Banner */}
        <div className="storage-banner">
          <h3>
            <FaMapMarkerAlt /> Need storage for your produce?
          </h3>
          <p>
            List your harvest in our marketplace and connect with nearby cold storages 
            to maintain freshness until delivery
          </p>
          <button className="storage-cta">
            Find Cold Storage
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;