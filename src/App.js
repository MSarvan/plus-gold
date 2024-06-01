import { useState } from "react";
import AppWorkSection from "./components/AppWorkSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SaveSection from "./components/SaveSection";
import SharkContainer from "./components/SharkContainer";
import "./styles/App.scss";
import SharkTankContainer from "./components/SharkTankContainer";
import LifeGoalsSection from "./components/LifeGoalsSection";
import PriceTrendSection from "./components/PriceTrendSection";
import TrustSection from "./components/TrustSection";
import MediaSection from "./components/MediaSection";
import DownloadSection from "./components/DownloadSection";

function App() {
  const [showShark, setShowShark] = useState(true);

  return (
    <div className="App">
      {showShark ? (
        <SharkContainer setShowShark={setShowShark} />
      ) : (
        ""
      )}
      <Navbar />
      <div
        className="content"
        style={{
          height: showShark ? "calc(100% - 130px)" : "calc(100% - 75px)",
        }}
      >
        <HeroSection />
        <SaveSection />
        <AppWorkSection />
        <SharkTankContainer />
        <LifeGoalsSection />
        <PriceTrendSection />
        <TrustSection />
        <MediaSection />
        <DownloadSection />
      </div>
    </div>
  );
}

export default App;
