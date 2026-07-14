"use client";
import { useState } from "react";

export default function AdminProductsList() {
  // Mock inventory list state
  const [products, setProducts] = useState([
    { id: "p1", name: "Heavyweight Core Tee", price: "$29.00", category: "T-Shirts", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500" },
    { id: "p2", name: "Luxury Oversized Hoodie", price: "$65.00", category: "Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
    { id: "p3", name: "Classic French Terry Crewneck", price: "$48.00", category: "Sweatshirts", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500" }
  ]);

  const deleteProduct = (id) => {
    if(confirm("Are you sure you want to remove this product from your inventory?")) {
      setProducts(products.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <div className="admin-header-row">
        <h1 className="admin-page-title">Product Inventory Master</h1>
        <a href="/admin/products/new" className="action-edit-btn" style={{padding: '12px 20px'}}>
          + Create Product Line
        </a>
      </div>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions Mapping</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <div className="table-product-thumb" style={{ backgroundImage: `url(${prod.img})` }} />
                </td>
                <td style={{ fontWeight: '500' }}>{prod.name}</td>
                <td>{prod.category}</td>
                <td>{prod.price}</td>
                <td>
                  <div className="admin-action-btn-group">
                    <a href={`/admin/products/edit/${prod.id}`} className="action-edit-btn">
                      Edit details
                    </a>
                    <button onClick={() => deleteProduct(prod.id)} className="action-delete-btn">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}