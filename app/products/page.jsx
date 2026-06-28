"use client";
import './products.css'

const ProductsPage = () => {
  // Temporary data array for catalog items
  const mockAllProducts = [
    { id: "p1", name: "Heavyweight Core Tee", price: "$29.00", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500" },
    { id: "p2", name: "Luxury Oversized Hoodie", price: "$65.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
    { id: "p3", name: "Classic French Terry Crewneck", price: "$48.00", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500" },
    { id: "p4", name: "Custom DTF Workwear Jacket", price: "$89.00", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500" },
    { id: "p5", name: "Premium Streetwear Blanks", price: "$24.00", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500" },
    { id: "p6", name: "Bespoke Embroidered Cap", price: "$35.00", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500" },
  ];

  return (
    <div className="catalogContainer">
      <div className="catalogHeader">
        <h1 className="catalogTitle">All Products</h1>
        <p className="catalogSubtitle">
          Browse our collection of raw luxury apparel blanks and customizable canvas bases.
        </p>
      </div>

      {/* Grid container mapping cards using modular styles */}
      <div className="productGrid">
        {mockAllProducts.map((product) => (
          <a 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="productCard"
          >
            <div 
              className="imageBox" 
              style={{ backgroundImage: `url(${product.img})` }}
            />
            <h3 className="metaTitle">{product.name}</h3>
            <p className="metaPrice">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage