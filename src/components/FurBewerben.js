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
        <div className="h-px bg-gray-500 mt-0 w-[1250px]"></div>
      </div>
      <div className="section1 bg-[#003049] flex flex-col items-center min-h-screen pt-14 pb-0">
        <div className="flex items-center mb-4">
          <hr className="border-t-2 border-gray-500 mr-4" style={{ width: '150px' }} />
          <span className="text-white uppercase text-[40px] font-Montserrat font-normal mx-4">
            UNSERE PROFESSIONELLEN DIENSTLEISTUNGEN
          </span>
          <hr className="border-t-2 border-gray-500 ml-4" style={{ width: '150px' }} />
        </div>

        <p className="text-white text-left text-[28px] px-8 font-Montserrat ml-6 mr-6 mt-10">
          Wir bringen Sie leidenschaftlich mit den besten Karrieremöglichkeiten in Verbindung. Ursprünglich auf das Gesundheitswesen spezialisiert, haben wir unser Angebot auf verschiedene Branchen ausgeweitet.
          Ihre berufliche Entwicklung ist uns wichtig. Kontaktieren Sie uns, um schnell die passende Stelle für Ihren nächsten Karriereschritt zu finden.
          <br /><br />
          Wir bieten Ihnen Top-Chancen in den folgenden Fachbereichen:
        </p>
      </div>
      <div className="bg-[#003049] min-h-screen flex flex-col items-center -mt-44 mb-16">
        <div className="Box grid grid-cols-1 md:grid-cols-4 gap-[80px] py-4">

          {/* Box Components */}
          {[{ img: Medical, title: 'MEDICAL' },
            { img: Kader, title: 'KADER HÖHERE ANGESTELLTE' },
            { img: Diens, title: 'DIENSTLEISTUNGS BERUFE' },
            { img: Bank, title: 'BANK UND VERSICHERUNGSWESEN' },
            { img: It, title: 'IT, WERBUNG, GRAFIK, MARKETING' },
            { img: Teknika, title: 'TECHNISCHE BERUFE' },
            { img: Kauf, title: 'KAUFMÄNNISCHE BERUFE' },
            { img: Verka, title: 'VERKAUFSBERUFE' }
          ].map((box, index) => (
            <Link key={index} to="/anfrageformular2">
              <div className="relative bg-[#003049] text-white rounded-2xl p-6 w-[280px] h-[330px] shadow-lg border-4 border-white flex flex-col items-center justify-center hover:bg-white hover:text-[#003049] transition duration-300">
                <div className="absolute -top-7 bg-[#003049] p-2 rounded-full border-white transform hover:-translate-y-2 transition duration-300">
                  <img src={box.img} alt={`${box.title} Logo`} className="h-14 w-14 hover:text-[#003049]" />
                </div>
                <h2 className="text-center text-xl font-semibold mt-10">{box.title}</h2>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FurBewerben;
