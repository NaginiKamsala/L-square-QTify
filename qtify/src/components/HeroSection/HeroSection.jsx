import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../HeroImage/HeroImage";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <HeroImage height={"200px"} width={"200px"} />
      </div>
    </div>
  );
}

export default HeroSection;
