import React from "react";
import "../styles/SaveSection.scss";

const SaveSection = () => {
  return (
    <div className="save-section">
      <div className="save-container">
        <div className="save-img">
          <img
            src="https://www.plusgold.in/images/oldWomenShowingJewellery.png"
            alt="an old women showing jewellery to a girl"
          />
        </div>
        <div className="save-textarea">
            <h2 className="save-like-your-mom-heading">Save like your mom</h2>
            <p className="helvetica-neue mb-1 buy-10grams-gr letter-spacing-for-gr">
              Buy 10gm <span className="gold-word">Gold</span> &amp; Get 1gm
              <span className="gold-word"> Gold</span> Extra
            </p>
            <p
              style={{ maxWidth: "470px", color: "#2B2B2B" }}
              className="helvetica-neue letter-spacing-for-gr save-like-your-mom-subtext"
            >
              Buy Gold through daily, weekly or monthly SIPs, or through
              One-Time payments &amp; get 10% extra Gold from Plus's partner
              jewellers
            </p>
        </div>
      </div>
    </div>
  );
};

export default SaveSection;
