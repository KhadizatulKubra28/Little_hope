import React, { useEffect, useState } from "react";
import "../thardSectionC/thardSectionC.css";

const thardSectionC = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/donations/");
        if (response.ok) {
          const data = await response.json();
          const lastFive = data.slice(-3).reverse();
          setDonations(lastFive);
        } else {
          console.error("Failed to fetch donations");
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      <div className="donation-history-section">
        <h2>Recent Donations</h2>
        <div className="donation-history-list">
          {donations.length === 0 ? (
            <p>No donations yet.</p>
          ) : (
            donations.map((donation, index) => (
              <div key={index} className="donation-item">
                <span className="donor-name">{donation.name}</span>
                <span className="donation-amount">${donation.amount}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default thardSectionC;
