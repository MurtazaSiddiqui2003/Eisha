export default function AdminDashboardIndex() {
  return (
    <div>
      <div className="admin-header-row">
        <h1 className="admin-page-title">Dashboard Overview</h1>
      </div>

      {/* Metrics Layout Block */}
      <div className="metrics-grid">
        <div className="metric-card">
          <p className="metric-label">Total Revenue</p>
          <p className="metric-value">$4,280.00</p>
        </div>
        <div className="metric-card">
          <p className="metric-label">Active Production Orders</p>
          <p className="metric-value">12</p>
        </div>
        <div className="metric-card">
          <p className="metric-label">Catalog Products Count</p>
          <p className="metric-value">6</p>
        </div>
      </div>
    </div>
  );
}