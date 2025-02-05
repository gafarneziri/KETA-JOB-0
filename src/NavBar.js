import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow1 from '../src/Assets/arrow1.png';
import WhiteLogo from '../src/Assets/white-logo.svg';
import NavbarIcon from '../src/Assets/navbarIcon.svg';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <div className="bg-[#003049] pb-4 relative z-[1000]">
      <nav
        className="shadow-lg 
        md:rounded-bl-[35px] md:rounded-br-[35px] 
        bg-[#003049] md:bg-white 
        md:overflow-visible"
      >
        <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 h-18 relative">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0 my-[10px]">
            <Link to="/">
              {/* Conditional Rendering for Logo */}
              <img
                src={WhiteLogo}
                alt="White Logo"
                className="w-[90px] h-[50px] object-cover md:hidden mt-[7px] "
              />
              <img
                src={require('./Assets/Group 19.png')}
                alt="Logo"
                className="hidden md:block w-[116px] h-[65px] object-cover mt-[7px]"
              />
            </Link>
            <div className="absolute left-0 top-full w-screen h-[4px] bg-[#002638]"></div>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <Link to="/" className="text-white md:text-[#003049] font-medium">
              HOME
            </Link>
            {/* Dropdown for Dienstleistungen */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`text-white md:text-[#003049] font-medium focus:outline-none flex items-center pb-1 ${isDropdownOpen ? 'border-b border-white md:border-[#003049]' : ''
                  }`}
              >
                DIENSTLEISTUNGEN
                <img
                  src={Arrow1}
                  alt="Arrow"
                  className={`ml-2 w-[14px] transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 md:w-72 bg-white rounded-[25px] shadow-lg z-[1100] text-center">
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
            <Link to="/uber-uns" className="text-white md:text-[#003049] font-medium">
              ÜBER UNS
            </Link>
            <Link to="/kontakt" className="text-white md:text-[#003049] font-medium">
              KONTAKT
            </Link>
          </div>

          {/* Right Side - Apply Button */}
          <div className="hidden md:block">
            <Link to="/bewerbenbutton">
              <button
                type="button"
                className="text-white bg-[#003049] font-medium rounded-full text-sm px-6 py-2">
                BEWERBEN
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <img
                src={NavbarIcon}
                alt="Menu Icon"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#003049] w-full h-screen flex flex-col justify-between">
            {/* Menu Links */}
            <div className="pt-8 pl-6">
              <Link
                to="/"
                className="block text-white font-medium py-4 text-[24px]"
                onClick={toggleMenu}
              >
                HOME
              </Link>

              {/* Dropdown Section */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white text-[24px] font-medium py-4"
                >
                  DIENSTLEISTUNGEN
                  {/* Dropdown Icon */}
                  <span className="ml-2">
                    <svg
                      className={`w-[40px] h-[40px] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="white"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7 7l3 3 3-3 1 1-4 4-4-4z"
                      ></path>
                    </svg>
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="text-white pl-6 relative">
                    {/* Top Line */}
                    <div className="absolute top-0 left-0 w-[240px] h-0 border-t border-white"></div>
                    {/* Dropdown Items */}
                    <Link
                      to="/unsere"
                      className="block py-2 text-[16px] font-medium"
                      onClick={() => {
                        toggleMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      UNSERE DIENSTLEISTUNGEN
                    </Link>
                    <Link
                      to="/unternehmen"
                      className="block py-2 text-[16px] font-medium"
                      onClick={() => {
                        toggleMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      FÜR UNTERNEHMEN
                    </Link>
                    <Link
                      to="/bewerber"
                      className="block py-2 text-[16px] font-medium"
                      onClick={() => {
                        toggleMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      FÜR BEWERBER
                    </Link>
                    <Link
                      to="/stellen"
                      className="block py-2 text-[16px] font-medium"
                      onClick={() => {
                        toggleMenu();
                        setIsDropdownOpen(false);
                      }}
                    >
                      OFFENE STELLEN
                    </Link>
                    {/* Bottom Line */}
                    <div className="absolute bottom-0 left-0 w-[240px] h-0 border-t border-white"></div>
                  </div>
                )}
              </div>

              <Link
                to="/uber-uns"
                className="block text-white font-medium py-4 text-[24px]"
                onClick={toggleMenu}
              >
                ÜBER UNS
              </Link>
              <Link
                to="/kontakt"
                className="block text-white font-medium py-4 text-[24px]"
                onClick={toggleMenu}
              >
                KONTAKT
              </Link>
              <Link
                to="/bewerbenbutton"
                className="block text-white font-medium py-4 text-[24px]"
                onClick={toggleMenu}
              >
                BEWERBEN
              </Link>
            </div>

            {/* Bottom Logo */}
            <div className="pb-8">
              <img
                src={WhiteLogo}
                alt="White Logo"
                className="w-[90px] mx-auto"
              />
            </div>
          </div>
        )}

      </nav>
    </div>
  );
}

export default NavBar;
