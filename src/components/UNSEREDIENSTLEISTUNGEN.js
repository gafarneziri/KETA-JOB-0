import React from 'react';
import TempIcon from '../Assets/TempIcon.png';
import FestIcon from '../Assets/FestIcon.png';
import PoolIcon from '../Assets/PoolIcon.png';
import { useNavigate } from 'react-router-dom';

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#003049] text-white py-10 font-Montserrat max-w-screen overflow-hidden">
      {/* Title Section */}
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="flex-grow border-t border-white w-1/5 sm:w-1/6"></div>
        <h2 className="text-center text-3xl md:text-4xl px-4 whitespace-nowrap">
          UNSERE DIENSTLEISTUNGEN
        </h2>
        <div className="flex-grow border-t border-white w-1/5 sm:w-1/6"></div>
      </div>

      {/* Service Boxes */}
      <div className="flex flex-col space-y-12 md:space-y-16">
        {/* Box 1 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white mx-auto w-[95%] sm:w-[90%] lg:w-[80%]">
          <div className="flex justify-center -mt-14">
            <div className="bg-[#003049] p-2 rounded-full">
              <img src={TempIcon} alt="TempIcon" className="h-14 w-14" />
            </div>
          </div>
          <div className="text-left mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center pb-4">TEMPORÄREINSÄTZE</h2>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-left">IM DETAIL...</h3>
            <p className="text-sm md:text-base mb-4">
              Es braucht wenig, bis geschätzte Mitarbeitende ausfallen. Dies hinterlässt Lücken im Team und kann die Qualität der Leistungen beeinträchtigen.
            </p>
            <p className="text-sm md:text-base mb-4">
              Wir helfen Ihnen deshalb, personelle Engpässe schnell und zu fairen Konditionen zu überbrücken.
            </p>
            <p className="text-sm md:text-base">
              <strong>Tipp:</strong> Auch in Zeiten überdurchschnittlicher Auslastung helfen wir Ihnen gerne mit motivierten "Springern" aus.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate('/bewerbenbutton')}
                className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
              >
                JETZT BEWERBEN
              </button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white mx-auto w-[95%] sm:w-[90%] lg:w-[80%]">
          <div className="flex justify-center -mt-14">
            <div className="bg-[#003049] p-2 rounded-full">
              <img src={FestIcon} alt="FestIcon" className="h-14 w-14" />
            </div>
          </div>
          <div className="text-left mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center pb-4">FESTVERMITTLUNGEN</h2>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-left">IM DETAIL...</h3>
            <p className="text-sm md:text-base mb-4">
              Sie benötigen Führungskräfte, erfahrene Mitarbeitende oder Personal mit Potenzial?
            </p>
            <p className="text-sm md:text-base mb-4">
              Wir haben das Netzwerk, die Erfahrung und das Gespür, um Menschen zu finden, die Sie langfristig weiterbringen.
            </p>
            <p className="text-sm md:text-base">
              Zufriedene Mitarbeitende machen den Unterschied im Berufsalltag aus.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate('/bewerbenbutton')}
                className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
              >
                JETZT BEWERBEN
              </button>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative bg-[#003049] text-white rounded-lg p-6 shadow-lg border border-white mx-auto w-[95%] sm:w-[90%] lg:w-[80%]">
          <div className="flex justify-center -mt-14">
            <div className="bg-[#003049] p-2 rounded-full">
              <img src={PoolIcon} alt="PoolIcon" className="h-14 w-14" />
            </div>
          </div>
          <div className="text-left mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center pb-4">STELLENPOOL</h2>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-left">IM DETAIL...</h3>
            <p className="text-sm md:text-base mb-4">
              Egal, ob Sie verzweifelt nach passenden Fachkräften suchen oder eine neue berufliche Herausforderung wünschen.
            </p>
            <p className="text-sm md:text-base mb-4">
              Wir verfügen über einen umfangreichen Stellenpool und ein weit verzweigtes Kontaktnetz.
            </p>
            <p className="text-sm md:text-base">
              Gerne bringen wir Sie mit den richtigen Menschen zusammen.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate('/bewerbenbutton')}
                className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
              >
                JETZT BEWERBEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
