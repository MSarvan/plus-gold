import React from "react";
import "../styles/PriceTrendSection.scss";
import graph from "../images/price-graph.svg";

const PriceTrendSection = () => {
  return (
    <div className="pricetrend-section">
      <div className="pricetrend-container">
        <img src={graph} alt="price-graph" />
      </div>
    </div>
  );
};

export default PriceTrendSection;
