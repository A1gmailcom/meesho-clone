import "../Styles/Carousel.css";
import React, { useEffect, useRef } from "react";

const CategoryCarousel = ({ categories }) => {
  const carouselRef = useRef(null);
  const placeholderImages = [
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23FF5733" width="150" height="150"/%3E%3Ctext fill="%23FFFFFF" font-family="Arial" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EElectronics%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23C70039" width="150" height="150"/%3E%3Ctext fill="%23FFFFFF" font-family="Arial" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EFashion%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23900C3F" width="150" height="150"/%3E%3Ctext fill="%23FFFFFF" font-family="Arial" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EHome%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23581845" width="150" height="150"/%3E%3Ctext fill="%23FFFFFF" font-family="Arial" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EBeauty%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%231A5276" width="150" height="150"/%3E%3Ctext fill="%23FFFFFF" font-family="Arial" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EGroceries%3C/text%3E%3C/svg%3E',
  ];

  if (!categories || !Array.isArray(categories)) {
    return <div className="loading-message">Loading categories...</div>;
  }

  const baseCategories = categories.slice(0, 5);
  const repeatedCategories = baseCategories.slice(0, 3);
  const combined = [...baseCategories, ...repeatedCategories];

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const itemWidth = 170; // Adjust based on card width + gap

    const interval = setInterval(() => {
      if (carousel) {
        if (
          scrollAmount + itemWidth >=
          carousel.scrollWidth - carousel.clientWidth
        ) {
          scrollAmount = 0; // Reset to start
        } else {
          scrollAmount += itemWidth;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-carousel" ref={carouselRef}>
        {combined.map((category, index) => {
          const categoryName =
            typeof category === "string"
              ? category
              : category?.name || category?.title || `Category ${index + 1}`;

          const key =
            typeof category === "string"
              ? `${category}-${index}`
              : `${category?.id || `cat-${index}`}`;

          const displayName =
            categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

          return (
            <div key={key} className="category-card">
              <img
                src={placeholderImages[index % placeholderImages.length]}
                alt={displayName}
                onError={(e) => {
                  e.target.src = placeholderImages[0];
                }}
              />
              <h3>{displayName}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCarousel;
