import React from "react";
import FirstSection from "../../../Home/Sections/firstSection/firstSection.jsx";
import "../firstSectionAbout/firstSectionAbout.css";

function firstSectionAbout() {
  return (
    <section className='about-first-section'>
      <div className='about-first-section-container10'>
        <div className='first-section-about-centered-div'>
          <h2>Ongoing/Complete Projects</h2>
          <p>
            <a href="/">Home</a> / Projects
          </p>
        </div>
      </div>
      <div className="about-first-section">
      <FirstSection />
    </div>
    </section>
  );
}

export default firstSectionAbout;
