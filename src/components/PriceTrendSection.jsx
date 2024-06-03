import React, { useState } from "react";
import "../styles/PriceTrendSection.scss";
import week from "../images/1W.png";
import oneMonth from "../images/1M.png";
import sixMonths from "../images/6M.png";
import oneYear from "../images/1Y.png";
import threeYears from "../images/3Y.png";
import max from "../images/Max.png";

const PriceTrendSection = () => {
  const [graph, setGraph] = useState("1W");

  const handleClick = (val) => {
    setGraph(val);
  };

  return (
    <div className="pricetrend-section">
      <div className="pricetrend-container">
        <div className="graph-container">
          <img
            src={
              graph === "1W"
                ? week
                : graph === "1M"
                ? oneMonth
                : graph === "6M"
                ? sixMonths
                : graph === "1Y"
                ? oneYear
                : graph === "3Y"
                ? threeYears
                : max
            }
            alt=""
          />
        </div>
        <div className="btns-container">
          <button
            onClick={() => handleClick("1W")}
            className={graph === "1W" ? "selected-btn" : ""}
          >
            1W
          </button>
          <button
            onClick={() => handleClick("1M")}
            className={graph === "1M" ? "selected-btn" : ""}
          >
            1M
          </button>
          <button
            onClick={() => handleClick("6M")}
            className={graph === "6M" ? "selected-btn" : ""}
          >
            6M
          </button>
          <button
            onClick={() => handleClick("1Y")}
            className={graph === "1Y" ? "selected-btn" : ""}
          >
            1Y
          </button>
          <button
            onClick={() => handleClick("3Y")}
            className={graph === "3Y" ? "selected-btn" : ""}
          >
            3Y
          </button>
          <button
            onClick={() => handleClick("Max")}
            className={graph === "Max" ? "selected-btn" : ""}
          >
            Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceTrendSection;
