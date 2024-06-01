import React from "react";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text-section">
          <div className="hero-textarea">
            <p className="save-smartly-text">Save smartly in </p>
            <p className="gold-text"> GOLD</p>
            <p className="extra-gold-text">
              And get 10% extra gold every year!
            </p>
            <div className="saving-div">
              <button>Start Saving Now</button>
              <span>Trusted by 2Lakh + Indians</span>
            </div>
            <div className="powered-div">
              <p className="powered-text">Powered by</p>
              <div>
                <img
                  src="https://www.plusgold.in/images/augmontLogo.svg"
                  alt="augmontLogo"
                />
              </div>
              <div>
                <img
                  src="https://www.plusgold.in/images/cashFreeSvnLogo.svg"
                  alt="cashFreeSvnLogo"
                />
              </div>
              <div>
                <img src="https://www.plusgold.in/images/npciLogo.svg" alt="npciLogo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img-section">
          <div className="hero-bgImg">
            <div className="heroImg">
              <img
                src="https://www.plusgold.in/images/sonakshiSinha.svg"
                alt="sonakshiSinha"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
