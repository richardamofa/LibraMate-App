import './Sidebar.css';
import { useState } from "react";
import Avatar from "../../assets/pfp.png";
import {FaPlus,FaMinus,FaSync,FaSearch,FaList,FaSignOutAlt,FaBars,FaTimes} from "react-icons/fa";

const Sidebar = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  // simple handler (no routing yet)
  const handleClick = () => {
    setIsOpen(false); // closes sidebar on mobile
  };

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
            <button className="nav-item" onClick={handleClick}>
              <FaPlus className="nav-icon" />
              <span>Add Book</span>
            </button>

            <button className="nav-item" onClick={handleClick}>
              <FaMinus className="nav-icon" />
              <span>Remove Book</span>
            </button>

            <button className="nav-item" onClick={handleClick}>
              <FaSync className="nav-icon" />
              <span>Update Book</span>
            </button>

            <button className="nav-item" onClick={handleClick}>
              <FaSearch className="nav-icon" />
              <span>Search Book</span>
            </button>

            <button className="nav-item" onClick={handleClick}>
              <FaList className="nav-icon" />
              <span>View Book List</span>
            </button>
          </nav>

          {/* Sign Out */}
          <div className="signout-section">
            <button 
              onClick={() => {
                if (onSignOut) onSignOut();
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
        <div 
          className="overlay" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

