import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { Icon } from "$app/components/Icons";

export const DashboardNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Overview", icon: "dashboard" },
    { path: "/analytics", label: "Analytics", icon: "chart" },
    { path: "/audience", label: "Audience", icon: "users" },
    { path: "/products", label: "Products", icon: "package" },
    { path: "/customers", label: "Customers", icon: "user" },
    { path: "/balance", label: "Balance", icon: "credit-card" },
    { path: "/settings", label: "Settings", icon: "settings" },
    { path: "/workflows", label: "Workflows", icon: "workflow" },
    { path: "/emails", label: "Emails", icon: "mail" },
    { path: "/utm-links", label: "UTM Links", icon: "link" },
    { path: "/communities", label: "Communities", icon: "community" },
  ];

  return (
    <nav className="dashboard-nav" style={{
      background: "#f8f9fa",
      borderRight: "1px solid #e9ecef",
      width: "250px",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      overflowY: "auto",
      padding: "1rem 0"
    }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} style={{ margin: 0, padding: 0 }}>
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.5rem",
                  color: isActive ? "white" : "#495057",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  borderLeft: `3px solid ${isActive ? "#0056b3" : "transparent"}`,
                  background: isActive ? "#007bff" : "transparent"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#e9ecef";
                    e.currentTarget.style.color = "#212529";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#495057";
                  }
                }}
              >
                <Icon name={item.icon as any} style={{ width: "18px", height: "18px" }} />
                <span style={{ fontWeight: 500 }}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
