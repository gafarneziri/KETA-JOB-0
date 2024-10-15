import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import homePage from './components/homePage';

function App() {
  return (
    <Router>

      <NavBar />

 
      <Routes>
        <Route path="/" element={<homePage />} />
      </Routes>

      {/* The Footer remains at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;