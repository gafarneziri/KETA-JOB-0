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

      <div className="md:flex md:flex-col items-center min-h-screen text-white bg-[#003049]">
        {/* Search Form Section */}
        <div className="w-full md:max-w-6xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center md:mt-20 mt-8  md:mb-16 mb-8">
  {/* Input with Search Icon on the Right */}
  <div className="relative md:w-[2500px] md:h-[50px] w-[351px] h-[34px]">
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
  <div className="relative md:w-[1200px] md:h-[50px] w-[351px] h-[34px]">
  <select
    className="p-[5px] pl-6 text-center text-white bg-transparent border border-white rounded-full w-full h-full focus:outline-none appearance-none pr-12 leading-none"
    defaultValue=""
  >
    <option value="" disabled className="bg-[#003049] text-white">
      Temporär
    </option>
    <option value="festanstellung" className="bg-[#003049] text-white">
      Festanstellung
    </option>
  </select>
  <img
    src={Dropdownicon} // Replace with the correct path to your icon
    alt="Dropdown Icon"
    className="absolute md:right-6 right-[109px]  top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]"
  />
</div>

<div className="relative md:w-[1200px] md:h-[50px] w-[351px] h-[34px]">
  <select
    className="p-[5px] pl-6  text-center text-white bg-transparent border border-white rounded-full w-full h-full focus:outline-none appearance-none pr-12 leading-none"
    defaultValue=""
  >
    <option value="" disabled className="bg-[#003049] text-white">
      Ort & Radius
    </option>
    <option value="5km" className="bg-[#003049] text-white">
      5 km
    </option>
    <option value="10km" className="bg-[#003049] text-white">
      10 km
    </option>
    <option value="20km" className="bg-[#003049] text-white">
      20 km
    </option>
  </select>
  <img
    src={Dropdownicon} // Replace with the correct path to your icon
    alt="Dropdown Icon"
    className="absolute md:right-6 right-[109px] top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]"
  />
</div>


  {/* Search Button */}
  <button className="bg-white text-[#003049] rounded-full md:w-[1000px] md:h-[50px] w-[351px] h-[34px]">
    Suchen
  </button>
</div>
<div className="flex flex-col items-center mt-10 sm:hidden  mb-10">
  {/* Horizontal Line */}
  <div className="w-80 max-w-6xl border-t border-white "></div>

  {/* Section Title */}
  <h2 className="text-white text-2xl md:text-2xl font-semibold mt-4">
    AVAILABLE JOBS
  </h2>
</div>

<div className="w-full max-w-6xl grid md:grid-cols-1 grid-cols-2 gap-4 p-4">
  {/* IT Software Developer Listings */}
  <div className="grid grid-cols-1 gap-4 md:space-y-8 md:block">
    {[1, 2, 3, 4].map((_, index) => (
      <div
        key={`developer-${index}`}
        className="border border-white p-5 md:rounded-full rounded-[10px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between"
      >
        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-sm md:text-xl font-semibold">IT SOFTWARE DEVELOPER</h2>
          <div className="flex md:flex-wrap justify-center md:justify-start md:space-x-4 space-x-1  mt-2 pt-2">
            <span className="border border-white px-4  py-1 rounded-full md:text-sm text-[8px] font-medium">
              Zurich
            </span>
            <span className="border border-white px-4 py-1 rounded-full md:text-sm text-[8px] font-medium">
              Temporär
            </span>
          </div>
        </div>
        <button
  onClick={() => navigate('/bewerbenbutton')} // Navigate to the Bewerben page
  className="bg-white text-[#003049] px-1 py-0 rounded-full w-[55px] h-[16px] text-[8px] font-semibold md:w-[140px] md:h-[45px] md:text-base mt-4 md:mt-0 md:mr-10"
>
  BEWERBEN
</button>

      </div>
    ))}
  </div>

  {/* Graphic Designer Listings */}
  <div className="grid grid-cols-1 gap-4 md:space-y-8 md:block pt-0 md:pt-4">
    {[1, 2, 3, 4].map((_, index) => (
      <div
        key={`designer-${index}`}
        className="border border-white p-5 md:rounded-full rounded-[10px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between"
      >
        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-sm md:text-xl font-semibold md:mt-0 ">GRAPHIC  <span className="block sm:hidden -mt-6">
    <br />
  </span> DESIGNER</h2>
          <div className="flex md:flex-wrap justify-center md:justify-start md:space-x-4 space-x-1 mt-2 pt-2">
            <span className="border border-white px-4 py-1 rounded-full md:text-sm  text-[7px] font-medium">
              London
            </span>
            <span className="border border-white px-4 py-1 rounded-full md:text-sm text-[7px] font-medium">
              Festanstellung
            </span>
          </div>
        </div>
        <button
  onClick={() => navigate('/bewerbenbutton')} // Navigate to the Bewerben page
  className="bg-white text-[#003049] px-1 py-0 rounded-full w-[55px] h-[16px] text-[8px] font-semibold md:w-[140px] md:h-[45px] md:text-base mt-4 md:mt-0 md:mr-10"
>
  BEWERBEN
</button>


      </div>
    ))}
  </div>
</div>





      </div>
    </div>
  );
};

export default OffeneStellen;
