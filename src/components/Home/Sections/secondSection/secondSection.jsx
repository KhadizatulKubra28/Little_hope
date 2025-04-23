import React from "react";
import "../secondSection/secondSection.css";
import volunteerPicture from "../../../Images/volunteer.png";
import { useNavigate } from "react-router-dom";
import AnalyticsDashboard from "../AnalyticsDashboard/AnalyticsDashboard";  

function secondSection() {
  const navigate = useNavigate();
  const handleVolunteerclick = () =>{
    navigate("/volunteer");
  };
  return (
    <>
    <div className="home-second-section">
      <div className="second-container">
        <div className="tablet-second-item">
          <div className="second-first-item">
            <h1>Do You Want to Work for the Needed Community?</h1>
          </div>
          <div className="second-second-item">
            <button onClick={handleVolunteerclick}>
              Become A Volunteer
            </button>
          </div>
        </div>
        <div className="second-third-item">
          <img
            src={volunteerPicture}
            alt="volunteer picture"
            id="volunteer-pic"
          />
        </div>
      </div>      
    </div>

    <AnalyticsDashboard /> 
    </>
  );
};
export default secondSection;
