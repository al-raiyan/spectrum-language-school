import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="text-center p-3">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="">
            Spectrum Language School
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
