import React from "react";
import "./Footer.css";
import logo from "../github.svg";

const Footer = () => {
  return (
    <footer>
      <p>made with love by ah</p>
      <br />
      <br />
      <a href="https://github.com/hakue1990" target="_blank" class="github">
        {" "}
        <img src={logo} className="Footer-github-logo" alt="logo" />
      </a>
    </footer>
  );
};

export default Footer;
