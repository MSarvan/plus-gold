import React, { useState } from "react";
import "../styles/Navbar.scss";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <div className="each-nav-item">Start Saving</div>
          <div className="each-nav-item">Gold Rush Festival</div>
          <div className="each-nav-item">Partner with us</div>
          <button className="download-btn">Download App</button>
          <div
            className="ham-menu"
            onClick={() => setMobMenuOpen(!mobMenuOpen)}
          >
            {!mobMenuOpen ? <GiHamburgerMenu /> : <IoClose />}
          </div>
        </div>
      </nav>
      {mobMenuOpen ? (
        <div className="mob-nav-items">
          <div className="each-mob-nav-item">Start Saving</div>
          <div className="each-mob-nav-item">Gold Rush Festival</div>
          <div className="each-mob-nav-item">Partner with us</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
