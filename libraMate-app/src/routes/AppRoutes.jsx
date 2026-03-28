import { Routes, Route } from "react-router-dom";
import Home from "../users/Home";
import AdminSignup from "../users/admin/AdminSignup";
import AdminLogin from "../users/admin/AdminLogin";
import AdminDashboard from "../users/admin/AdminDashboard";
import StudentSignup from "../users/student/StudentSignup";
import StudentLogin from "../users/student/StudentLogin";
import PageWrapper from "../components/PageWrapper";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Admin */}
      <Route path="/admin/signup" element={<PageWrapper><AdminSignup /></PageWrapper>} />
      <Route path="/admin/login" element={<PageWrapper><AdminLogin /></PageWrapper>} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />


      {/* Student */}
      <Route path="/student/signup" element={<PageWrapper><StudentSignup /></PageWrapper>} />
      <Route path="/student/login" element={<PageWrapper><StudentLogin /></PageWrapper>} />

    </Routes>
  );
}