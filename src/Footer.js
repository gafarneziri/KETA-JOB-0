import React from 'react';
import LinkedInIcon from "./Assets/inblue.png";
import FacebookIcon from "./Assets/fbblue.png";
import InstagramIcon from "./Assets/instablue.png";
import Logo from "./Assets/ketajoblogo.png";

function Footer() {
  return (
    <div className='bg-[#003049]'>
    <footer className="bg-white pt-4 pb-4 rounded-t-3xl">
      {/* Wrapper with blue background to showcase the rounded corners */}
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center -mb-4 space-y-8 md:space-y-0">
          
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Keta Job Logo" className="h-[90px] object-contain" />
          </div>

          {/* Center Section - Social Links */}
          <div className="flex space-x-8 justify-center items-center">
            <a href="https://www.linkedin.com/company/keta-real-estate/posts/?feedView=all">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-10 w-10 hover:opacity-75 transition" />
            </a>
            <a href="https://www.facebook.com/ketarealestate1?_rdr">
              <img src={FacebookIcon} alt="Facebook" className="h-10 w-10 hover:opacity-75 transition" />
            </a>
            <a href="https://www.instagram.com/ketarealestate/">
              <img src={InstagramIcon} alt="Instagram" className="h-10 w-10 hover:opacity-75 transition" />
            </a>
          </div>

          {/* Right Section - Contact Information */}
          <div className="text-sm text-center md:text-left space-y-1">
            <p className="font-semibold">MOBIL :</p>
            <p>+41 41 252 18 18</p>
            <p>+41 41 252 18 19</p>
            <p className="font-semibold mt-2">EMAIL :</p>
            <p className="underline">INFO@KETAJOB.CH</p>
          </div>
        </div>

        {/* Address and Privacy Statement */}
        <div className="  pt-8 text-center text-xs text-gray-600 -mb-4">
          <p>*Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung
             eines funktionsfähigen und <br/> nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</p>
        </div>
        <div className='border border-gray-400 mt-8 -ml-20 -mr-20'></div>

        {/* Footer Bottom */}
        <div className="mt-4 flex justify-between text-xs  text-gray-600">
          <p>© 2024 KETA GROUP, ALL RIGHTS RESERVED</p>
          <p>OTHMARSTRASSE 8, 8008 ZÜRICH, SCHWEIZ</p>
          <p>BIRKENSTRASSE 47, 6343 ROTKREUZ, SCHWEIZ</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
