"use client";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import "../../../admin.css";

export default function AdminEditProduct({ params: paramsPromise }) {
  const router = useRouter();
  const params = use(paramsPromise);
  const productId = params.id;

  // Mock lookup tracking logic (In later database phase, we search MongoDB with this exact dynamic ID segment)
  const mockDatabaseSearch = {
    p1: { name: "Heavyweight Core Tee", price: "29.00", category: "T-Shirts", imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500", description: "A robust 240GSM cotton luxury blank built with drop shoulders and tight collar ribbing." },
    p2: { name: "Luxury Oversized Hoodie", price: "65.00", category: "Hoodies", imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500", description: "450GSM French Terry weave featuring double-lined structural hoods without drawstrings." }
  };

  // Pre-load matched database record or instantiate flat placeholders safely
  const activeProduct = mockDatabaseSearch[productId] || { name: "", price: "", category: "T-Shirts", imageUrl: "", description: "" };

  const [formData, setFormData] = useState(activeProduct);

  const handleUpdateSubmission = (e) => {
    e.preventDefault();
    // In Phase 11, we push updates to MongoDB target vectors via custom Mongoose schemas!
    alert(`Success! Updated product alterations for: ${formData.name}`);
    router.push("/admin/products");
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <div className="admin-header-row">
        <h1 className="admin-page-title">Edit Product: <span style={{ color: "#666" }}>{productId}</span></h1>
      </div>

      <div className="cart-summary-card" style={{ padding: "32px" }}>
        <form onSubmit={handleUpdateSubmission} className="config-form">
          
          <div className="form-group">
            <label className="form-label">Garment Line Name</label>
            <input 
              type="text" 
              className="custom-select" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>

          <div className="form-row-split" style={{ marginBottom: "0px" }}>
            <div className="form-group">
              <label className="form-label">Price ($ USD)</label>
              <input 
                type="number" 
                step="0.01"
                className="custom-select" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Inventory Category Element</label>
              <select 
                className="custom-select"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="T-Shirts">T-Shirts</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Sweatshirts">Sweatshirts</option>
                <option value="Blanks">Raw Blanks</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Catalog Display Image Source URL</label>
            <input 
              type="url" 
              className="custom-select" 
              value={formData.imageUrl}
              onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Product Detailed Profile Specifications</label>
            <textarea 
              className="form-textarea" 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" style={{ marginTop: "12px" }}>
            Apply Inventory Updates
          </button>

        </form>
      </div>
    </div>
  );
}