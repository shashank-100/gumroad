import * as React from "react";

interface DashboardStats {
  totalRevenue: string;
  customersCount: string;
  activeMembersCount: string;
  monthlyRecurringRevenue: string;
}

interface DashboardProps {
  stats: DashboardStats | null;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome to your Gumroad creator dashboard</p>
      </div>

      {stats && (
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>Total Revenue</h3>
              <p className="stat-value">{stats.totalRevenue}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>Total Customers</h3>
              <p className="stat-value">{stats.customersCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>Active Members</h3>
              <p className="stat-value">{stats.activeMembersCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h3>Monthly Recurring Revenue</h3>
              <p className="stat-value">{stats.monthlyRecurringRevenue}</p>
            </div>
          </div>
        </div>
      )}

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-grid">
          <div className="action-card">
            <h3>Create New Product</h3>
            <p>Start selling digital products, subscriptions, or physical goods</p>
            <button className="btn btn-primary">Create Product</button>
          </div>

          <div className="action-card">
            <h3>View Analytics</h3>
            <p>Check your sales performance and customer insights</p>
            <button className="btn btn-secondary">View Analytics</button>
          </div>

          <div className="action-card">
            <h3>Manage Settings</h3>
            <p>Update your account settings and preferences</p>
            <button className="btn btn-secondary">Manage Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
