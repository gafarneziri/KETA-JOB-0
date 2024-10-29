import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="bg-white text-[#003049] py-8 px-4 rounded-tl-[px] rounded-tr-[50px]">
        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Left Section - Logo and Social Icons */}
          <div className="flex flex-row items-center gap-12">
            {/* Logo */}
            <div className="w-36">
              <img
                src={require('./Assets/Group 19.png')} // Replace with the actual path to your logo image
                alt="KETA JOB Logo"
                className="w-full h-auto"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-16 pl-80 pt-12">
              <img
                src={require('./Assets/1.png')} // Replace with actual LinkedIn logo path
                alt="LinkedIn Icon"
                className="w-10 h-10"
              />
              <img
                src={require('./Assets/2.png')} // Replace with actual Facebook logo path
                alt="Facebook Icon"
                className="w-10 h-10"
              />
              <img
                src={require('./Assets/3.png')} // Replace with actual Instagram logo path
                alt="Instagram Icon"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end text-sm gap-2 mt-4 md:mt-0">
            <div>
              <span className="font-semibold">MOBIL:</span>
              <p>+41 41 252 18 18</p>
              <p>+41 41 252 18 19</p>
            </div>
            <div className="mt-4">
              <span className="font-semibold">EMAIL:</span>
              <p>info@ketajob.ch</p>
            </div>
          </div>
        </div>

        <p className="text-center pr-[250px] pl-[250px] mt-4">
          *Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke
          der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
        </p>

        {/* Bottom Section - Address and Copyright */}
        <div className="w-full mx-auto mt-8 border-t border-[#003049] pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left gap-4">
          <div className=" pl-8 flex gap-48">
            <p>© 2024 KETA GROUP, ALL RIGHTS RESERVED</p>
            <p>OTHMARSTRASSE 8, 8008 ZÜRICH, SCHWEIZ</p>
            <p>BIRKENSTRASSE 47, 6343 ROTKREUZ, SCHWEIZ</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
