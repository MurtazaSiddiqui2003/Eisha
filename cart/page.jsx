"use client";
import { useState } from "react";
// Importing the standard CSS file natively
import "./cart.css";

export default function CartPage() {
  // Mock shopping cart array state containing custom print specifications
  const [cartItems, setCartItems] = useState([
    {
      id: "cart-item-1",
      name: "Luxury Oversized Hoodie",
      size: "XL",
      price: 75.00,
      hasCustomPrint: true,
      artworkName: "brand_logo_v2_final.png",
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500"
    },
    {
      id: "cart-item-2",
      name: "Heavyweight Core Tee",
      size: "L",
      price: 29.00,
      hasCustomPrint: false,
      artworkName: null,
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500"
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Dynamic calculations metrics
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shippingFee = cartItems.length > 0 ? 10.00 : 0.00;
  const totalCost = subtotal + shippingFee;

  return (
    <div className="cart-page-container">
      <h1 className="cart-main-heading">Your Shopping Bag</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ color: '#666666', marginBottom: '20px' }}>Your shopping bag is completely empty.</p>
          <a href="/products" className="checkout-action-btn" style={{ display: 'inline-block', width: 'auto', padding: '12px 24px' }}>Return to Shop</a>
        </div>
      ) : (
        <div className="cart-layout-split">
          
          {/* Left Side: Dynamic Items Stream */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div 
                  className="cart-item-thumbnail" 
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-spec">Size: {item.size}</p>
                  
                  {/* Structural POD Indicator badge */}
                  {item.hasCustomPrint && (
                    <div className="cart-item-artwork-badge">
                      ✓ Custom DTF Print Asset Attached: {item.artworkName}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <p className="cart-item-price-tag">${item.price.toFixed(2)}</p>
                  <button onClick={() => removeItem(item.id)} className="cart-remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Pricing Calculations Block */}
          <div className="cart-summary-card">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Standard Shipping</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>

            <div className="summary-total-row">
              <span>Estimated Total</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>

            <a href="/checkout" className="checkout-action-btn">
              Proceed to Shipping
            </a>
          </div>

        </div>
      )}
    </div>
  );
}