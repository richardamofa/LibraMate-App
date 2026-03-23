import "./Student.css";
import { useState } from "react";
import { FaEnvelope, FaLock, FaArrowLeft, FaUserGraduate, FaIdBadge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import studentImg from "../../assets/student-login-bg.png"

export default function StudentLogin() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const indexno = e.target.indexno.value;

    if (
      email === "student@mail.com" &&
      password === "student1234" &&
      indexno === "ID1234-5"
    ) {
      setType("success");
      setMessage("Login successful. Redirecting...");
      setTimeout(() => {
        navigate("/student/dashboard");
      }, 1200);
    } else {
      setType("error");
      setMessage("Invalid student credentials.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="student-login">
      <main className="student-inner">

        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>

        {/* LEFT SIDE (FORM) */}
        <div className="login-right">

          {/* Background icon */}
          <FaUserGraduate className="student-bg-icon"/>

          <h2>Login As Student</h2>

          <p>
            Login as a student by providing the required credentials.
          </p>

          <form className="login-form" onSubmit={handleLogin}>

            <div className="input-group">
              <FaEnvelope className="input-icon"/>
              <input name="email" type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <FaUserGraduate className="input-icon"/>
              <input name="studentID" type="text" placeholder="Student ID" required />
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
            Don’t have an account? <Link to="/student/signup">Sign Up</Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">

          <h3>Welcome</h3>

          <div className="signup-content">
            <h1>LibraMate Management System</h1>

            <p>
              The Student Login allows students to access the system to search books,
              check availability, track borrowed items, and manage their activities.
            </p>
          </div>

          <div className="signup-image">
            <img src={studentImg} alt="student login"/>
          </div>

        </div>

      </main>
    </div>
  );
}