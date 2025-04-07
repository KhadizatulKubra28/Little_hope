import React from 'react';
import '../firstSection/firstSection.css';
import FirstSectionSlider from '../../../Sliders/FirstSectionSlider.jsx';

function firstSection() {
  return (
    <div className="home-first-section">
      <div className="first-container">
        <div className="first-upper-container">
          <h2>Ongoing/Complete Projects</h2>
          <p>
            Little Hope is a non-profit organization that empowers underprivileged individuals and
            communities in Bangladesh through education, youth development, women's empowerment,
            climate change, governance, and poverty alleviation.
          </p>
        </div>
        <div className="first-lower-container">
          <FirstSectionSlider />
        </div>
      </div>
    </div>
  );
}

export default firstSection;