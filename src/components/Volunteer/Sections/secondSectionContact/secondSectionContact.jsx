import React, { useState } from "react";
import axios from "axios";
import "./SecondSectionContact.css";

const SecondSectionContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    project: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.project.trim()) newErrors.project = "Please select a project.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/volunteers/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Failed to send message.");
    }
  };

  return (
    <div className="form-section-wrapper">
      <h2 className="form-title">Become a Volunteer</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
          >
            <option value="">-- Select a Project to Join --</option>
            <option value="Food Distribution">Food Distribution program</option>
            <option value="Education for All">Digital Education Program</option>
            <option value="Healthcare Support">Helping Elder program</option>
            <option value="Fundraising Events">Make A Change program</option>
          </select>
          {errors.project && <p className="error">{errors.project}</p>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Why do you want to join?"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" id="submit-btn">
          Submit
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default SecondSectionContact;
