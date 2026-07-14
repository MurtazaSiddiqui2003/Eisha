import "./admin.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell">
      
      {/* Structural Sidebar Links Layout */}
      <aside className="admin-sidebar">
        <div className="sidebar-title">Management Engine</div>
        <a href="/admin" className="sidebar-link">Dashboard Summary</a>
        <a href="/admin/products" className="sidebar-link">All Products (Inventory)</a>
        <a href="/admin/products/new" className="sidebar-link">+ Add New Product</a>
        <a href="/admin/orders" className="sidebar-link">Customer Orders</a>
      </aside>

      {/* Dynamic Content view area injection point */}
      <section className="admin-content-view">
        {children}
      </section>

    </div>
  );
}