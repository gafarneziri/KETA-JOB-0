import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

const FurBewerben = () => {
  const [activeSection, setActiveSection] = useState(''); // Define the state for activeSection

  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center">
     <div>
      <div className="sections flex space-x-16 text-white uppercase text-[40px] font-Montserrat pt-20">
        <Link
          to="/unternehmen"
          className={`cursor-pointer font-normal ${activeSection === 'unternehmen' ? 'border-b-4 border-white' : ''}`}
          onClick={() => setActiveSection('unternehmen')}
        >
          FÜR UNTERNEHMEN
        </Link>
        <Link
          to="/bewerber"
          className={`cursor-pointer font-normal ${activeSection === 'bewerber' ? 'border-b-4 border-white' : ''}`}
          onClick={() => setActiveSection('bewerber')}
        >
          FÜR BEWERBER
        </Link>
        <Link
          to="/stellen"
          className={`cursor-pointer font-normal ${activeSection === 'stellen' ? 'border-b-4 border-white' : ''}`}
          onClick={() => setActiveSection('stellen')}
        >
          OFFENE STELLEN
        </Link>
      </div>

      {/* The thin white line to maintain styling consistency */}
      <div className="h-px bg-gray-500 mt-0 w-[1250px] "></div>
    </div>
    </div>
  );
};

export default FurBewerben;
