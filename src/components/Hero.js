import React from "react";
import HeroImage from "../assets/image-hero-mobile.png";

const Hero = () => {
  return (
    <div class="hero container">
      <div class="hero-container">
        <div class="hero-info">
          <h1>Maximize skill, minimize budget</h1>
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button>Get Started</button>
        </div>
        <div class="hero-image">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
