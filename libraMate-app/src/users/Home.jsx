import "../App.css";
import heroImg from "../assets/hero.jfif"; 
import { HoverButton } from "../components/HoverButton.jsx";
import { FaUserShield, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">LibraMate System Management</h2>
        <div className="nav-links">
          <Link to="/admin/signup" className="nav-btn">Admin</Link>
          <Link to="/student/signup" className="nav-btn">Student</Link>
        </div>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1>System management for LibraMate.</h1>
          <p>
            Users can log in by selecting the appropriate button corresponding
            to their role or academic status within the institution.
          </p>
          <p className="signup">
            Don’t have an account? <span><a href="#">Sign Up</a></span>
          </p>

          <div className="hero-actions">
            <Link to="/admin/signup">
              <HoverButton variant="default" icon={FaUserShield}>Admin</HoverButton>
            </Link>

            <Link to="/student/signup">
              <HoverButton variant="secondary" icon={FaUserGraduate}>Student</HoverButton>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Library Illustration" />
        </div>
      </main>

      <footer className="footer">
        <span><a href="#">About Us</a></span>
        <span><a href="#">Contact Us</a></span>
        <span><a href="#">Terms & Conditions</a></span>
        <span><a href="#">Privacy Policy</a></span>
      </footer>
    </div>
  );
}
