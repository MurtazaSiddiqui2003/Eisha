"use client";
import { useState, use } from "react";
import './product.css'

const ProductDetailPage = ({ params: paramsPromise }) => {
  // Unwrapping the async params parameter from Next.js
  const params = use(paramsPromise);
  const productId = params.id;

  // Local state metrics
  const [selectedSize, setSelectedSize] = useState("");
  const [isCustomPrint, setIsCustomPrint] = useState("no");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Mock catalog dataset (In Phase 5, we fetch this directly from MongoDB using this ID!)
  const mockInventory = {
    p1: { name: "Heavyweight Core Tee", price: "$29.00", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500", desc: "A robust 240GSM cotton luxury blank built with drop shoulders and tight collar ribbing. Optimized perfectly for direct structural garment treatments." },
    p2: { name: "Luxury Oversized Hoodie", price: "$65.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500", desc: "450GSM French Terry weave featuring double-lined structural hoods without drawstrings. The perfect clean canvas for heavy graphical DTF impressions." },
    p3: { name: "Classic French Terry Crewneck", price: "$48.00", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500", desc: "Tailored comfortable loungewear built from tightly spun yarn loops. Keeps its color grade clean and sharp across infinite wash cycles." },
    p4: { name: "Custom DTF Workwear Jacket", price: "$89.00", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500", desc: "Durable duck canvas outerwear treated with industrial windbreakers. Outfitted with massive surface backpanels for high-impact brand art prints." }
  };

  // Find product or fall back safely
  const product = mockInventory[productId] || {
    name: "Product Not Found",
    price: "$0.00",
    img: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=500",
    desc: "The requested inventory identifier does not exist inside our active collection catalog arrays."
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCartSubmission = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("Please select a physical garment size option.");
      return;
    }
    if (isCustomPrint === "yes" && !selectedFile) {
      alert("Please upload your custom graphics file layout.");
      return;
    }
    
    alert(`Added to Cart!\nItem: ${product.name}\nSize: ${selectedSize}\nCustom Design: ${selectedFile ? selectedFile.name : "None"}`);
  };

  return (
    <div className="detailContainer">
      
      {/* Left Column: Product Image Showcase */}
      <div 
        className="imageDisplay"
        style={{ backgroundImage: `url(${product.img})` }}
      />

      {/* Right Column: Interaction & Custom Matrix */}
      <div className="infoColumn">
        <h1 className="productTitle">{product.name}</h1>
        <p className="productPrice">{product.price}</p>
        <p className="productDescription">{product.desc}</p>

        <form onSubmit={handleCartSubmission} className="configForm">
          
          {/* Configuration Element: Size Selection */}
          <div>
            <label className="optionLabel">Select Size</label>
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="customSelect"
            >
              <option value="">-- Choose Size --</option>
              <option value="S">Small (S)</option>
              <option value="M">Medium (M)</option>
              <option value="L">Large (L)</option>
              <option value="XL">Extra Large (XL)</option>
            </select>
          </div>

          {/* Configuration Element: Custom Print Request Toggle */}
          <div>
            <label className="optionLabel">Add Custom Printing/Design?</label>
            <select 
              value={isCustomPrint} 
              onChange={(e) => {
                setIsCustomPrint(e.target.value);
                setSelectedFile(null);
                setPreviewUrl(null);
              }}
              className="customSelect"
            >
              <option value="no">No, ship as clean blank apparel</option>
              <option value="yes">Yes, upload custom artwork (+$10.00 DTF Charge)</option>
            </select>
          </div>

          {/* THE CONDITIONAL FIELD: Reveals only if 'yes' is selected above */}
          {isCustomPrint === "yes" && (
            <div>
              <label className="optionLabel">Upload High-Res Print File</label>
              <div className="uploadZone">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="fileInput"
                  required
                />
                <p style={{ fontSize: '14px', fontWeight: '500' }}>
                  {selectedFile ? selectedFile.name : "Drop or select image layout"}
                </p>
                <p style={{ fontSize: '12px', color: '#888888', marginTop: '4px' }}>
                  Supports vector layouts, high-res transparent PNGs
                </p>
              </div>

              {/* Dynamic rendering layout preview window */}
              {previewUrl && (
                <div className="previewBox">
                  <img src={previewUrl} alt="Art Blueprint Preview" className="previewImage" />
                </div>
              )}
            </div>
          )}

          <button type="submit" className="addToCartBtn">
            Add Items to Shopping Cart
          </button>

        </form>
      </div>

    </div>
  );
}

export default ProductDetailPage