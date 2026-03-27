import "./Admin.css";
import { FaUser, FaEnvelope, FaLock, FaIdBadge, FaUserShield } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import adminImg from "../../assets/admin-sign-bg.png";

export default function AdminSignup() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleSignup = (e) => {
  e.preventDefault();

  const form = e.target;
  const fullName = form.fullName.value;
  const staffId = form.staffId.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (!fullName || !staffId || !password || !confirmPassword) {
    setType("error");
    setMessage("Please fill in all required fields.");
    return;
  }

  if (password !== confirmPassword) {
    setType("error");
    setMessage("Passwords do not match.");
    setTimeout(() => {
        setMessage("");
    }, 3000);
    return;
  }

  if (staffId !== "AD1234-5") {
    setType("error");
    setMessage("Invalid staff ID.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    return;
  }

  if (password === "admin1234") {
    setType("success");
    setMessage("Admin account created successfully!");
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1200);
  } else {
    setType("error");
    setMessage("Password must match admin credentials.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
};
  return (
    <div className="admin-signup">
      <main className="admin-inner">
        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="signup-left">

          {/* Background icon */}
                <FaUserShield className="admin-bg-icon"/>

                <h2>Sign Up as Admin</h2>

                <p>
                Create an administrator account by providing the appropriate
                information below.
                </p>

                <form className="signup-form" onSubmit={handleSignup}>

                <div className="input-group">
                  <FaUser className="input-icon"/>
                  <input name="fullName" type="text" placeholder="Full Name" required />
                </div>

                <div className="input-group">
                  <FaEnvelope className="input-icon"/>
                  <input name="email" type="email" placeholder="Email Address" required />
                </div>

                <div className="input-group">
                  <FaIdBadge className="input-icon"/>
                  <input name="staffId" type="text" placeholder="Staff ID" required />
                </div>

                <div className="input-group">
                  <FaLock className="input-icon"/>
                  <input name="password" type="password" placeholder="Password" required />
                </div>

                <div className="input-group">
                  <FaLock className="input-icon"/>
                  <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
                </div>

                <button type="submit" className="primary-btn">
                  Create Account
                </button>

                {message && (
                  <p className={`form-message ${type}`}>
                    {message}
                  </p>
                )}

                </form>

                <p className="signup-footer">
                 Already have an account? <Link to="/admin/login">Login</Link>
                </p>

              </div>

             {/* LEFT SIDE (WELCOME) */}
              <div className="signup-right">
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