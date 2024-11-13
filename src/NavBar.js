import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow1 from '../src/Assets/arrow1.png';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#003049] pb-4 relative z-[1000]"> {/* High z-index to bring the navbar to the front */}
      <nav className="bg-white shadow-lg rounded-bl-[35px] rounded-br-[35px] overflow-visible">
        <div className="flex justify-between h-18 items-center relative">

          {/* Left Side - Logo */}
          <div className="flex-shrink-0 mx-[90px] my-[27px]">
            <Link to="/">
              <img
                src={require('./Assets/Group 19.png')}
                alt="Logo"
                className="w-[116px] h-[65px] object-cover"
              />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="md:flex space-x-10 relative">
            <Link to="/" className="text-[#003049] font-medium">
              HOME
            </Link>

            {/* Dropdown for Dienstleistungen */}
            <div className="relative">
  <button
    onClick={toggleDropdown}
    className={`text-[#003049] font-medium focus:outline-none flex items-center pb-1 ${isDropdownOpen ? 'border-b border-[#003049] w-[190px]' : ''}`}
  >
    DIENSTLEISTUNGEN
    <img
      src={Arrow1}
      alt="Arrow"
      className={`ml-2 w-[14px]  transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {isDropdownOpen && (
    <div className="absolute left-0 mt-2 w-72 bg-white rounded-[25px] -ml-[45px] z-[1100] text-center">
      <Link
        to="/unsere"
        className="block px-4 py-2 text-[#003049] hover:bg-gray-100"
        onClick={() => setIsDropdownOpen(false)}
      >
        UNSERE DIENSTLEISTUNGEN
      </Link>
      <Link
        to="/unternehmen"
        className="block px-4 py-2 text-[#003049] hover:bg-gray-100"
        onClick={() => setIsDropdownOpen(false)}
      >
        FÜR UNTERNEHMEN
      </Link>
      <Link
        to="/bewerber"
        className="block px-4 py-2 text-[#003049] hover:bg-gray-100"
        onClick={() => setIsDropdownOpen(false)}
      >
        FÜR BEWERBER
      </Link>
      <Link
        to="/stellen"
        className="block px-4 py-2 text-[#003049] hover:bg-gray-100"
        onClick={() => setIsDropdownOpen(false)}
      >
        OFFENE STELLEN
      </Link>
    </div>
  )}
</div>



            <Link to="/uber-uns" className="text-[#003049] font-medium">
              ÜBER UNS
            </Link>
            <Link to="/kontakt" className="text-[#003049] font-medium">
              KONTAKT
            </Link>
          </div>

          {/* Right Side - Apply Button */}
          <div className="mr-20">
            <Link to="/bewerbenbutton">
              <button
                type="button"
                className="text-white bg-[#003049] font-medium rounded-full text-sm px-10 py-2.5 mb-2 mt-2">
                BEWERBEN
              </button>
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
