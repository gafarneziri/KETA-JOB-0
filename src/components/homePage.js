import React from 'react';

const homePage = () => {
  return (
    <div>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${require('../Assets/bgfoto.png')})` }}>
      {/* Main content, centered in the middle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-montserrat z-10">
        
        {/* Text overlay image */}
        <img 
          src={require('../Assets/textbg.png')} 
          className="relative w-[80vw] max-w-2xl h-auto object-contain" 
          alt="Text Overlay" 
        />
  
        {/* Subheading placed on top of the text background */}
        <p className="text-white text-5xl mt-12 font-light">
          HEUTE BEWERBEN!
        </p>
  
        {/* Button below the subheading */}
        <button className="mt-12 bg-white text-custom-color px-16 py-3 rounded-full text-2xl font-roboto">
          HIER
        </button>
      </div>
    </div>
  
    <div className="bg-[#003049] py-16 font-roboto">
      {/* Section Title with lines on either side */}
      <div className="flex items-center justify-center mb-12 px-8">
        <div className="flex-grow h-0.5 bg-white mr-8"></div> {/* Line to the left */}
        <p className="text-center text-white text-4xl font-light tracking-wider whitespace-nowrap">
          UNSERE STELLENANGEBOTE
        </p>
        <div className="flex-grow h-0.5 bg-white ml-8"></div> {/* Line to the right */}
      </div>
  
      {/* Job Offers Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-8">
        
        {/* First Column: Temporäreinsätze */}
        <div className="flex flex-col items-center text-center">
          <img
            src={require('../Assets/alarm-clock.png')} // Replace with actual path to the clock icon
            alt="Temporäreinsätze Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-roboto mb-4 text-white">TEMPORÄREINSÄTZE</h3>
          <p className="text-white text-base mb-6">
            Es braucht wenig, bis geschätzte Mitarbeitende ausfallen. Dies hinterlässt
            Lücken im Team und kann die Qualität der Leistungen beeinträchtigen.
          </p>
          <button className="bg-white text-[#033755] px-6 py-2 rounded-full">
            JETZT BEWERBEN
          </button>
        </div>
  
        {/* Second Column: Festvermittlungen */}
        <div className="flex flex-col items-center text-center pl-24">
          <img
            src={require('../Assets/lock.png')} // Replace with actual path to the lock icon
            alt="Festvermittlungen Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-roboto mb-4 text-white">FESTVERMITTLUNGEN</h3>
          <p className="text-white text-base mb-6">
            Wir haben das Netzwerk, die Erfahrung und das Gespür, um Leute zu finden, die
            Sie und Ihren Betrieb langfristig weiterbringen.
          </p>
          <button className="bg-white text-[#033755] px-6 py-2 rounded-full">
            JETZT BEWERBEN
          </button>
        </div>
  
        {/* Third Column: Stellenpool */}
        <div className="flex flex-col items-center text-center">
          <img
            src={require('../Assets/list.png')} // Replace with actual path to the pool icon
            alt="Stellenpool Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-roboto mb-4 text-white">STELLENPOOL</h3>
          <p className="text-white text-base mb-6">
            Egal, ob Sie verzweifelt nach passenden Fachkräften suchen oder sich selbst
            eine neue berufliche Herausforderung wünschen, wir bieten Ihnen die
            Unterstützung und Ressourcen, die Sie benötigen.
          </p>
          <button className="bg-white text-[#033755] px-6 py-2 rounded-full">
            JETZT BEWERBEN
          </button>
        </div>
  
      </div>
    </div>
  
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto py-16 text-center">
        {/* Main Heading with Horizontal Lines */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600 -ml-32"></div>
          <h2 className="text-5xl font-light pb-10">
            DIE RICHTIGE PERSON AM<br /> RICHTIGEN ORT
          </h2>
          <div className="flex-grow border-t border-gray-600 -mr-32"></div>
        </div>
  
        {/* Subheading Paragraph */}
        <p className="mb-16 max-w-3xl mx-auto">
          Wir haben die Erfahrung und das Fingerspitzengefühl, Ihnen schnell die
          richtige Person zu vermitteln. Einzige bekannte Risiken und
          Nebenwirkungen: Unsere Begeisterung kann ansteckend sein.
        </p>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* Left Card */}
  <div className="border border-[#003049] rounded-lg p-8 relative">
    {/* Top Border with Gap for Icon */}
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
      
      <div className="w-32 h-0"></div> {/* Widened Gap for the icon */}

    </div>
    <div className="flex items-center justify-center -mt-20 mb-4">
      <img
        src={require('../Assets/manlogo.png')} // Replace with the actual path to the person icon
        alt="Für Bewerber Icon"
        className="w-24 h-24 bg-white  p-0"
      />
    </div>
    <h3 className="font-bold text-xl mb-4">Für Bewerber</h3>
    <p className="text-gray-600 mb-8 text-center">
      Ist Ihr Traumjob dabei? Entdecken Sie unsere spannenden Stellenangebote und bewerben Sie sich noch<br/> heute.
    </p>
    <button className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition duration-200">
      LERNE MEHR
    </button>
  </div>

  {/* Right Card */}
  <div className="border border-[#003049] rounded-lg p-8 relative">
    {/* Top Border with Gap for Icon */}
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
    
      <div className="w-32 h-0"></div> {/* Widened Gap for the icon */}
      
    </div>
    <div className="flex items-center justify-center -mt-20 mb-4">
      <img
        src={require('../Assets/houselogo.png')} // Replace with the actual path to the building icon
        alt="Für Unternehmen Icon"
        className="w-24 h-24 bg-white  p-0 "
      />
    </div>
    <h3 className="font-bold text-xl mb-4">Für Unternehmen</h3>
    <p className="text-gray-600 mb-8 text-center">
      Wir kümmern uns mit Herzblut, dass Ihr Betrieb gut aufgehoben und mit qualifiziertem Personal ausgestattet ist.
    </p>
    <button className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition duration-200">
      LERNE MEHR
    </button>
  </div>
</div>

      </div>
    </div>
  </div>
  
  );
};

export default homePage;
