import "./Student.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft, FaUserGraduate, FaGraduationCap } from "react-icons/fa";
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
  const studentID = form.studentID.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (!fullName || !studentID || !password || !confirmPassword) {
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

  if (studentID !== "ID1234-5") {
    setType("error");
    setMessage("Invalid Student ID.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    return;
  }

  if (password === "student1234") {
    setType("success");
    setMessage("Student account created successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  } else {
    setType("error");
    setMessage("Password must match student credentials.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
};
  return (

    <div className="student-signup">

      <main className="student-inner">

        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>

        {/* LEFT SIDE (FORM) */}
        <div className="signup-left">

        {/* Background icon */}
          
          <FaUserGraduate className="student-bg-icon"/>

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
              <FaUserGraduate className="input-icon"/>
              <input
                name="studentID"
                type="text"
                placeholder="Student ID"
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

            <div className="input-group">
              <FaLock className="input-icon"/>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>

            <button type="submit" className="primary-btn">
             CREATE ACCOUNT
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

            <h1>LibraMate Management System</h1>

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