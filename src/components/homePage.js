import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const HomePage = () => {

  const navigate = useNavigate(); // Initialize navigate hook

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
        <button
        onClick={() => {
          navigate('/bewerbenbutton')
          window.scrollTo(0, 0);
        }} // Add navigation to the button
        className="mt-12 bg-white text-custom-color px-16 py-3 rounded-full text-2xl font-roboto"
      >
        HIER
      </button>
      </div>
    </div>
  
    <div className="bg-[#003049] py-16 font-roboto">
      {/* Section Title with lines on either side */}
      <div className="flex items-center justify-center mb-12 px-8">
        <div className="flex-grow h-0.5 bg-white mr-8"></div> {/* Line to the left */}
        <p className="text-center text-white text-4xl font-extralight	 tracking-wider whitespace-nowrap">
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
          <button  onClick={() => navigate('/bewerbenbutton')}  className="bg-white text-[#033755] px-6 py-2 rounded-full">
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
          <button
           onClick={() => {
            navigate('/bewerbenbutton')
            window.scrollTo(0, 0);
          }}  
          className="bg-white text-[#033755] px-6 py-2 rounded-full">
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
          <button  onClick={() => navigate('/bewerbenbutton')}  className="bg-white text-[#033755] px-6 py-2 rounded-full">
            JETZT BEWERBEN
          </button>
        </div>
  
      </div>
    </div>
  
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto py-16 text-center">
        {/* Main Heading with Horizontal Lines */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-[#003049] -ml-40 border-2"></div>
          <h2 className="text-5xl font-light pb-10 text-[#003049] px-8 tracking-wider">
            DIE RICHTIGE PERSON AM<br /> RICHTIGEN ORT
          </h2>
          <div className="flex-grow border-t border-[#003049] -mr-40 border-2"></div>
        </div>
  
        {/* Subheading Paragraph */}
        <p className="mb-16 max-w-3xl mx-auto text-[#003049] ">
          Wir haben die Erfahrung und das Fingerspitzengefühl, Ihnen schnell die
          richtige Person zu vermitteln. Einzige bekannte Risiken und
          Nebenwirkungen: Unsere Begeisterung kann ansteckend sein.
        </p>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ">
  {/* Left Card */}
  <div className="border border-[#003049] rounded-lg p-8 relative border-2 ">
    {/* Top Border with Gap for Icon */}
    <div className="flex items-center justify-center -mt-20 mb-4">
      <img
        src={require('../Assets/manlogo.png')} // Replace with the actual path to the person icon
        alt="Für Bewerber Icon"
        className="w-24 h-24 bg-white  p-0"
      />
    </div>
    <h3 className="font-bold text-xl mb-4 text-[#003049] ">FÜR BEWERBER</h3>
    <p className="text-[#003049]  mb-8 text-center">
      Ist Ihr Traumjob dabei? <br /> Entdecken Sie unsere spannenden Stellenangebote und bewerben Sie sich noch heute.
    </p>
    <button  onClick={() => navigate('/bewerber')} className="bg-gray-800 text-white  rounded-full px-6 py-2 hover:bg-gray-700 transition duration-200">
      LERNE MEHR
    </button>
  </div>

  {/* Right Card */}
  <div className="border border-[#003049] rounded-lg p-8 relative border-2">
  {/* Top Border with Gap for Icon */}
 

  {/* Icon Section */}
  <div className="flex items-center justify-center -mt-20 mb-4">
    <img
      src={require('../Assets/houselogo.png')} // Replace with the actual path to the person icon
      alt="Für Bewerber Icon"
      className="w-18 h-24 bg-white  pl-6 pr-6"
    />
  </div>

  {/* Card Content */}
  <h3 className="font-bold text-xl mb-4 text-[#003049] ">FÜR UNTERNEHMEN</h3>
  <p className="text-[#003049]  mb-8 text-center">
  Wir kümmern uns mit Herzblut, dass Ihr Betrieb gut aufgehoben und mit qualifiziertem Personal<br /> ausgestattet ist.
  </p>
  <button  onClick={() => navigate('/unternehmen')} className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition duration-200">
    LERNE MEHR
  </button>
</div>

</div>


      </div>
    </div>
    <div className="bg-[#003049] text-white py-16 font-montserrat">
  {/* Section: Über Keta */}
  <div className="max-w-7xl mx-auto px-8 md:px-16 mb-24">
  {/* Title with lines */}
  <div className="flex items-center justify-center mb-24 ">
    <div className="flex-grow border-t border-white -ml-24"></div>
    <h2 className="text-5xl font-light text-center px-8">ÜBER KETA</h2>
    <div className="flex-grow border-t border-white -mr-24"></div>
  </div>

  {/* Content - Image and Description */}
  <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
    {/* Hexagonal Image */}
    <div className="w-full  md:w-1/2 flex  ">
      <img
        src={require('../Assets/Polygon.png')} // Replace with the actual path to the image
        alt="Über Keta Image"
        className="w-[90%] md:w-[734px] h-auto"
      />
    </div>

    {/* Text Content */}
    <div className=" w-[1000px]		 text-left  md:pl-8 text-lg">
      <p className="mb-4">
        Wir sind seit 2013 in den Diensten der Menschheit tätig. Unser Kerngeschäft
        konzentrierte sich zunächst auf die Personalvermittlung und den Personalverleih im Gesundheitswesen.
      </p>
      <p className="mb-4">
        Aufgrund des Bedarfs an professionellen Fachkräften in anderen Branchen
        haben wir uns entschieden, zusätzliche Fachbereiche anzubieten.
      </p>
      <p className="mb-4">
        Wir bieten Ihnen verschiedene Anstellungsmöglichkeiten, sowohl
        Festanstellungen als auch temporäre Einsätze.
      </p>
      <p className="mb-4">
        Mit Herzblut sorgen wir dafür, dass unsere Kunden gut betreut werden.
        Unsere Aufgabe besteht darin, sich um Ihre Bedürfnisse zu kümmern. Wir
        haben die Erfahrung und das Feingefühl, Ihnen rasch die richtigen Mitarbeiter
        zu vermitteln.
      </p>
      <p className="mb-4">
        Ihr Erfolg ist unser Erfolg. Wir bieten Ihnen das beste Angebot.
      </p>
    </div>
  </div>
</div>


  {/* Section: Sprechstunde */}
  <div className="max-w-7xl mx-auto px-8 md:px-16">
  {/* Title with lines */}
  <div className="flex items-center justify-center mb-12">
    <div className="flex-grow border-t border-white -ml-24"></div>
    <h2 className="text-4xl font-light text-center px-8">
      PROFITIEREN SIE VON <br />UNSERER SPRECHSTUNDE
    </h2>
    <div className="flex-grow border-t border-white -mr-24"></div>
  </div>

  {/* Card Section */}
  <div className="bg-[#011627] rounded-2xl relative overflow-hidden">
  {/* Image */}
  <div className="w-full h-full">
    <img
      src={require('../Assets/talkative-cute-businesswoman-talking-mobile-phone-smiling-having-happy-conversation-standing-white-background 1.png')} // Replace with the actual path to the image
      alt="Sprechstunde Image"
      className="w-full h-full object-cover rounded-lg" // Add rounded-lg here to match the container
    />
  </div>

  {/* Text and Button Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white">
    <p className="mb-6 text-lg max-w-sm">
      Können wir Ihnen helfen? Gerne beraten wir Sie unverbindlich. Rufen Sie uns
      jetzt an oder schreiben Sie uns.
    </p>
    <button
      onClick={() => {
        navigate('/kontakt')
        window.scrollTo(0, 0);
      }} 
     className="bg-[#003049] text-white px-8 py-3 rounded-full hover:bg-[#002635] transition duration-200 w-fit">
      KONTAKTIEREN SIE UNS
    </button>
  </div>
</div>

</div>

  </div>
  <div className="bg-[#003049] text-white py-16">
  {/* Title Section */}
  <div className="flex items-center justify-center mb-12">
    <div className="flex-grow border-t border-white mx-20"></div> {/* Increased horizontal margin */}
    <h2 className="text-center text-3xl md:text-4xl tracking-wide">UNSERE UNTERNEHMEN</h2>
    <div className="flex-grow border-t border-white mx-20"></div> {/* Increased horizontal margin */}
  </div>

 {/* Boxes Section */}
 <div className="flex flex-nowrap justify-center items-center p-6 overflow-x-auto">
        {/* First Box */}
        <div className="p-4 text-center -mt-4">
          <div className="text-6xl mb-4">
            <a href="https://ketajob.ch">
              <img
                src={require("../Assets/kt1.png")}
                className="mx-auto hover:scale-110 transition-transform duration-300"
                alt="home Icon"
              />
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="h-44 -mb-4 w-px bg-white mx-2"></div>

        {/* Second Box */}
        <div className="p-4 text-center -mt-4">
          <div className="text-6xl mb-4">
            <a href="https://www.instagram.com/keta.promo/">
              <img
                src={require("../Assets/Screenshot 2025-01-03 144101.png")}
                className="mx-auto hover:scale-110 transition-transform duration-300"
                alt="building Icon"
              />
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="h-44 -mb-4 w-px bg-white mx-2"></div>

        {/* Third Box */}
        <div className="p-4 text-center">
          <div className="text-6xl mb-4">
            <a href="https://www.instagram.com/ketaimmotreu?igsh=MWg5dThzMm5razh3Yw==">
              <img
                src={require("../Assets/kt3.png")}
                className="mx-auto hover:scale-110 transition-transform duration-300"
                alt="grow Icon"
              />
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="h-44 -mb-4 w-px bg-white mx-2"></div>

        {/* Fourth Box */}
        <div className="p-4 text-center">
          <div className="text-6xl mb-4">
            <a href="https://ketacoin.io/">
              <img
                src={require("../Assets/kt4.png")}
                className="mx-auto hover:scale-110 transition-transform duration-300"
                alt="Alarm Icon"
              />
            </a>
          </div>
        </div>
      </div>


</div>

</div>

  
  
  );
};

export default HomePage;
