import React from "react";
import Heroheadphones from "../../assets/hero_headphones.png";

function HeroImage() {
  return (
    <>
      <img
        src={Heroheadphones}
        alt="hero section"
        style={{
          width: "212px",
          height: "212px",
        }}
      />
    </>
  );
}

export default HeroImage;
