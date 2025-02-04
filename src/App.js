import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import FurUnternehmen from './components/FurUnternehmen';
import FurBewerben from './components/FurBewerben';
import OffeneStellen from './components/OffeneStellen';
import UNSEREDIENSTLEISTUNGEN from './components/UNSEREDIENSTLEISTUNGEN';
import UberUNS from './components/UberUNS';
import Kontakt from './components/Kontakt';
import Bewerben from './components/Bewerben';
import Anfrageformular from './components/anfrageformular';
import Formular2 from './components/Formular2';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
       <ScrollToTopButton />
      <NavBar />
      <Routes>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/unsere" element={<UNSEREDIENSTLEISTUNGEN/>} />
        <Route path="/unternehmen" element={<FurUnternehmen />} />
        <Route path="/bewerber" element={<FurBewerben />} />
        <Route path="/stellen" element={<OffeneStellen />} />
        <Route path="/uber-uns" element={<UberUNS />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path='/bewerbenbutton' element={<Bewerben />} />
        <Route path="/anfrageformular" element={<Anfrageformular />} />
        <Route path="/anfrageformular2" element={<Formular2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
