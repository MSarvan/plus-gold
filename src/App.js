import { useState } from "react";
import AppWorkSection from "./components/AppWorkSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SaveSection from "./components/SaveSection";
import SharkContainer from "./components/SharkContainer";
import "./styles/App.scss";

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
      </div>
    </div>
  );
}

export default App;
