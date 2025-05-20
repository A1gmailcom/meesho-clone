// App.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import CategoryCarousel from "./Components/CategoryCarousel";
import ProductsGrid from "./Components/Productsgrid";
import ShoppingCart from "./Components/ShoppingCart";
import CheckoutModal from "./Components/CheckoutModal";
import "./Styles/main.css";
import "./Styles/responsive.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    // Fetch products
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    // Fetch categories
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const closeModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartItems.length} toggleCart={toggleCart} />

      <main className="main-content">
        <CategoryCarousel categories={categories} />
        <ProductsGrid products={products} />
      </main>

      {isCartOpen && (
        <ShoppingCart onClose={toggleCart} onCheckout={handleCheckout} />
      )}

      {showCheckoutModal && <CheckoutModal onClose={closeModal} />}
    </div>
  );
}

export default App;
