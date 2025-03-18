import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true"); // ✅ Store Admin Status
      navigate("/admin/addjobss"); // ✅ Redirect to Add Jobs
    } else {
      alert("Falsches Passwort");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003049] text-white p-6">
      <h2 className="text-lg mb-2">Admin Login</h2>
      <input
        type="password"
        placeholder="Admin Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 bg-gray-800 border border-white rounded"
      />
      <button onClick={handleLogin} className="ml-2 bg-white text-[#003049] p-2 rounded">
        Login
      </button>
    </div>
  );
}

export default AdminLogin;
