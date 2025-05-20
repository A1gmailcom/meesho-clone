import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdCategory, MdHome } from "react-icons/md";
import "../Styles/Navbar.css";

const Navbar = ({ cartCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          Meesho Clone
        </a>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>
            <MdHome className="nav-icon" />
            <span>Home</span>
          </a>
          <a href="#categories" className="nav-link" onClick={closeMenu}>
            <MdCategory className="nav-icon" />
            <span>Categories</span>
          </a>
          <button
            className="nav-link cart-btn"
            onClick={() => {
              toggleCart();
              closeMenu();
            }}
          >
            <FaShoppingCart className="nav-icon" />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <a href="#profile" className="nav-link" onClick={closeMenu}>
            <FaUser className="nav-icon" />
            <span>Profile</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
