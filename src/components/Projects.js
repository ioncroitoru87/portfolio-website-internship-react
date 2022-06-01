import React from "react";
import IconAnimation from "../assets/icon-animation.svg";
import IconDesign from "../assets/icon-design.svg";
import IconBusiness from "../assets/icon-business.svg";
import IconPhotography from "../assets/icon-photography.svg";
import IconCrypto from "../assets/icon-crypto.svg";

const Projects = () => {
  return (
    <section class="projects container">
      <div class="projects-container">
        <div class="projects-item">
          <h2>Check out our most popular courses!</h2>
        </div>
        <div class="projects-item">
          <div class="icon">
            <img src={IconAnimation} alt="animation icon" />
          </div>
          <h3>Animation</h3>
          <p>
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <a href="/" class="link">
            get started
          </a>
        </div>
        <div class="projects-item">
          <div class="icon">
            <img src={IconDesign} alt="design icon" />
          </div>
          <h3>Design</h3>
          <p>
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a href="/" class="link">
            get started
          </a>
        </div>
        <div class="projects-item">
          <div class="icon">
            <img src={IconBusiness} alt="business icon" />
          </div>
          <h3>Business</h3>
          <p>
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <a href="/" class="link">
            get started
          </a>
        </div>
        <div class="projects-item">
          <div class="icon">
            <img src={IconPhotography} alt="photography icon" />
          </div>
          <h3>Photography</h3>
          <p>
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <a href="/" class="link">
            get started
          </a>
        </div>
        <div class="projects-item">
          <div class="icon">
            <img src={IconCrypto} alt="crypto icon" />
          </div>
          <h3>Crypto</h3>
          <p>
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <a href="/" class="link">
            get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
