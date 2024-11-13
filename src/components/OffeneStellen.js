import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '../Assets/SearchIcon.png';

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

      <div className="flex flex-col items-center min-h-screen text-white bg-[#003049]">
      {/* Search Form Section */}
      <div className="w-full max-w-6xl flex space-x-10 items-center mt-20 mb-16">
        {/* Input with Search Icon on the Right */}
        <div className="relative w-[1700px] h-[50px]">
          <input
            type="text"
            placeholder="Department of job"
            className="p-4 pr-12 text-white bg-transparent border border-white rounded-full w-full h-full focus:outline-none placeholder-gray-400"
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>

        {/* Select Fields */}
        <select className="p-4 text-gray-400 bg-transparent border border-white rounded-full w-[800px] h-[50px] focus:outline-none">
          <option className="bg-[#003049] text-gray-400">Temporary</option>
          <option className="bg-[#003049] text-gray-400">Permanent</option>
        </select>
        <select className="p-4 text-gray-400 bg-transparent border border-white rounded-full w-[800px] h-[50px] focus:outline-none">
          <option className="bg-[#003049] text-gray-400">Location Radius</option>
          <option className="bg-[#003049] text-gray-400">5 km</option>
          <option className="bg-[#003049] text-gray-400">10 km</option>
          <option className="bg-[#003049] text-gray-400">20 km</option>
        </select>

        {/* Search Button */}
        <button className="bg-white text-gray-400 rounded-full w-[800px] h-[50px]">
          Search
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
                  Permanent
                </span>
              </div>
            </div>
            <button className="bg-white text-[#003049] px-6 py-2 rounded-full w-[120px] h-[45px] font-semibold mr-10">
              APPLY
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OffeneStellen;
