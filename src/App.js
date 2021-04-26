import './App.css';
import Contact from './Components/Contact';
import Download from './Components/Download';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Popular from './Components/Popular';
import WCU from './Components/WhyChooseUs';

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Features/>
      <Popular/>
      <WCU/>
      <Contact/>
      <Download/>
      <Footer/>
    </>
  );
}

export default App;
