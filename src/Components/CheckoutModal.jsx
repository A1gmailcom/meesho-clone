import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import { FaCheckCircle } from "react-icons/fa";
import "../Styles/CheckoutModal.css";
const CheckoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="checkout-modal">
        <FaCheckCircle className="success-icon" size={48} />
        <h2>Order Successful!</h2>
        <p>Congratulations! Your product has been purchased.</p>
        <p>A confirmation has been sent to your email address.</p>
        <button className="close-modal-btn" onClick={handleClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
