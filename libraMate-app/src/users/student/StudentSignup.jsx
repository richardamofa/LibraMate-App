import "./Student.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import studentImg from "../../assets/student-sign-bg.png";

export default function StudentSignup() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!fullName || !email || !password) {
      setType("error");
      setMessage("Please fill in all required fields.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (password.length < 6) {
      setType("error");
      setMessage("Password must be at least 6 characters.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    setType("success");
    setMessage("Student account created successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (

    <div className="student-signup">

      <main className="student-inner">

        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>

        {/* LEFT SIDE (FORM) */}
        <div className="signup-left">

          <h2>Sign Up as Student</h2>

          <p>
            Sign up as student by providing the various inputs
            with the appropriate detail required of each.
          </p>

          <form className="signup-form" onSubmit={handleSignup}>

            <div className="input-group">
              <FaUser className="input-icon"/>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon"/>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon"/>
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="primary-btn">
              SIGN UP
            </button>

            {message && (
              <p className={`form-message ${type}`}>
                {message}
              </p>
            )}

          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/student/login">Login</Link>
          </p>

        </div>


        {/* RIGHT SIDE (WELCOME PANEL) */}
        <div className="signup-right">

          <h3>Welcome</h3>

          <div className="signup-content">

            <h1>LibraMate System Management</h1>

            <p>
              The purpose of the Student Login is to allow students
              to securely access the Library Management System in
              order to search for books, view availability,
              monitor their borrowing history, reserve items,
              and manage their personal library-related activities.
            </p>

          </div>

          <div className="signup-image">
            <img src={studentImg} alt="student signup"/>
          </div>

        </div>

      </main>

    </div>

  );
}