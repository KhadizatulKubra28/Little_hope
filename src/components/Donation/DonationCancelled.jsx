// src/components/Donation/DonationCancelled.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DonationCancelled = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Go back to SecondSectionC via Donation route
      navigate("/donation", { state: { paymentCancelled: true } });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="donation-feedback">
      <h2>❌ Payment Cancelled</h2>
      <p>Redirecting you back to the donation form...</p>
    </div>
  );
};

export default DonationCancelled;
