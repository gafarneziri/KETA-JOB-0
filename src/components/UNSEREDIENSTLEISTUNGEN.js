import React from 'react';
import TempIcon from '../Assets/TempIcon.png';
import FestIcon from '../Assets/FestIcon.png';
import PoolIcon from '../Assets/PoolIcon.png';

const Page3 = () => {
  return (
<div className="bg-[#003049] text-white py-10 font-Montserrat">
  <div className="flex"
   >
<div className="flex-grow border-t border-white -ml-24 ml-20 mt-6"></div>
  <h2 className="text-center text-4xl mb-8 pb-12 px-8">UNSERE DIENSTLEISTUNGEN</h2>
  <div className="flex-grow border-t border-white -mr-24 mr-24 mt-6"></div>
  </div>
  {/* Box 1 - TEMPORÄREINSÄTZE */}
  <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-5xl shadow-lg border border-white m-8 mx-auto mb-8">
    <div className="flex justify-center -mt-14">
      <div className="bg-[#003049] p-2 rounded-full">
        <img src={TempIcon} alt="TempIcon" className="h-14 w-14" />
      </div>
    </div>
    <div className="text-left mt-4">
      <h2 className="text-4xl font-semibold text-left pb-10">TEMPORÄREINSÄTZE</h2>
      <h3 className="text-2xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
      <p className="text-[16px] mb-4">
        Es braucht wenig, bis geschätzte Mitarbeitende ausfallen. Dies hinterlässt Lücken im Team und kann die Qualität der Leistungen beeinträchtigen.
      </p>
      <p className="text-[16px] mb-4">
        Wir helfen Ihnen deshalb, personelle Engpässe schnell und zu fairen Konditionen zu überbrücken. Trotz Fachkräftemangel können Sie jederzeit auf qualifizierte Mitarbeitende zählen.
      </p>
      <p className="text-[16px]">
        <strong>Tipp:</strong> Auch in Zeiten überdurchschnittlicher Auslastung helfen wir Ihnen gerne mit motivierten "Springern" aus.
      </p>
      <div className="flex justify-left mt-6">
        <button className="bg-white text-[#003049] font-Montserrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
          JETZT BEWERBEN
        </button>
      </div>
    </div>
  </div>

  {/* Box 2 - FESTVERMITTLUNGEN */}
  <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-5xl shadow-lg border border-white m-8 mx-auto mb-[30px]">
    <div className="flex justify-center -mt-14">
      <div className="bg-[#003049] p-2 rounded-full">
        <img src={FestIcon} alt="FestIcon" className="h-14 w-14" />
      </div>
    </div>
    <div className="text-left mt-4">
      <h2 className="text-4xl font-semibold text-left pb-10">FESTVERMITTLUNGEN</h2>
      <h3 className="text-2xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
      <p className="text-[16px] mb-4">Sie benötigen Führungskräfte, erfahrene Mitarbeitende oder Personal mit Potenzial? </p>
      <p className="text-[16px] mb-4">Wir haben das Netzwerk, die Erfahrung und das Gespür, um Menschen zu finden, die Sie und Ihren Betrieb langfristig weiterbringen. Gerne entlasten wir Sie vom aufwendigen Rekrutierungsprozess, überlassen das letzte Wort aber Ihnen.</p>
      <p className="text-[16px] mb-4">Zufriedene Mitarbeitende machen den Unterschied im Berufsalltag aus.</p>
      <div className="flex justify-left mt-6">
        <button className="bg-white text-[#003049] font-Monsterrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
          JETZT BEWERBEN
        </button>
      </div>
    </div>
  </div>

  {/* Box 3 - STELLENPOOL */}
  <div className="relative bg-[#003049] text-white rounded-lg p-6 max-w-5xl shadow-lg border border-white m-8 mx-auto mb-[30px]">
    <div className="flex justify-center -mt-14">
      <div className="bg-[#003049] p-2 rounded-full">
        <img src={PoolIcon} alt="PoolIcon" className="h-14 w-14" />
      </div>
    </div>
    <div className="text-left mt-4">
      <h2 className="text-4xl font-semibold text-left pb-10">STELLENPOOL</h2>
      <h3 className="text-2xl font-semibold mt-4 mb-2">IM DETAIL...</h3>
      <p className="text-[16px] mb-4">Egal, ob Sie verzweifelt nach passenden Fachkräften suchen oder sich selbst eine neue berufliche Herausforderung wünschen. </p>
      <p className="text-[16px] mb-4">Wir verfügen über einen umfangreichen Stellenpool und ein weit verzweigtes Kontaktnetz zu zahlreichen Institutionen in der Branche.</p>
      <p className="text-[16px] mb-4">Gerne bringen wir Sie mit den richtigen Menschen zusammen.</p>
      <div className="flex justify-left mt-6">
        <button className="bg-white text-[#003049] font-Monsterrat py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
          JETZT BEWERBEN
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page3;
