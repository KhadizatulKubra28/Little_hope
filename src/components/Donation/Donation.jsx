import React from 'react'
import FirstSectionC from './Sections/firstSectionC/firstSectionC'
import SecondSectionC from './Sections/secondSectionC/secondSectionC'
import ThardSectionC from './Sections/thardSectionC/thardSectionC'
import { useLocation } from "react-router-dom";
import '../Donation/donation.css'

const Donation = () => {
  const location = useLocation();
  const paymentSuccess = location.state?.paymentSuccess || false;
  const paymentData = location.state?.paymentData || null;

  return (
    <div className='contact-page-container'>
      <FirstSectionC />
      <SecondSectionC paymentSuccess={paymentSuccess} paymentData={paymentData} />
      <ThardSectionC />
    </div>
  );
};

export default Donation;