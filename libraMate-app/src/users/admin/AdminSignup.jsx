import "./Admin.css";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminSignup() {
  return (
    <div className="admin-signup">
      <main className="admin-inner">
        <div className="signup-right">
          <h1><FaUserShield /> Sign Up as Admin</h1>
          <p>Create an administrator account for system management 
            by providing the appropriate detail required of each input.</p>

          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Staff ID" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />

            <button type="submit" className="primary-btn">Create Account</button>
          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
        <div className="signup-left">
          <h3>Welcome</h3>
          <div className="signup-content">
            <h1>LibraMate Management System</h1>
            <p>
              The Admin Sign Page allows authorized administrators to securely 
              access the backend of the Library Management System 
              in order to manage books, users, transactions, and system settings.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
