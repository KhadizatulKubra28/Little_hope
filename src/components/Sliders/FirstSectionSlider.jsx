import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FirstSectionSliderData from "../Sliders/FirstSectionSliderData.jsx";
import "../Sliders/FirstSectionSlider.css";

function FirstSectionSlider() {
  const items = FirstSectionSliderData.map((type) => (
    <div className="item-firstSection" key={type.name}>
      <img src={type.image} alt={type.name} />
      <a href="#">{type.name}</a>
      <p>{type.description}</p>
    </div>
  ));

  return (
    <div className="slider-wrapper">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 2 },         // Show 2 on mobile
          768: { items: 3 },       // Show 3 on tablets
          1024: { items: 4 },      // Show 4 on larger screens
        }}
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={3000}
        animationDuration={1000}
      />
    </div>
  );
}

export default FirstSectionSlider;
