import { Routes, Route, Navigate } from "react-router-dom";
import {Login} from "./pages/Login";
import {Dashboard} from "./pages/Dashboard";
import {NotFound} from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Redirect example */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
