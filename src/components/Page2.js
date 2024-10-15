import React, { useState } from 'react';
import Medical from '../Assets/Medical.png';
import Kader from '../Assets/Kader.png';
import Verka from '../Assets/Verika.png';
import Kauf from '../Assets/Kauf.png';
import Teknika from '../Assets/Teknika.png';
import It from '../Assets/It.png';
import Bank from '../Assets/bank.png';
import Diens from '../Assets/Diens.png';

const Page2 = () => {

  const [activeSection, setActiveSection] = useState('unternehmen');



  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center">
      <div className="sections flex space-x-16 text-white uppercase text-[40px] font-Montserrat pt-20">
        <p
          className={`cursor-pointer font-normal ${activeSection === 'unternehmen' ? 'border-b-4 border-white' : ''
            }`}
          onClick={() => setActiveSection('unternehmen')}
        >
          FÜR UNTERNEHMEN
        </p>
        <p
          className={`cursor-pointer font-normal ${activeSection === 'bewerber' ? 'border-b-4 border-white' : ''
            }`}
          onClick={() => setActiveSection('bewerber')}
        >
          FÜR BEWERBER
        </p>
        <p
          className={`cursor-pointer font-normal ${activeSection === 'stellen' ? 'border-b-4 border-white' : ''
            }`}
          onClick={() => setActiveSection('stellen')}
        >
          OFFENE STELLEN
        </p>
      </div>
      {/* The thin gray line exactly matching the width of the section */}
      <div className="h-px bg-gray-500 mt-0 w-[calc(100%)] max-w-screen-lg"></div>

      <div className="section1 bg-[#003049] flex flex-col items-center min-h-screen pt-14 pb-96">
        <div className="flex items-center mb-4">
          <hr className="border-t-2 border-gray-500 mr-4" style={{ width: '150px' }} />
          <span className="text-white uppercase text-[50px] font-Montserrat font-normal mx-4">
            UNSERE PROFESSIONELLEN DIENSTLEISTUNGEN
          </span>
          <hr className="border-t-2 border-gray-500 ml-4" style={{ width: '150px' }} />
        </div>

        <p className="text-white text-left text-[28px] px-4 font-Montserrat   ml-6 mr-6 mt-10" >
          Während Sie sich um Ihre Kunden kümmern, setzen wir uns mit Leidenschaft dafür ein, dass Ihr Unternehmen gut betreut und mit qualifiziertem Personal ausgestattet ist. Ursprünglich auf die Personalvermittlung und das Personalverleih im Gesundheitswesen spezialisiert, bieten wir aufgrund der wachsenden Nachfrage inzwischen Fachkräfte für verschiedene Branchen an.
          <br /><br />
          Unser Hintergrund im Gesundheitswesen hat uns gelehrt, dass alles, was gesund ist, eine Zukunft hat, und wir glauben, dass die Gesundheit Ihres Unternehmens entscheidend ist. Wenn Ihnen Fachkräfte fehlen, wenden Sie sich einfach an uns. Mit unserer Erfahrung und Kompetenz finden wir schnell die richtige Person für Sie.
          <br /><br />
          Wir bieten Ihnen Top-Kandidaten in den folgenden Fachbereichen:
        </p>
      </div>


    

      <div className="Box flex flex-wrap justify-center pb-12 mb-24">
  {/* Box 1 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Medical} alt="Logo" className="h-12 w-12 mr-4 " />
      <div>
        <h2 className="text-2xl font-bold">MEDICAL</h2>
        <p className="text-left text-[16px] mb-4">
          Fachkräfte des Gesundheitswesens, die sich für eine hochwertige medizinische Versorgung, die Förderung des Wohlbefindens und die Verbesserung der Patientenergonomie einsetzen.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 2 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Kader} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">KADER HÖHERE ANGESELLTE</h2>
        <p className="text-left text-[16px] mb-4">
          Führungskräfte und leitende Angestellte, die den Unternehmen strategische Planung, Führung und operative Exzellenz verantworten.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 3 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Verka} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">VERKAUFSBERUFE</h2>
        <p className="text-left text-[16px] mb-4">
          Dynamische Vertriebsprofis, die sich auf den Aufbau von Kundenbeziehungen, die Steigerung des Umsatzes und das Erreichen von Verkaufszielen konzentrieren.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 4 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Kauf} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">KAUFMÄNNISCHE BERUFE</h2>
        <p className="text-left text-[16px] mb-4">
          Einschließlich kaufmännischer Tätigkeiten, Erreichung der Handlungsverwaltung von erfolgreichen Geschäftsabläufen.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 5 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Teknika} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">TECHNISCHE BERUFE</h2>
        <p className="text-left text-[16px] mb-4">
          Qualifizierte Techniker und Ingenieure, die komplexe technische Systeme und Lösungen entwickeln.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 6 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={It} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">IT, WERBUNG, GRAFIK, MARKETING</h2>
        <p className="text-left text-[16px] mb-4">
          Wir sind innovativ im Bereich digitaler Kampagnen, Designs und Marketingstrategien.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 7 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Bank} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">BANK UND VERSICHERUNGSWESEN</h2>
        <p className="text-left text-[16px] mb-4">
          Fachkräfte, die sich um die finanzielle Planung, Risikomanagement und Absicherung kümmern.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>

  {/* Box 8 */}
  <div className="Boxes bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
    <div className="flex items-start mb-4">
      <img src={Diens} alt="Logo" className="h-12 w-12 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">DIENSTLEISTUNGS BERUFE</h2>
        <p className="text-left text-[16px] mb-4">
          Fachkräfte, die sich um die Kundenbetreuung und Dienstleistungen kümmern.
        </p>
      </div>
    </div>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-[85px] hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>
</div>






    </div>

  )
}

export default Page2;
