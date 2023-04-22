import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
  <footer className="bg-dark text-white py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-6 bg-dark">
        <p>BYUC &copy; 2023</p>
      </div>
      <div className="col-md-6 text-md-end bg-dark">
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
