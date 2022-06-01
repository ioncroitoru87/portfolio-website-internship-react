import React from "react";
import FooterLogo from "../assets/logo-light.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container container">
        <div class="logo">
          <img src={FooterLogo} alt="footer logo" />
        </div>
        <button class="button">get started</button>
      </div>
    </footer>
  );
};

export default Footer;
