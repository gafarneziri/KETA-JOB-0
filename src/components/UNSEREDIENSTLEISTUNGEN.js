import React from 'react';
import TempIcon from '../Assets/TempIcon.png';
import FestIcon from '../Assets/FestIcon.png';
import PoolIcon from '../Assets/PoolIcon.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Page3 = () => {

  const navigate = useNavigate(); // Initialize navigate hook

  return (
<div className="bg-[#003049] text-white py-10 font-Montserrat overflow-x-hidden">
  {/* Title Section */}
  <div className="flex flex-col items-center justify-center mb-12 px-4">
    <div className="flex items-center w-full">
      <div className="flex-grow border-t border-white md:ml-[63px]"></div>
      <div className="px-4">
        <h2 className="text-center text-2xl md:text-4xl whitespace-nowrap md:whitespace-normal">
          <span className="block md:inline">UNSERE</span>{" "}
          <span className="block md:inline">DIENSTLEISTUNGEN</span>
        </h2>
      </div>
      <div className="flex-grow border-t border-white md:mr-[67px]"></div>
    </div>
  </div>

  {/* Content Boxes */}
  <div className="space-y-16 px-4 md:px-20 md:pt-8">
    {/* Box 1 */}
    <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white">
      <div className="flex justify-center -mt-14">
        <div className="bg-[#003049] p-2 rounded-full">
          <img src={TempIcon} alt="TempIcon" className="h-14 w-14 max-w-full" />
        </div>
      </div>
      <div className="text-left mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold pb-4 md:pb-10">TEMPORÄREINSÄTZE</h2>
        <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
        <p className="text-sm md:text-base mb-4">
          Es braucht wenig, bis geschätzte Mitarbeitende ausfallen. Dies
          hinterlässt Lücken im Team und kann die Qualität der Leistungen
          beeinträchtigen.
        </p>
        <p className="text-sm md:text-base mb-4">
          Wir helfen Ihnen deshalb, personelle Engpässe schnell und zu fairen
          Konditionen zu überbrücken. Trotz Fachkräftemangel können Sie
          jederzeit auf qualifizierte Mitarbeitende zählen.
        </p>
        <p className="text-sm md:text-base">
          <strong>Tipp:</strong> Auch in Zeiten überdurchschnittlicher
          Auslastung helfen wir Ihnen gerne mit motivierten "Springern" aus.
        </p>
        <div className="flex justify-start mt-8 mb-10">
          <button
            onClick={() => navigate("/bewerbenbutton")}
            className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            JETZT BEWERBEN
          </button>
        </div>
      </div>
    </div>

    {/* Box 2 */}
    <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white">
      <div className="flex justify-center -mt-14">
        <div className="bg-[#003049] p-2 rounded-full">
          <img src={FestIcon} alt="FestIcon" className="h-14 w-14 max-w-full" />
        </div>
      </div>
      <div className="text-left mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold pb-4 md:pb-10">FESTVERMITTLUNGEN</h2>
        <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
        <p className="text-sm md:text-base mb-4">
          Sie benötigen Führungskräfte, erfahrene Mitarbeitende oder Personal
          mit Potenzial?
        </p>
        <p className="text-sm md:text-base mb-4">
          Wir haben das Netzwerk, die Erfahrung und das Gespür, um Menschen zu
          finden, die Sie und Ihren Betrieb langfristig weiterbringen. Gerne
          entlasten wir Sie vom aufwendigen Rekrutierungsprozess, überlassen
          das letzte Wort aber Ihnen.
        </p>
        <p className="text-sm md:text-base mb-4">
          Zufriedene Mitarbeitende machen den Unterschied im Berufsalltag aus.
        </p>
        <div className="flex justify-start mt-8 mb-10">
          <button
            onClick={() => navigate("/bewerbenbutton")}
            className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            JETZT BEWERBEN
          </button>
        </div>
      </div>
    </div>

    {/* Box 3 */}
    <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white">
      <div className="flex justify-center -mt-14">
        <div className="bg-[#003049] p-2 rounded-full">
          <img src={PoolIcon} alt="PoolIcon" className="h-14 w-14 max-w-full" />
        </div>
      </div>
      <div className="text-left mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold pb-4 md:pb-10">STELLENPOOL</h2>
        <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
        <p className="text-sm md:text-base mb-4">
          Egal, ob Sie verzweifelt nach passenden Fachkräften suchen oder sich
          selbst eine neue berufliche Herausforderung wünschen.
        </p>
        <p className="text-sm md:text-base mb-4">
          Wir verfügen über einen umfangreichen Stellenpool und ein weit
          verzweigtes Kontaktnetz zu zahlreichen Institutionen in der Branche.
        </p>
        <p className="text-sm md:text-base mb-4">
          Gerne bringen wir Sie mit den richtigen Menschen zusammen.
        </p>
        <div className="flex justify-start mt-8 mb-10">
          <button
            onClick={() => navigate("/bewerbenbutton")}
            className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            JETZT BEWERBEN
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default Page3;