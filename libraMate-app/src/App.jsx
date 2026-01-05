import { Routes, Route } from "react-router-dom";
import Home from "./users/Home";
import AdminSignup from "./users/admin/AdminSignup";
import StudentSignup from "./users/student/StudentSignup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/student/signup" element={<StudentSignup />} /> 
    </Routes>
  );
}
