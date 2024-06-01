import React, { useState } from "react";
import "../styles/SharkContainer.scss";
import closeIcon from "../images/closeIcon.svg";

const SharkContainer = ({ setShowShark }) => {

  const hanldeClick = () => {
    setShowShark(false);
  };

  return (
    <div className="shark-container">
      <img
        src="https://www.plusgold.in/images/banner_shark_tank_india.png"
        alt="sharkTankBanner"
        className="shark-img"
      />
      <div className="close-btn" onClick={hanldeClick}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
};

export default SharkContainer;
