import React from "react";
import ProductCard from "./ProductCard";
import "../Styles/gridproduct.css";

const ProductsGrid = ({ products }) => {
  return (
    <section className="products-section">
      <h2 className="section-title">Popular Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
