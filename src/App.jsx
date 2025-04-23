import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Public Pages
import Home from "./components/Home/Home";
import Volunteer from './components/Volunteer/Volunteer';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Donation from './components/Donation/donation';
import DonationSuccess from './components/Donation/DonationSuccess';
import DonationCancelled from './components/Donation/DonationCancelled';

// Admin Panel Pages (correctly imported from AdminPanel folder)
import AdminLogin from './components/AdminPanel/AdminLogin.jsx';
import AdminDashboard from './components/AdminPanel/AdminDashboard.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/donation-cancelled" element={<DonationCancelled />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
