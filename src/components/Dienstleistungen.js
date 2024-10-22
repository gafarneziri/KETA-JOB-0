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

      <div className="section1 bg-[#003049] flex flex-col items-center min-h-screen pt-14 pb-0">
        <div className="flex items-center mb-4">
          <hr className="border-t-2 border-gray-500 mr-4" style={{ width: '150px' }} />
          <span className="text-white uppercase text-[40px] font-Montserrat font-normal mx-4">
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




      <div className="Box flex flex-wrap justify-center pb-12 mb-4 mt-0 ">
        {/* Box 1 */}

        <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
          {/* Image positioned on the top right inside the border */}
          <div className="absolute -top-7 right-4 bg-[#003049] p-2">
            <img src={Medical} alt="Logo" className="h-12 w-14 " />
          </div>

          {/* Content on the left side */}
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-4">MEDICAL</h2>
            <p className="text-[16px] mb-4 pb-12">
              Fachkräfte des Gesundheitswesens, die sich für eine hochwertige medizinische Versorgung, die Förderung des Wohlbefindens und die Verbesserung der Patientenergebnisse einsetzen.
            </p>
            <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              JETZT BEWERBEN
            </button>
          </div>
        </div>

        {/* Box 2 */}     
        <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
          {/* Image positioned on the top right inside the border */}
          <div className="absolute -top-7 right-4 bg-[#003049] p-2">
            <img src={Kader} alt="Logo" className="h-12 w-14" />
          </div>

          {/* Content on the left side */}
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-4">KADER HÖHERE ANGESTELLTE</h2> 
            <p className="text-[16px] mb-4 pb-12">
            Führungskräfte und leitende Angestellte, die den Unternehmenserfolg durch strategische Planung, Führung und operative Exzellenz vorantreiben.
            </p>
            <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              JETZT BEWERBEN
            </button>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
          {/* Image positioned on the top right inside the border */}
          <div className="absolute -top-7 right-4 bg-[#003049] p-2">
            <img src={Verka} alt="Logo" className="h-12 w-14" />
          </div>

          {/* Content on the left side */}
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-4">VERKAUFSBERUFE</h2> 
            <p className="text-[16px] mb-4 pb-12">
            Dynamische Vertriebsprofis, die sich auf den Aufbau von Kundenbeziehungen, die Steigerung des Umsatzes und das Erreichen von Verkaufszielen konzentrieren.
            </p>
            <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              JETZT BEWERBEN
            </button>
          </div>
        </div>

        {/* Box 4 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
          {/* Image positioned on the top right inside the border */}
          <div className="absolute -top-7 right-4 bg-[#003049] p-2">
            <img src={Kauf} alt="Logo" className="h-12 w-14" />
          </div>

          {/* Content on the left side */}
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-4">KAUFMÄNNISCHE BERUFE</h2> 
            <p className="text-[16px] mb-4 pb-12">
            Fachleute für kaufmännische Tätigkeiten, Erleichterung des Handels, Verwaltung von Lagerbeständen und Gewährleistung effizienter Geschäftsabläufe.
            </p>
            <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              JETZT BEWERBEN
            </button>
          </div>
        </div>

        {/* Box 5 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
          {/* Image positioned on the top right inside the border */}
          <div className="absolute -top-7 right-4 bg-[#003049] p-2">
            <img src={Teknika} alt="Logo" className="h-12 w-14" />
          </div>

          {/* Content on the left side */}
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-4">TECHNISCHE BERUFE</h2> 
            <p className="text-[16px] mb-4 pb-12">
            Qualifizierte Techniker und Ingenieure, die komplexe Probleme lösen und den reibungslosen Betrieb von technischen Anlagen und Maschinen sicherstellen.
            </p>
            <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              JETZT BEWERBEN
            </button>
          </div>
        </div>

        {/* Box 6 */}
<div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
  {/* Image positioned on the top right inside the border */}
  <div className="absolute -top-7 right-4 bg-[#003049] p-2">
    <img src={It} alt="Logo" className="h-12 w-14" />
  </div>

  {/* Content on the left side */}
  <div className="text-left">
    <h2 className="text-2xl font-bold pb-4">IT, WERBUNG, GRAFIK, MARKETING</h2>
    <p className="text-[16px] mb-4 pb-12">
      Wir sind innovativ im Bereich digitaler Kampagnen, Designs und Marketingstrategien.
    </p>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>
</div>

{/* Box 7 */}
<div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
  {/* Image positioned on the top right inside the border */}
  <div className="absolute -top-7 right-4 bg-[#003049] p-2">
    <img src={Bank} alt="Logo" className="h-12 w-14" />
  </div>

  {/* Content on the left side */}
  <div className="text-left">
    <h2 className="text-2xl font-bold pb-4">BANK UND VERSICHERUNGSWESEN</h2>
    <p className="text-[16px] mb-4 pb-12">
      Fachkräfte, die sich um die finanzielle Planung, Risikomanagement und Absicherung kümmern.
    </p>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>
</div>

{/* Box 8 */}
<div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-lg shadow-lg border border-white m-4">
  {/* Image positioned on the top right inside the border */}
  <div className="absolute -top-7 right-4 bg-[#003049] p-2">
    <img src={Diens} alt="Logo" className="h-12 w-14" />
  </div>

  {/* Content on the left side */}
  <div className="text-left">
    <h2 className="text-2xl font-bold pb-4">DIENSTLEISTUNGS BERUFE</h2>
    <p className="text-[16px] mb-4 pb-12">
      Fachkräfte, die sich um die Kundenbetreuung und Dienstleistungen kümmern.
    </p>
    <button className="bg-white text-[#003049] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
      JETZT BEWERBEN
    </button>
  </div>
</div>
      </div>






    </div>

  )
}

export default Page2;
