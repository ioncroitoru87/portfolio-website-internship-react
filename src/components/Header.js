import React from "react";
import HeaderLogo from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <header className="header container">
      <div class="header-container">
        <div class="logo">
          <img src={HeaderLogo} alt="logo" />
        </div>
        <button class="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
