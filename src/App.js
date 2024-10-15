import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/dienstleistungen" element={<Page2 />} />
        <Route path="/uber-uns" element={<Page3 />} />
        <Route path="/kontakt" element={<Page4 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;