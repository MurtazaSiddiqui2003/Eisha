"use client";
import "./success.css";

export default function OrderSuccessPage() {
  // Generate a realistic mock order identifier tracking loop
  const mockTrackingId = "ORD-2026-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-wrapper">
      <div className="success-icon">✓</div>
      <h1 className="success-heading">Order Placed Successfully!</h1>
      <p className="success-message">
        Your parameters have been logged. The apparel assets and custom print files have been queued for physical production processing.
      </p>

      <div className="tracking-box">
        Production Manifest ID: {mockTrackingId}
      </div>

      <a href="/products" className="return-shop-btn">
        Continue Shopping
      </a>
    </div>
  );
}