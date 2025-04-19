// src/components/amounts/amounts.jsx
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51REvWMFPudohW3AgtRZVSCymOY7A7BLtl8HXWkI66V0FsoSu1i5KUb45yVnywgUEgPxZJnENh1CBUjkG7WSiMsPB00Uimck0nl");

const Amounts = ({ name, amount }) => {
  const handleStripePayment = async () => {
    if (!name || !amount) {
      alert("Please enter both name and amount before proceeding.");
      return;
    }

    // Save name & amount in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("amount", amount);

    try {
      const stripe = await stripePromise;

      const response = await fetch("http://localhost:8000/api/stripe/create-checkout-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount) * 1 }), // Stripe expects amount in cents
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe session creation failed");
      }
    } catch (error) {
      console.error("Stripe error:", error);
    }
  };

  return (
    <button
      type="button"
      id="submit-btn"
      style={{ backgroundColor: "#28a745", marginBottom: "10px" }}
      onClick={handleStripePayment}
    >
      Proceed to Payment
    </button>
  );
};

export default Amounts;
