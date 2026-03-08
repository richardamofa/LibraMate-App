import "./Admin.css";
import { FaUser, FaEnvelope, FaLock, FaIdBadge, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import adminImg from "/src/assets/admin-sign-bg.png";

export default function AdminSignup() {
  return (
    <div className="admin-signup">
      <main className="admin-inner">

        {/* RIGHT SIDE */}
        <div className="signup-right">

          {/* Background icon */}
                <FaUserShield className="admin-bg-icon"/>

                <h2>Sign Up as Admin</h2>

                <p>
                Create an administrator account by providing the appropriate
                information below.
                </p>

                <form className="signup-form">

                <div className="input-group">
                  <FaUser className="input-icon"/>
                  <input type="text" placeholder="Full Name" required />
                </div>

                <div className="input-group">
                  <FaEnvelope className="input-icon"/>
                  <input type="email" placeholder="Email Address" required />
                </div>

                <div className="input-group">
                  <FaIdBadge className="input-icon"/>
                  <input type="text" placeholder="Staff ID" required />
                </div>

                <div className="input-group">
                  <FaLock className="input-icon"/>
                  <input type="password" placeholder="Password" required />
                </div>

                <div className="input-group">
                  <FaLock className="input-icon"/>
                  <input type="password" placeholder="Confirm Password" required />
                </div>

                <button type="submit" className="primary-btn">
                  Create Account
                </button>

                </form>

                <p className="signup-footer">
                 Already have an account? <Link to="/">Login</Link>
                </p>

              </div>

             {/* LEFT SIDE */}
              <div className="signup-left">
                    <h3>Welcome</h3>

                    <div className="signup-content">
                      <h1>LibraMate Management System</h1>

                      <p>
                        The Admin Sign Page allows authorized administrators to securely
                        access the backend of the Library Management System in order to
                        manage books, users, transactions, and system settings.
                      </p>
                    </div>
                    <div className="signup-image">
                      <img src={adminImg} alt="admin signup" />
                    </div>
              </div>

      </main>
    </div>
  );
}