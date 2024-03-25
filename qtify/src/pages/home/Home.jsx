import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <Section type={"top"} title="Top Albums" />
      <Section type={"new"} title="New Albums" />
      <Section type={"songs"} title={"songs"} />
    </div>
  );
}

export default Home;
