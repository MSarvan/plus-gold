import React from "react";
import vccircle from "../images/vccircle.svg";
import forbes from "../images/forbes.svg";
import yourstory from "../images/yourstory.svg";
import "../styles/MediaSection.scss";

const MediaSection = () => {
  return (
    <div className="media-section">
      <div className="media-container">
        <h2 className="media-heading-gr">The media loves Plus</h2>
        <p className="media-sub-heading-gr">
          Top publications & news media talks about us
        </p>
        <div className="media-cards-container">
          <div className="each-media-card-div">
            <div className="each-media-card">
              <img src={vccircle} alt="vccircle" />
            </div>
          </div>
          <div className="each-media-card-div">
            <div className="each-media-card">
              <img src={forbes} alt="forbes" />
            </div>
          </div>
          <div className="each-media-card-div">
            <div className="each-media-card">
              <img src={yourstory} alt="yourstory" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
