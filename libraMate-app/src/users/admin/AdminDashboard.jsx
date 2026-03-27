import './Admin.css';
import Sidebar from '../../components/Sidebar/Sidebar';

import { Link } from "react-router-dom";

const AdminDashboard = () => {
  console.log("Admin Test");
  const handleSignOut = () => {
    console.log("Signing out...");
    // sign out logic here (clear token, redirect, etc.)
  };

  return (
    <div className="dashboard-container">
       <Sidebar onSignOut={handleSignOut} /> 

      <div className="main-content">
        <div className="welcome-section">
          <h1>Welcome to LMS, <span>Admin Dashboard</span></h1>
          <p>An automated dashboard for admins to keep track of LibraMate Software</p>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="glass-card">
            <p className="card-label">TOTAL BOOKS</p>
            <p className="kpi-number">798</p>
          </div>
          <div className="glass-card">
            <p className="card-label">BOOKS ADDED</p>
            <p className="kpi-number added">+235</p>
          </div>
          <div className="glass-card">
            <p className="card-label">BOOKS REMOVED</p>
            <p className="kpi-number removed">-98</p>
          </div>
        </div>

        {/* Readers + Pie Chart */}
        <div className="stats-row">
          <div className="readers-card glass-card">
            <p className="card-label">NUMBER OF READERS</p>
            <p className="readers-number">301</p>
            <span className="trend-up">↑</span>
          </div>

          <div className="chart-card glass-card">
            <p className="card-label">BOOK DISTRIBUTION</p>
            <div className="chart-placeholder">
              Pie Chart will go here
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="chart-card glass-card">
          <p className="card-label">ACTIVITY OVERVIEW</p>
          <div className="chart-placeholder">
            Bar Chart will go here
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;