import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/homePage';
import FurUnternehmen from './components/FurUnternehmen';
import FurBewerben from './components/FurBewerben';
import OffeneStellen from './components/OffeneStellen';
import UNSEREDIENSTLEISTUNGEN from './components/UNSEREDIENSTLEISTUNGEN';
import UberUNS from './components/Uberuns';
import Kontakt from './components/Kontakt';
import Bewerben from './components/Bewerben';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unternehmen" element={<FurUnternehmen />} />
        <Route path="/bewerber" element={<FurBewerben />} />
        <Route path="/stellen" element={<OffeneStellen />} />
        <Route path="/uber-uns" element={<UberUNS />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path='/bewerbenbutton' element={<Bewerben />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
