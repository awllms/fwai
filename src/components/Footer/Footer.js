import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="Footer">
      <span className="Footer-text">
        <a
          className="Footer-links"
          href="https://awllms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2024 awllms
        </a>
      </span>
    </footer>
  );
};

export default Footer;
