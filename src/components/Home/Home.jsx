import React from 'react';
import { useEffect } from 'react';
import "../Home/Home.css";
import littleHopeLogo from '../Images/main-logo.png';
import FirstSection from './Sections/firstSection/firstSection.jsx';
import SecondSection from './Sections/secondSection/secondSection.jsx';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.getElementById("scroll-logo");
      const scrollY = window.scrollY;

      const maxScroll = 250;
      const opacity = Math.max(0, 1 - scrollY / maxScroll);
      const scale = Math.max(0.5, 1 - scrollY / (2 * maxScroll));

      if (logo) {
        logo.style.opacity = opacity;
        logo.style.transform = `translateX(-50%) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="logo-container-home" id="scroll-logo">
        <img src={littleHopeLogo} alt="Little Hope Logo" className="logo-image" />
      </div>
      <div className="main-content">
        <FirstSection/>
        <SecondSection/>
      </div>
    </>
  )
}
export default Home