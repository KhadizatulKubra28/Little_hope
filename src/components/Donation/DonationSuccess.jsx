// src/components/Donation/DonationSuccess.jsx
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const DonationSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      // Optional: verify with backend
      fetch(`http://localhost:8000/api/stripe/verify-session/${sessionId}/`)
        .then(res => res.json())
        .then(data => {
          console.log("Payment verified:", data);
          // Send user to SecondSectionC via Donation route with payment data
          localStorage.setItem("paymentSuccess", "true");
          localStorage.setItem("paymentData", JSON.stringify(data));
          navigate("/donation");
        })
        .catch(err => {
          console.error("Error verifying session:", err);
          navigate("/donation");
        });
    }
  }, [sessionId, navigate]);

  return (
    <div className="donation-feedback">
      <h2>🎉 Payment Successful!</h2>
      <p>Redirecting you to complete the donation form...</p>
    </div>
  );
};

export default DonationSuccess;
