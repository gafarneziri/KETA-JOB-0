import React from 'react';
import LinkedInIcon from "./Assets/inblue.png";
import FacebookIcon from "./Assets/fbblue.png";
import InstagramIcon from "./Assets/instablue.png";
import Logo from "./Assets/ketajoblogo.png";

function Footer() {
  return (
    <div className='bg-[#003049]'>
      <footer className="bg-white pt-4 pb-4 rounded-t-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0 flex justify-center">
              <img src={Logo} alt="Keta Job Logo" className="h-[70px] sm:h-[90px] object-contain" />
            </div>

            {/* Center Section - Social Links */}
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a href="https://www.linkedin.com/company/keta-real-estate/posts/?feedView=all">
                <img src={LinkedInIcon} alt="LinkedIn" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition" />
              </a>
              <a href="https://www.facebook.com/ketarealestate1?_rdr">
                <img src={FacebookIcon} alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition" />
              </a>
              <a href="https://www.instagram.com/ketarealestate/">
                <img src={InstagramIcon} alt="Instagram" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition" />
              </a>
            </div>

            {/* Right Section - Contact Information */}
            <div className="text-xs sm:text-sm text-center space-y-2 sm:space-y-1">
              <div className="block md:hidden">
                <p className="font-semibold">EMAIL :</p>
                <a href="mailto:INFO@KETAJOB.CH" className="underline hover:text-blue-500">
                  INFO@KETAJOB.CH
                </a>
                <p className="font-semibold mt-4">MOBIL :</p>
                <a href="tel:+41412521818" className="block hover:underline">
                  +41 41 252 18 18
                </a>
                <a href="tel:+41412521819" className="block hover:underline">
                  +41 41 252 18 19
                </a>
              </div>

              <div className="hidden md:block">
                <p className="font-semibold">MOBIL :</p>
                <a href="tel:+41412521818" className="block hover:underline">
                  +41 41 252 18 18
                </a>
                <a href="tel:+41412521819" className="block hover:underline">
                  +41 41 252 18 19
                </a>
                <p className="font-semibold mt-4">EMAIL :</p>
                <a href="mailto:INFO@KETAJOB.CH" className="underline hover:text-blue-500">
                  INFO@KETAJOB.CH
                </a>
              </div>

            </div>
          </div>

          {/* Address Section (Mobile-Only) */}
          <div className="block md:hidden pt-8 text-center text-[10px] text-gray-600">
            <p>OTHMARSTRASSE 8, 8008 ZÜRICH, SCHWEIZ</p>
            <p>BIRKENSTRASSE 47, 6343 ROTKREUZ, SCHWEIZ</p>
          </div>

          {/* Address and Privacy Statement */}
          <div className="pt-8 text-center sm:block hidden text-[10px] sm:text-xs text-gray-600">
            <p>
              *Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt)
              werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung
              eines funktionsfähigen und <br className="hidden sm:block" /> nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
            </p>
          </div>
        </div>

        {/* Full-Width Line */}
        <div className="w-full border-t border-gray-400 mt-8"></div>


        <div className="block md:hidden pt-4 text-center text-[10px] text-gray-600">
          <p>
            *Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt)
            werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung
            eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
          </p>
          <p className="mt-2">© 2024 KETA GROUP, ALL RIGHTS RESERVED</p>
        </div>

        <div className="container mx-auto sm:block hidden  px-4 sm:px-6 lg:px-20">
          {/* Footer Bottom */}
          <div className="mt-4 flex flex-row justify-center items-center text-[10px] sm:text-xs text-gray-600 gap-[260px] text-center">
            <p>© 2024 KETA GROUP, ALL RIGHTS RESERVED</p>
            <a
              href="https://www.google.com/maps/place/Othmarstrasse+8,+8008+Zürich,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              OTHMARSTRASSE 8, 8008 ZÜRICH, SCHWEIZ
            </a>
            <a
              href="https://www.google.com/maps/place/Birkenstrasse+47,+6343+Rotkreuz,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              BIRKENSTRASSE 47, 6343 ROTKREUZ, SCHWEIZ
            </a>
          </div>


        </div>
      </footer>
    </div>
  );
}

export default Footer;
