import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";  // Import the updated CSS

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", credentials);
      localStorage.setItem("access_token", response.data.access); // Store the JWT token
      localStorage.setItem("refresh_token", response.data.refresh);
      navigate("/admin/dashboard"); // Redirect to the admin dashboard
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-upper-container"></div>
      <div className="admin-login-lower-container">
        <div className="form-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              id="id-field"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              id="select-field"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button
              type="submit"
              id="submit-btn"
            >
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
