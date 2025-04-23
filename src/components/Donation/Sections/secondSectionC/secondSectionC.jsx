import React, { useEffect, useState } from "react";
import Amounts from "../amounts/amounts.jsx";
import "../secondSectionC/secondSectionC.css";

const SecondSectionC = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    message: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  // Load saved values and payment info from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedAmount = localStorage.getItem("amount");
    const savedPayment = localStorage.getItem("paymentSuccess");
    const savedPaymentData = localStorage.getItem("paymentData");

    if (savedName && savedAmount) {
      setFormData((prev) => ({
        ...prev,
        name: savedName,
        amount: savedAmount,
      }));
    }

    if (savedPayment === "true" && savedPaymentData) {
      setPaymentSuccess(true);
      setPaymentData(JSON.parse(savedPaymentData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentSuccess) {
      alert("Please complete payment before submitting the form.");
      return;
    }

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
        alert("🎉 Donation submitted successfully!");

        // Clear form and localStorage
        setFormData({
          name: "",
          amount: "",
          message: "",
        });

        setPaymentSuccess(false);
        setPaymentData(null);

        localStorage.removeItem("name");
        localStorage.removeItem("amount");
        localStorage.removeItem("paymentSuccess");
        localStorage.removeItem("paymentData");
      } else {
        alert("There was an error submitting the donation.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the donation.");
    }
  };

  return (
    <div className="contact-third-container">
      <div className="contact-third-upper-container"></div>
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
              required
            />
            <input
              id="select-field"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              required
            />

            {/* Stripe payment trigger */}
            <Amounts name={formData.name} amount={formData.amount} />

            <textarea
              id="message-field"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />

            <button
              type="submit"
              id="submit-btn"
              disabled={!paymentSuccess}
              title={!paymentSuccess ? "Please complete payment first" : ""}
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionC;
