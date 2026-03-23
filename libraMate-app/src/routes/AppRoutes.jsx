import { Routes, Route } from "react-router-dom";
import Home from "../users/Home";
import AdminSignup from "../users/admin/AdminSignup";
import AdminLogin from "../users/admin/AdminLogin";
import StudentSignup from "../users/student/StudentSignup";
import StudentLogin from "../users/student/StudentLogin";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Admin */}
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Student */}
      <Route path="/student/signup" element={<StudentSignup />} />
      <Route path="/student/login" element={<StudentLogin />} />

    </Routes>
  );
}