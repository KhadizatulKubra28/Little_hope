import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    } else {
      fetchVolunteers();
    }
  }, [token]);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/volunteers/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVolunteers(response.data);
    } catch (err) {
      setError("Unauthorized. Please login as admin.");
      toast.error("Unauthorized. Please login.");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/volunteers/${id}/`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchVolunteers(); // Refresh list
      toast.success(`Volunteer ${status} successfully.`);
    } catch (err) {
      console.error("Update failed", err);
      toast.error("Could not update status.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast.success("Logged out successfully!");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="volunteers-table-container">
        <table className="volunteers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Project</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.project}</td>
                <td>{v.status}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => updateStatus(v.id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => updateStatus(v.id, "rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminDashboard;
