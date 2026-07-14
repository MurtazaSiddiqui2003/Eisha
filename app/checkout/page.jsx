"use client";
import { useRouter } from "next/navigation";
import "./checkout.css";

export default function CheckoutPage() {
  const router = useRouter();

  const handleOrderPlacement = (e) => {
    e.preventDefault();
    // In Phase 9, we will hook this up to send form data and cart items to MongoDB!
    router.push("/order-success");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Shipping Information</h1>
      <p className="checkout-subtext">Provide your delivery parameters below to route your production run.</p>

      <div className="checkout-form-card">
        <form onSubmit={handleOrderPlacement}>
          
          <div className="form-row-split">
            <div className="form-group-block">
              <label className="form-label">First Name</label>
              <input type="text" className="input-field-native" required placeholder="Jane" />
            </div>
            <div className="form-group-block">
              <label className="form-label">Last Name</label>
              <input type="text" className="input-field-native" required placeholder="Doe" />
            </div>
          </div>

          <div className="form-group-block">
            <label className="form-label">Email Address</label>
            <input type="email" className="input-field-native" required placeholder="janedoe@example.com" />
          </div>

          <div className="form-group-block">
            <label className="form-label">Delivery Street Address</label>
            <input type="text" className="input-field-native" required placeholder="123 Main Street, Apt 4B" />
          </div>

          <div className="form-row-split">
            <div className="form-group-block">
              <label className="form-label">City</label>
              <input type="text" className="input-field-native" required placeholder="New York" />
            </div>
            <div className="form-group-block">
              <label className="form-label">Postal Code</label>
              <input type="text" className="input-field-native" required placeholder="10001" />
            </div>
          </div>

          <div className="form-group-block">
            <label className="form-label">Payment Method</label>
            <select className="custom-select" required>
              <option value="cod">Cash on Delivery (COD)</option>
              <option value="card">Credit / Debit Card</option>
            </select>
          </div>

          <button type="submit" className="place-order-btn">
            Complete Order Placement
          </button>

        </form>
      </div>
    </div>
  );
}