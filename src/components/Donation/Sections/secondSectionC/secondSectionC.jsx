import React, { useState } from "react";
import "../secondSectionC/secondSectionC.css";

const SecondSectionC = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/donations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: parseFloat(formData.amount),
        }),
      });

      if (response.ok) {
        alert("Donation submitted successfully!");
        setFormData({
          name: "",
          amount: "",
          message: "",
        });
      } else {
        alert("There was an error.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the donation.");
    }
  };

  return (
    <div className="contact-third-container">
      <div className="contact-third-upper-container">
        {/* Optional heading or message */}
      </div>
      <div className="contact-third-lower-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              id="id-field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              id="select-field"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
            />
            <textarea
              id="message-field"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
            <button type="submit" id="submit-btn">
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionC;