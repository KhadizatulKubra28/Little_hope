import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";
import "./analyticsDashboard.css";

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/donations/analytics/", {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error("Analytics fetch failed:", err));
  }, []);

  return (
    <div className="analytics-container">
      <h2>📊 Donation Analytics</h2>

      {analytics ? (
        <>
          {/* Stats Cards */}
          <ul className="analytics-stats">
            <li className="analytics-card">
              <div className="analytics-card-icon">
                <i className="fas fa-donate"></i>
              </div>
              <div className="analytics-card-content">
                <span className="analytics-card-label">Total Donations</span>
                <span className="analytics-card-value">
                  ${analytics.total_donations}
                </span>
              </div>
            </li>

            <li className="analytics-card">
              <div className="analytics-card-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <div className="analytics-card-content">
                <span className="analytics-card-label">Active Volunteers</span>
                <span className="analytics-card-value">
                  {analytics.active_volunteers || 0}
                </span>
              </div>
            </li>
          </ul>

          {/* Top Donors */}
          <div className="chart-card">
            <h4>🏅 Top Donors</h4>
            <ul className="top-donor-list">
              {analytics.top_donors.map((donor, idx) => (
                <li key={idx} className="top-donor-item">
                  <span className="top-donor-rank">#{idx + 1}</span>
                  <span className="top-donor-name">{donor.name}</span>
                  <span className="top-donor-amount">${donor.total}</span>
                </li>
            ))}
          </ul>
        </div>
          {/* Monthly Donations Chart */}
          <div className="chart-card">
            <h4>📈 Monthly Donations</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analytics.monthly_donations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <p>Loading analytics...</p>
      )}
    </div>
  );
};

export default AnalyticsDashboard;