import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../Redux/cartSlice";
import { FaTimes, FaShoppingBag } from "react-icons/fa";
import "../Styles/ShoppingCart.css";
const ShoppingCart = ({ onClose, onCheckout }) => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const GST_RATE = 0.18; // 18% GST
  const shipping = 0; // Free shipping
  const gst = total * GST_RATE;
  const grandTotal = total + shipping + gst;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="shopping-cart-overlay">
      <div className="shopping-cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingBag size={48} />
            <p>Your cart is empty</p>
            <button className="back-btn" onClick={onClose}>
              Back To Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="price">₹{item.price.toFixed(2)}</p>
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Sub Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping and Handling</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>GST (18%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="back-btn" onClick={onClose}>
                Back To Shopping
              </button>
              <button className="checkout-btn" onClick={onCheckout}>
                Checkout
              </button>
            </div>

            <div className="cart-footer">
              <div className="footer-links">
                <a href="#info">Info.</a>
                <a href="#contact">Contact</a>
                <a href="#newsletter">Join Newsletter</a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
