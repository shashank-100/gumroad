import * as React from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface HeaderProps {
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Dashboard</span>
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button className="btn btn-icon" title="Notifications">
            🔔
          </button>
          <button className="btn btn-icon" title="Help">
            ❓
          </button>
        </div>

        {user && (
          <div className="user-menu">
            <div className="user-avatar">👤</div>
            <div className="user-dropdown">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
