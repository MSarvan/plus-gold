import React from "react";
import wedding from "../images/wedding-card.svg";
import anniversary from "../images/anniversary-card.svg";
import dhanteras from "../images/dhanteras.svg";
import "../styles/LifeGoalsSection.scss";

const LifeGoalsSection = () => {
  return (
    <div className="lifegoals-section">
      <div className="lifegoals-container">
        <h2 className="save-for-heading-gr">Save for life goals</h2>
        <p className="save-for-sub-heading-gr">
          Save in Plus Gold for life events that matter
        </p>
        <div className="save-for-cards-container">
          <div className="each-save-for-card-div">
            <div className="each-save-for-card">
              <img src={wedding} alt="wedding" />
            </div>
          </div>
          <div className="each-save-for-card-div">
            <div className="each-save-for-card">
              <img src={anniversary} alt="anniversary" />
            </div>
          </div>
          <div className="each-save-for-card-div">
            <div className="each-save-for-card">
              <img src={dhanteras} alt="dhanteras" />
            </div>
          </div>
        </div>
        <div className="start-now-div">
            <button>Start Saving Now</button>
        </div>
      </div>
      <div className="curve-div"></div>
    </div>
  );
};

export default LifeGoalsSection;
