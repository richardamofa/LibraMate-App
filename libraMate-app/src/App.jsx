import "./App.css";
import heroImg from "./assets/hero.jfif"; 
import { HoverButton } from "../components/HoverButton";
import { FaUserShield, FaUserGraduate, FaBook } from "react-icons/fa";

export default function App() {
  return (
    <div className="app">
      {/*header*/}
      <header className="navbar">
        <h2 className="logo">LibraMate System Management</h2>
        <div className="nav-links">
          <button className="nav-btn">Admin</button>
          <button className="nav-btn">Student</button>
        </div>
      </header>

      {/*main section*/}
      <main className="hero">
        <div className="hero-text">
          <h1>System management for LibraMate.</h1>
          <p>
            Users can log in by selecting the appropriate button corresponding
            to their role or academic status within the institution.
          </p>
          <p>
            The login screen allows users to access the system by clicking a
            button that corresponds to their role or academic position (e.g.,
            Student, Lecturer, Librarian, or Administrator).
          </p>
          <p className="signup">
            Don’t have an account? <span><a href="#">Sign Up</a></span>
          </p>

          <div className="hero-actions">
            <HoverButton variant="default" icon={FaUserShield}>Admin</HoverButton>
            <HoverButton variant="secondary" icon={FaUserGraduate}>Student</HoverButton>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Library Illustration" />
        </div>
      </main>

      {/*footer*/}
      <footer className="footer">
        <span><a href="#">About Us</a></span>
        <span><a href="#">Contact Us</a></span>
        <span><a href="#">Terms & Conditions</a></span>
        <span><a href="#">Privacy Policy</a></span>
      </footer>
    </div>
  );
}
