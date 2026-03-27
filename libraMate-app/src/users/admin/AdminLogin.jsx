import "./Admin.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaIdBadge, FaUserShield } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import adminImg from "../../assets/admin-login-bg.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const staffId = e.target.staffId.value;

  if (
    email === "admin@mail.com" &&
    password === "admin1234" &&
    staffId === "AD1234-5"
  ) {
    setType("success");
    setMessage("Login successful. Redirecting...");
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1200);
  } else {
    setType("error");
    setMessage("Invalid admin credentials.");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  }
};
  

  return (
    <div className="admin-login">
      <main className="admin-inner">
        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>
            {/* LEFT SIDE  (FORM)*/}
            <div className="login-right">

          {/* Background icon */}
                <FaUserShield className="admin-bg-icon"/>

                <h2>Login As Admin</h2>

                <p>
                  Login as admin by providing the various 
                  inputs with the appropriate detail required of each.
                </p>

                <form className="signup-form" onSubmit={handleLogin}>

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

                <button type="submit" className="primary-btn">
                  Login
                </button>

                {message && (
                  <p className={`form-message ${type}`}>
                    {message}
                  </p>
                )}

                </form>

                <p className="signup-footer">
                 Don't have an account? <Link to="/admin/signup">Sign Up</Link>
                </p>

              </div>

           {/* RIGHT SIDE (*/}
            <div className="login-left">

                    <div className="login-content">
                      <h1>LibraMate Management System</h1>

                      <p>
                        The Admin Login Page allows authorized administrators 
                         Library Management System in order to manage books, users, transactions, and system settings.
                      </p>
                    </div>
                    <div className="login-image">
                      <img src={adminImg} alt="admin login" />
                    </div>
              </div>

      </main>
    </div>
  );
}