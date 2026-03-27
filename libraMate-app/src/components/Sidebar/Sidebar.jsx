import './Sidebar.css';
import { useState } from "react";
import Avatar from "../../assets/profile.png";
import {FaPlus,FaMinus,FaSync,FaSearch,FaList,FaSignOutAlt,FaBars,FaTimes} from "react-icons/fa";

const Sidebar = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="mobile-menu-btn"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">

          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={Avatar} 
                alt="Admin User" 
                className="profile-image" 
              />
              <div className="status-dot"></div>
            </div>
            <h3 className="admin-name">Admin User</h3>
            <p className="admin-email">admin@email.com</p>
          </div>

          {/* Navigation */}
          <nav className="nav-menu">
            <button className="nav-item">
              <FaPlus className="nav-icon" />
              <span>Add book</span>
            </button>

            <button className="nav-item">
              <FaMinus className="nav-icon" />
              <span>Remove book</span>
            </button>

            <button className="nav-item">
              <FaSync className="nav-icon" />
              <span>Update book</span>
            </button>

            <button className="nav-item">
              <FaSearch className="nav-icon" />
              <span>Search book</span>
            </button>

            <button className="nav-item">
              <FaList className="nav-icon" />
              <span>View book list</span>
            </button>
          </nav>

          {/* Sign Out */}
          <div className="signout-section">
            <button 
              onClick={() => {
                onSignOut && onSignOut();
                setIsOpen(false);
              }}
              className="signout-btn"
            >
              <FaSignOutAlt className="nav-icon" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;