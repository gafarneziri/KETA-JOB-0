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

const FurUnternehmen = () => {
  const location = useLocation();

  const activeSection = (() => {
    switch (location.pathname) {
      case '/unternehmen':
        return 'unternehmen';
      case '/bewerber':
        return 'bewerber';
      case '/stellen':
        return 'stellen';
      default:
        return 'unternehmen';
    }
  })();

  window.scrollTo(0, 0);

  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center">
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

      <div className="section1 bg-[#003049] flex flex-col items-center pt-10 md:pt-14 pb-6">
        <div className="flex items-center mb-4">
          {/* Left Line */}
          <hr
            className="border-t-2 border-gray-500  md:hidden"
            style={{ width: '51px' }}
          />
          <hr
            className="border-t-2 border-gray-500 hidden md:block mr-4"
            style={{ width: '150px' }}
          />

          {/* Title */}
          <span className="text-white uppercase text-[22px] md:text-[40px] font-Montserrat font-normal  text-center">
            UNSERE PROFESSIONELLEN DIENSTLEISTUNGEN
          </span>

          {/* Right Line */}
          <hr
            className="border-t-2 border-gray-500  md:hidden"
            style={{ width: '51px' }}
          />
          <hr
            className="border-t-2 border-gray-500 hidden md:block ml-4"
            style={{ width: '150px' }}
          />
        </div>


        <p className="text-white text-left text-[12px] md:text-[28px] px-4 font-Montserrat mx-6 mt-6 md:mt-10">
          Während Sie sich um Ihre Kunden kümmern, setzen wir uns mit Leidenschaft dafür ein, dass Ihr Unternehmen gut betreut und mit qualifiziertem Personal ausgestattet ist. Ursprünglich auf die Personalvermittlung und das Personalverleih im Gesundheitswesen spezialisiert, bieten wir aufgrund der wachsenden Nachfrage inzwischen Fachkräfte für verschiedene Branchen an.
          <br /><br />
          Unser Hintergrund im Gesundheitswesen hat uns gelehrt, dass alles, was gesund ist, eine Zukunft hat, und wir glauben, dass die Gesundheit Ihres Unternehmens entscheidend ist. Wenn Ihnen Fachkräfte fehlen, wenden Sie sich einfach an uns. Mit unserer Erfahrung und Kompetenz finden wir schnell die richtige Person für Sie.
          <br /><br />
          Wir bieten Ihnen Top-Kandidaten in den folgenden Fachbereichen:
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
      to="/anfrageformular"
      className="relative bg-[#003049] text-white rounded-2xl p-4 md:p-6 w-[158.69px] md:w-[280px] h-[175.32px] md:h-[330px] shadow-lg border-4 border-white flex flex-col items-center justify-center hover:bg-white hover:text-[#003049] transition duration-300"
    >
      <div className="absolute -top-7 bg-[#003049] p-2 rounded-full border-white transform hover:-translate-y-2 transition duration-300">
        <img
          src={box.img}
          alt={`${box.title} Logo`}
          className="h-12 w-12 md:h-14 md:w-14 hover:text-[#003049]"
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
}

export default FurUnternehmen;
