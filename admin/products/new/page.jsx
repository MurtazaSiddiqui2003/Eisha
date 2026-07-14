"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../admin.css";

export default function AdminNewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "T-Shirts",
    imageUrl: "",
    description: ""
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // In Phase 11, we hook this up to write directly to MongoDB Atlas!
    alert(`Success! Created product line: ${formData.name}`);
    router.push("/admin/products");
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <div className="admin-header-row">
        <h1 className="admin-page-title">Create New Product Line</h1>
      </div>

      <div className="cart-summary-card" style={{ padding: "32px" }}>
        <form onSubmit={handleFormSubmission} className="config-form">
          
          <div className="form-group">
            <label className="form-label">Garment Name</label>
            <input 
              type="text" 
              className="custom-select" 
              placeholder="e.g. Vintage Boxy Fit Tee"
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
                placeholder="29.00"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Inventory Category</label>
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
            <label className="form-label">Product Image URL</label>
            <input 
              type="url" 
              className="custom-select" 
              placeholder="https://images.unsplash.com/... or cloud asset path"
              value={formData.imageUrl}
              onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Product Description Specifications</label>
            <textarea 
              className="form-textarea" 
              placeholder="Detail garment GSM weight, weave structure, and loop stitch metrics..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" style={{ marginTop: "12px" }}>
            Save Product to Inventory
          </button>

        </form>
      </div>
    </div>
  );
}