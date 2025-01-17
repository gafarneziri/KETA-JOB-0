import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SearchIcon from '../Assets/SearchIcon.png';
import Dropdownicon from '../Assets/dropdownicon.png';

const OffeneStellen = () => {
  const location = useLocation(); // Hook to access the current route
  const navigate = useNavigate(); // Hook for navigation

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
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center pb-[60px]">
          <div>
                 <div className="sections flex space-x-4 md:space-x-16 text-white uppercase text-[10px] md:text-[40px] font-Montserrat pt-10 md:pt-20">
                   <Link
                     to="/unternehmen"
                     className={`cursor-pointer font-normal ${location.pathname === '/unternehmen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
                   >
                     FÜR UNTERNEHMEN
                   </Link>
                   <Link
                     to="/bewerber"
                     className={`cursor-pointer font-normal ${location.pathname === '/bewerber' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
                   >
                     FÜR BEWERBER
                   </Link>
                   <Link
                     to="/stellen"
                     className={`cursor-pointer font-normal ${location.pathname === '/stellen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
                   >
                     OFFENE STELLEN
                   </Link>
                 </div>
         
                 <div className="h-px bg-gray-500 mt-0 w-full md:w-[1250px]"></div>
               </div>

      <div className="flex flex-col items-center min-h-screen text-white bg-[#003049]">
        {/* Search Form Section */}
        <div className="w-full max-w-6xl flex space-x-10 items-center mt-20 mb-16">
          {/* Input with Search Icon on the Right */}
          <div className="relative w-[2500px] h-[50px]">
            <input
              type="text"
              placeholder="Job titel"
              className="p-4 pr-12 text-white bg-transparent border border-white rounded-full w-full h-full focus:outline-none placeholder-gray-400"
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Select Fields */}
          <div className="relative w-[1200px] h-[50px]">
            <select className="p-4 pl-6 text-gray-400 bg-transparent border border-white   rounded-full w-full h-full focus:outline-none appearance-none pr-12  leading-none">
              <option className="bg-[#003049] text-gray-400">Temporär</option>
              <option className="bg-[#003049] text-gray-400  ">Festanstellung</option>
            </select>
            <img
              src={Dropdownicon} // Replace with the correct path to your icon
              alt="Dropdown Icon"
              className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]"
            />
          </div>

          <div className="relative w-[1200px] h-[50px]">
            <select className="p-4 pl-6 text-gray-400 bg-transparent border border-white rounded-full w-full h-full focus:outline-none appearance-none pr-12 leading-none">
              <option className="bg-[#003049] text-gray-400">Ort & Radius</option>
              <option className="bg-[#003049] text-gray-400">5 km</option>
              <option className="bg-[#003049] text-gray-400">10 km</option>
              <option className="bg-[#003049] text-gray-400">20 km</option>
            </select>
            <img
              src={Dropdownicon} // Replace with the correct path to your icon
              alt="Dropdown Icon"
              className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]"
            />
          </div>

          {/* Search Button */}
          <button className="bg-white text-[#003049] rounded-full w-[1000px] h-[50px]">
          Suchen
          </button>
        </div>

        {/* Job Listings Section */}
        <div className="w-full max-w-6xl space-y-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="border border-white p-5 rounded-full flex items-center justify-between"
            >
              <div className="ml-6">
                <h2 className="text-xl font-semibold">IT SOFTWARE DEVELOPER</h2>
                <div className="flex space-x-4 mt-2">
                  <span className="border border-white px-4 py-1 rounded-full text-sm font-medium">
                    Zurich
                  </span>
                  <span className="border border-white px-4 py-1 rounded-full text-sm font-medium">
                  Festanstellung
                  </span>
                </div>
              </div>
              <button
                onClick={() => navigate('/bewerbenbutton')} // Navigate to the Bewerben page
                className="bg-white text-[#003049] px-6 py-2 rounded-full w-[140px] h-[45px] font-semibold mr-10"
              >
                BEWERBEN
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffeneStellen;
