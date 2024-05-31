import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SharkContainer from './components/SharkContainer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <SharkContainer />
      <Navbar />
      {/* <HeroSection />
      <Footer /> */}
    </div>
  );
}

export default App;
