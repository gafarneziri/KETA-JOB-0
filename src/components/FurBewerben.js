import React from 'react';
import Medical from '../Assets/Medical.png';
import Kader from '../Assets/Kader.png';
import Verka from '../Assets/Verika.png';
import Kauf from '../Assets/Kauf.png';
import Teknika from '../Assets/Teknika.png';
import It from '../Assets/It.png';
import Bank from '../Assets/bank.png';
import Diens from '../Assets/Diens.png';
import { Link, useLocation } from 'react-router-dom';

const FurBewerben = () => {
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

  window.scrollTo(0, 0);

  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center">
      <div>
        <div className="sections flex flex-wrap justify-center space-x-4 md:space-x-16 text-white uppercase text-[10px] md:text-[40px] font-Montserrat pt-10 md:pt-20">
          <Link
            to="/unternehmen"
            className={`cursor-pointer font-normal ${activeSection === 'unternehmen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
          >
            FÜR UNTERNEHMEN
          </Link>
          <Link
            to="/bewerber"
            className={`cursor-pointer font-normal ${activeSection === 'bewerber' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
          >
            FÜR BEWERBER
          </Link>
          <Link
            to="/stellen"
            className={`cursor-pointer font-normal ${activeSection === 'stellen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}
          >
            OFFENE STELLEN
          </Link>
        </div>

        {/* The thin white line */}
        <div className="h-px bg-gray-500 mt-0 w-full md:w-[1250px]"></div>
      </div>

      <div className="section1 bg-[#003049] flex flex-col items-center pt-10 md:pt-14 pb-6">
        <div className="flex items-center mb-4">
          {/* Left Line */}
          <hr
            className="border-t-1 border-gray-white mr-2 md:hidden"
            style={{ width: '40px' }}
          />
          <hr
            className="border-t-2 border-gray-500 hidden md:block mr-4"
            style={{ width: '150px' }}
          />

          {/* Title */}
          <span className="text-white uppercase text-[22px] md:text-[40px] font-Montserrat font-normal text-center flex flex-col sm:inline">
            UNSERE <span className="block sm:inline">PROFESSIONELLEN</span> DIENSTLEISTUNGEN
          </span>

          {/* Right Line */}
          <hr
            className="border-t-1 border-gray-white ml-2 md:hidden"
            style={{ width: '40px' }}
          />
          <hr
            className="border-t-2 border-gray-500 hidden md:block ml-4"
            style={{ width: '150px' }}
          />
        </div>

        <p className="text-white text-left text-[12px] md:text-[28px] lg:px-[57px] px-4 font-Montserrat mx-6 mt-6 md:mt-10">
          Wir bringen Sie leidenschaftlich mit den besten Karrieremöglichkeiten in Verbindung. Ursprünglich auf das Gesundheitswesen spezialisiert, haben wir unser Angebot auf verschiedene Branchen ausgeweitet.
          Ihre berufliche Entwicklung ist uns wichtig. Kontaktieren Sie uns, um schnell die passende Stelle für Ihren nächsten Karriereschritt zu finden.
          <br /><br />
          Wir bieten Ihnen Top-Chancen in den folgenden Fachbereichen:
        </p>
      </div>

      <div className="bg-[#003049] flex flex-col items-center pb-16">
        <div className="Box grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[80px] py-6">
          {/* Box Components */}
          {[
            { img: Medical, title: 'MEDICAL' },
            { img: Kader, title: 'KADER HÖHERE ANGESTELLTE' },
            { img: Diens, title: 'DIENSTLEISTUNGS BERUFE' },
            { img: Bank, title: 'BANK UND VERSICHERUNGSWESEN' },
            { img: It, title: 'IT, WERBUNG, GRAFIK, MARKETING' },
            { img: Teknika, title: 'TECHNISCHE BERUFE' },
            { img: Kauf, title: 'KAUFMÄNNISCHE BERUFE' },
            { img: Verka, title: 'VERKAUFSBERUFE' }
          ].map((box, index) => (
            <Link
              key={index}
              to="/anfrageformular2"
              className="group relative bg-[#003049] text-white rounded-2xl p-4 md:p-6 w-[158.69px] md:w-[280px] h-[175.32px] md:h-[330px] shadow-lg border-4 border-white flex flex-col items-center justify-center hover:bg-white hover:text-[#003049] transition duration-300"
            >
              <div className="absolute -top-7 bg-[#003049] p-2 rounded-full border-white  transition duration-300">
                <img
                  src={box.img}
                  alt={`${box.title} Logo`}
                  className="h-12 w-12 md:h-14 md:w-14 group-hover:text-[#003049]"
                />
              </div>
              <h2
                className={`text-center text-[13.45px] md:text-xl font-semibold mt-8 md:mt-10 ${
                  box.title === 'BANK UND VERSICHERUNGSWESEN' ? 'break-word' : ''
                }`}
                style={
                  box.title === 'BANK UND VERSICHERUNGSWESEN'
                    ? { wordBreak: 'break-word', hyphens: 'auto' }
                    : {}
                }
              >
                {box.title === 'BANK UND VERSICHERUNGSWESEN'
                  ? 'BANK UND VERSICHERUNG-\nSWESEN'
                  : box.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurBewerben;
