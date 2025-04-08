import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FirstSectionSliderData from "../Sliders/FirstSectionSliderData.jsx";
import "../Sliders/FirstSectionSlider.css";

function FirstSectionSlider() {
  const items = FirstSectionSliderData.map((type) => {
    return (
      <div className="item-firstSection" key={type.name}>
        <img src={type.image} alt={type.name} />
        <br />
        <a href="#"> {type.name} </a>
        <p> {type.description} </p>
      </div>
    );
  });
  return (
    <div className="test1">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 },
          767: { items: 2 },
          1023: { items: 3 },
          1439: { items: 4 },
        }}
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={3000}
      />
    </div>
  );
}
export default FirstSectionSlider;
