import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <Section type={"top"} title="Top" />
      <Section type={"new"} title="New" />
    </div>
  );
}

export default Home;
