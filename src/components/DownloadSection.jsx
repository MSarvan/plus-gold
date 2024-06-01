import React from "react";
import mobile from "../images/mobile.svg";
import download from "../images/download.svg";
import "../styles/DownloadSection.scss";

const DownloadSection = () => {
  return (
    <div className="download-section">
      <div className="download-container">
        <div className="download-left-area">
          <h2 className="download-heading-gr">Download the App</h2>
          <p className="download-sub-heading-gr">
            Plus, a revolutionary app that helps Indian homemakers to pre-plan
            their jewellery purchase by saving monthly & gaining 10% IRR
          </p>
          <div>
            <img src={download} alt="download-ad" />
          </div>
        </div>
        <div className="download-right-area">
            <img src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
