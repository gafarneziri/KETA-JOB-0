import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Dienstleistungen from './components/Dienstleistungen';
import Dienstleistungen1 from './components/Dienstleistungen1';
import Dienstleistungen2 from './components/Dienstleistungen2';
import Dienstleistungen3 from './components/Dienstleistungen3';
import UberUNS from './components/Uberuns';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/dienstleistungen" element={<Dienstleistungen/>} />
        <Route path="/dienstleistungen1" element={<Dienstleistungen1/>}/>
        <Route path="/dienstleistungen2" element={<Dienstleistungen2/>}/>
        <Route path="/uber-uns" element={<UberUNS />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;