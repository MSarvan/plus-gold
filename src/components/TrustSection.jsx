import React from "react";
import "../styles/TrustSection.scss";
import jwellers from "../images/jwellers.svg";

const TrustSection = () => {
  return (
    <div className="trust-section">
      <div className="trust-container">
        <h2 className="trust-heading-gr">Trusted by the best Jewellers</h2>
        <p className="trust-sub-heading-gr">
          Redeem your savings at more than 1000 stores across 520+ cities
        </p>
        <div className="jwellers-div">
          <img src={jwellers} alt="jwellers" />
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
