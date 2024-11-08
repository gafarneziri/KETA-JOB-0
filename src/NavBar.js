import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {
  return (
    <div className="bg-[#003049] pb-4"> {/* Added container div with a contrasting background color */}
    <nav className="bg-white shadow-lg rounded-bl-[35px] rounded-br-[35px] overflow-hidden">
      <div className="flex justify-between h-18 items-center">

        {/* Left Side - Logo */}
        <div className="flex-shrink-0 mx-[90px] my-[27px]">
          <Link to="/">  {/* Use Link for navigation */}
            <img
              src={require('./Assets/Group 19.png')}
              alt="Logo"
              className="w-[116px] h-[65px] object-cover"
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="md:flex space-x-10">
          <Link to="/" className="text-[#003049] font-medium">
            HOME
          </Link>
          <Link to="/unternehmen" className="text-[#003049] font-medium">
            DIENSTLEISTUNGEN
          </Link>
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
