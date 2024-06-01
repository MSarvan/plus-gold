import React from "react";
import "../styles/SharkTankContainer.scss";
import thumbnail from '../images/sharktank.svg';
import { FaArrowRight } from "react-icons/fa6";

const SharkTankContainer = () => {
  return (
    <div className="sharktank-section">
      <div className="sharktank-container">
        <div className="shark-bg">
          <img
            src="https://www.plusgold.in/images/sharkTankBgImage.png"
            alt=""
          />
        </div>
        <div className="sharktank-textarea">
          <div className="left-text-area">
            <div>
              <p>Plus Gold appearance in</p>
              <img
                src="https://www.plusgold.in/images/sharkTankLogo.png"
                alt=""
              />
            </div>
            <div className="mt-4">
              <p>
                Watch our Shark <br /> <span> Tank pitch&nbsp; <FaArrowRight /></span>
              </p>
            </div>
          </div>
          <div className="sharktank-vid-div">
            <div>
                <img src={thumbnail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharkTankContainer;
