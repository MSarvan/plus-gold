import React from "react";
import "../styles/Navbar.scss";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <div>Start Saving</div>
          <div>Gold Rush Festival</div>
          <div>Partner with us</div>
          <div className="download-btn">Download App</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
