import React from "react";
import "../styles/AppWorkSection.scss";

const AppWorkSection = () => {
  const videos = [
    {
      id: 0,
      heading: "What is Plus Gold?",
      subText: "Built on Augmont",
      image: "https://www.plusgold.in/images/whatIsPlus.png",
      alt: "whatIsPlus",
    },
    {
      id: 1,
      heading: "How to save on Plus?",
      subText: "SIP or One-time",
      image: "https://www.plusgold.in/images/howToSave.png",
      alt: "howToSave",
    },
    {
      id: 2,
      heading: "How to Redeem?",
      subText: "Cash, Gold or Jewellery",
      image: "https://www.plusgold.in/images/howToRedeem.png",
      alt: "howToRedeem",
    },
  ];

  const cards = [
    {
      line1: "No Lock-in on ",
      line2: " Plus Gold",
      image: "https://www.plusgold.in/images/noLockInImage.png",
      alt: "noLockInImage",
    },
    {
      line1: "Easy ",
      line2: " Withdrawal",
      image: "https://www.plusgold.in/images/withdrawalImage.png",
      alt: "withdrawalImage",
    },
    {
      line1: "Fixed Extra ",
      line2: " Gold p.a.",
      image: "https://www.plusgold.in/images/extraGoldPA.png",
      alt: "extraGoldPA",
    },
    {
      line1: "Bonus benefits ",
      line2: " from Jeweller",
      image: "https://www.plusgold.in/images/bonusFromJewellers.png",
      alt: "bonusFromJewellers",
    },
  ];

  return (
    <div className="appwork-section">
      <div className="appwork-container">
        <h2 className="how-does-the-app-work-heading-gr">
          How does the app work
        </h2>
        <p className="how-does-the-app-work-sub-heading-gr">
          Watch our short videos to learn more about&nbsp;our&nbsp;app
        </p>
        <div className="videos-container">
          {videos.map((e, i) => {
            return (
              <div className="each-video-div" key={i}>
                <div className="each-video">
                  <div>
                    <img src={e.image} alt={e.alt} />
                  </div>
                  <h5>{e.heading}</h5>
                  <p>{e.subText}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cards-container">
          {cards.map((e, i) => {
            return (
              <div className="each-card-div" key={e.alt}>
                <div className="each-card">
                  <div>
                    <img
                      src={e.image}
                      alt={e.alt}
                    />
                  </div>
                  <div className="caption-div">
                    <p>{e.line1}</p>
                    <p>{e.line2}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppWorkSection;
