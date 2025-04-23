import React from "react";
import FirstSection from "../../../Home/Sections/firstSection/firstSection.jsx";
import "./firstSectionProject.css";

function firstSectionProject() {
  return (
    <section className='Project-first-section'>
      <div className='Project-first-section-container10'>
        <div className='first-section-Project-centered-div'>
          <h2>Ongoing/Complete Projects</h2>
          <p>
            <a href="/">Home</a> / Projects
          </p>
        </div>
      </div>
      <div className="Project-first-section">
      <FirstSection />
    </div>
    </section>
  );
}

export default firstSectionProject;
