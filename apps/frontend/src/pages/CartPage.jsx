import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { 
  FaShoppingCart, 
  FaTrash, 
  FaPlus, 
  FaMinus,
  FaLeaf,
  FaArrowLeft,
  FaCheckCircle 
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image || "/default-product.jpg"} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-farmer">By {item.farmer}</p>
        <p className="item-meta">{item.storage}</p>
        <p className="item-harvest">Harvested: {item.harvestDate}</p>
      </div>

      <div className="item-price">
        <span className="price">₹{item.price}</span>
        <span className="unit">/kg</span>
      </div>

      <div className="quantity-controls">
        <button 
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <FaMinus />
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <FaPlus />
        </button>
      </div>

      <div className="item-total">
        <span className="total-price">₹{(item.price * item.quantity).toFixed(2)}</span>
      </div>

      <button 
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
        title="Remove item"
      >
        <FaTrash />
      </button>
    </div>
  );
};

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="empty-cart">
            <FaShoppingCart className="empty-icon" />
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <Link to="/market" className="continue-shopping-btn">
              <FaLeaf /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <Link to="/" className="back-link">
            <FaArrowLeft /> Back to Marketplace
          </Link>
          <h1>
            <FaShoppingCart /> Your Cart
            <span className="item-count">({cartItems.length} items)</span>
          </h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>
            
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Delivery Charges</span>
                <span className="free">FREE</span>
              </div>
              
              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="savings-info">
                <FaCheckCircle /> You saved ₹25 on delivery!
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <Link to="/" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;