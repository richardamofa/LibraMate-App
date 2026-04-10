import './Student.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';
import { FaChartBar, FaChartLine, FaPeopleArrows, FaUserAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import {PieChart,Pie,Tooltip,ResponsiveContainer,Cell,BarChart,Bar,XAxis,YAxis,CartesianGrid,Legend} from "recharts";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [isSigningOut, setIsSigningOut] = useState(false);

  //  FIXED FUNCTION
  const handleSignOut = () => {
    setIsSigningOut(true);

    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/admin/login", { replace: true });
    }, 1500);
  }; // CLOSED PROPERLY

  // NOW OUTSIDE FUNCTION
  const pieData = [
    { name: "Total Books", value: 798 },
    { name: "Added", value: 235 },
    { name: "Submitted", value: 98 }
  ];

  const COLORS = ["#b58a6a", "#22c55e", "#ef4444"];

  const barData = [
    { month: "Jan", added: 40, submitted: 10 },
    { month: "Feb", added: 30, removed: 5 },
    { month: "Mar", added: 50, removed: 20 },
    { month: "Apr", added: 70, removed: 25 },
    { month: "May", added: 60, removed: 15 },
  ];

  const barColors = ["#22c55e", "#ef4444"];

  return (
    <div className="dashboard-container">
      <Sidebar onSignOut={handleSignOut} />

      <div className="main-content">
        {/* Welcome */}
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

        {/* Stats Row */}
        <div className="stats-row">

          {/* Readers */}
          <div className="readers-card glass-card">
            {/*background icon */}
            <FaUsers className='readers-icon'/>

            <p className="card-label">NUMBER OF READERS</p>
            <p className="readers-number">
              301
              <span className="trend-up">
                <FaChartLine />
              </span>
            </p>
          </div>

          {/* Pie Chart */}
          <div className="chart-card glass-card">
            <p className="card-label">BOOK DISTRIBUTION</p>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                  contentStyle={
                    {
                     background: "#fff",
                     border: "none",
                     borderRadius: "10px"
                    }
                  }
                   />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bar-card glass-card">
          <p className="card-label">ACTIVITY OVERVIEW</p>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip
                contentStyle={{
                    background: "rgba(0, 0, 0, 0.7)",
                    border: "none",
                    borderRadius: "10px",
                    color: "#fff"
                }}
                />
                <Legend />
                {/* Added Books */}
                <Bar dataKey="added" fill={barColors[0]} radius={[6, 6, 0, 0]} />

                {/* Removed Books */}
                <Bar dataKey="removed" fill={barColors[1]} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/*signning out*/}
        {isSigningOut && (
        <div className="signout-overlay">
                <div className="signout-box">
                <p>Signing you out...</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
  };

export default StudentDashboard;