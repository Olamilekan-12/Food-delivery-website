import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <div className="footer-logo">
          <h3>GlovPro</h3>
        </div>
        <div className="links">
            <a href="">facebook</a>
            <a href="">linkedIn</a>
            <a href="">twitter</a>
            <a href="">github</a>
        </div>
      </div>

      <div className="copy">Made with love by Bello Olamilekan 2023</div>
    </div>
  );
};

export default Footer;
