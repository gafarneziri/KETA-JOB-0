import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OffeneStellen = () => {
  const location = useLocation(); // Hook to access the current route

  // Determine the active section based on the current URL pathname
  const activeSection = (() => {
    switch (location.pathname) {
      case '/unternehmen':
        return 'unternehmen';
      case '/bewerber':
        return 'bewerber';
      case '/stellen':
        return 'stellen';
      default:
        return '';
    }
  })();

  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center">
      <div>
        <div className="sections flex space-x-16 text-white uppercase text-[40px] font-Montserrat pt-20">
          <Link
            to="/unternehmen"
            className={`cursor-pointer font-normal ${activeSection === 'unternehmen' ? 'border-b-4 border-white' : ''}`}
          >
            FÜR UNTERNEHMEN
          </Link>
          <Link
            to="/bewerber"
            className={`cursor-pointer font-normal ${activeSection === 'bewerber' ? 'border-b-4 border-white' : ''}`}
          >
            FÜR BEWERBER
          </Link>
          <Link
            to="/stellen"
            className={`cursor-pointer font-normal ${activeSection === 'stellen' ? 'border-b-4 border-white' : ''}`}
          >
            OFFENE STELLEN
          </Link>
        </div>

        {/* The thin white line to maintain styling consistency */}
        <div className="h-px bg-gray-500 mt-0 w-[1200px] "></div>
      </div>
    </div>
  );
};

export default OffeneStellen;
