import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import KetaPromologo from '../Assets/ketapromoicon.svg';
import KetaRealEstatelogo from '../Assets/ketaestate1.svg';
import KetaAGlogo from '../Assets/ketaagicon.svg';
import KetaCoinicon from '../Assets/ketacoinicon.svg';


const HomePage = () => {

  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <div className="overflow-x-hidden">
      <div>
        <div
          className="relative w-auto h-[320px] md:h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${require('../Assets/background-img.png')})`,
          }}
        >
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-montserrat z-10">
            {/* Text overlay image */}
            <img
              src={require('../Assets/textbg.png')}
              className="relative  w-[297px] h-[62px] md:w-[85vw] max-w-md md:w-[80vw] md:max-w-2xl md:h-auto object-contain"
              alt="Text Overlay"
            />

            {/* Subheading */}
            <p className="text-white text-sm text-[20px] md:text-5xl mt-2  mt-6 md:mt-12 font-light">
              HEUTE BEWERBEN!
            </p>

            {/* Button */}
            <button
              onClick={() => {
                navigate('/bewerben');
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center w-[79.54px] md:w-auto h-[21px] md:h-auto mt-6 md:mt-12 bg-white text-custom-color px-4 py-1 md:px-16 md:py-3 rounded-full text-xs md:text-2xl font-roboto"

            >
              HIER
            </button>
          </div>
        </div>







        <div className="bg-[#003049] py-16 font-roboto">
          {/* Section Title with lines on either side */}
          <div className="flex items-center justify-center mb-12 px-8">
            {/* Line to the left */}
            <div className="flex-grow h-[1px] bg-white mr-2 md:mr-8"></div>

            {/* Text with responsive line break */}
            <p className="text-center text-white text-[22px] md:text-4xl font-extralight tracking-wider">
              <span className="block md:inline">UNSERE</span> {/* Break on mobile, inline on desktop */}
              <span className="block md:inline">STELLENANGEBOTE</span>
            </p>

            {/* Line to the right */}
            <div className="flex-grow h-[1px] bg-white ml-2 md:ml-8 "></div>
          </div>


          {/* Job Offers Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-8">

            {/* First Column: Temporäreinsätze */}
            <div className="flex flex-col items-center text-center">
              <img
                src={require('../Assets/alarm-clock.png')} // Replace with actual path to the clock icon
                alt="Temporäreinsätze Icon"
                className=" w-[36px] h-[36px] md:w-16 md:h-16 mb-4"
              />
              <h3 className=" text-[16.29px] md:text-xl font-roboto mb-4 text-white">TEMPORÄREINSÄTZE</h3>
              <p className="text-white text-[12px] md:text-base mb-6">
                Es braucht wenig, bis geschätzte Mitarbeitende ausfallen. Dies hinterlässt
                Lücken im Team und kann die Qualität der Leistungen beeinträchtigen.
              </p>
              <button onClick={() => navigate('/bewerben')}
                className="flex items-center justify-center w-[157px] md:w-auto h-[30px] md:h-auto whitespace-nowrap text-[13.96px] md:text-base bg-white text-[#033755] px-6 py-2 rounded-full">
                JETZT BEWERBEN
              </button>
            </div>

            {/* Second Column: Festvermittlungen */}
            <div className="flex flex-col items-center text-center  md:pl-24">
              <img
                src={require('../Assets/lock.png')} // Replace with actual path to the lock icon
                alt="Festvermittlungen Icon"
                className=" w-[36px] h-[36px] md:w-16 md:h-16 mb-4"
              />
              <h3 className=" text=[16.29px] md:text-xl font-roboto mb-4 text-white">FESTVERMITTLUNGEN</h3>
              <p className="text-white text-[12px] md:text-base mb-6">
                Wir haben das Netzwerk, die Erfahrung und das Gespür, um Leute zu finden, die
                Sie und Ihren Betrieb langfristig weiterbringen.
              </p>
              <button
                onClick={() => {
                  navigate('/bewerben')
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center w-[157px] md:w-auto h-[30px] md:h-auto whitespace-nowrap text-[13.96px] md:text-base bg-white text-[#033755] px-6 py-2 rounded-full"
              >
                JETZT BEWERBEN
              </button>
            </div>

            {/* Third Column: Stellenpool */}
            <div className="flex flex-col items-center text-center">
              <img
                src={require('../Assets/list.png')} // Replace with actual path to the pool icon
                alt="Stellenpool Icon"
                className="w-[36px] h-[36px] md:w-16 md:h-16 mb-4"
              />
              <h3 className=" text-[16.29px] md:text-xl font-roboto mb-4 text-white">STELLENPOOL</h3>
              <p className="text-white text-[12px] md:text-base mb-6">
                Egal, ob Sie verzweifelt nach passenden Fachkräften suchen oder sich selbst
                eine neue berufliche Herausforderung wünschen, wir bieten Ihnen die
                Unterstützung und Ressourcen, die Sie benötigen.
              </p>
              <button onClick={() => navigate('/bewerben')}
                className="flex items-center justify-center w-[157px] md:w-auto h-[30px] md:h-auto whitespace-nowrap text-[13.96px] md:text-base bg-white text-[#033755] px-6 py-2 rounded-full">
                JETZT BEWERBEN
              </button>
            </div>

          </div>
        </div>

        <div className="bg-white text-gray-800 font-sans">
          <div className="max-w-5xl mx-auto py-16 text-center">
            {/* Main Heading with Horizontal Lines */}
            <div className="flex items-center mb-6">
              {/* Line to the left */}
              <div className="flex-grow h-[1px] bg-[#003049] ml-4 md:-ml-40"></div>

              {/* Text */}
              <h2 className="text-[22px] md:text-5xl font-light md:pb-10 text-[#003049] px-4 tracking-wider text-center">
                <span className="block md:inline">DIE RICHTIGE</span>
                <span className="block md:inline"> PERSON AM</span>
                <br className="hidden md:block" />
                <span className="block md:inline"> RICHTIGEN ORT</span>
              </h2>

              {/* Line to the right */}
              <div className="flex-grow h-[1px] bg-[#003049] mr-4 md:-mr-40"></div>
            </div>


            {/* Subheading Paragraph */}
            <p className="mb-16 max-w-3xl md:text-base md:pb-10 md:text-center text-left mx-auto text-[#003049] text-[14px] pl-4 md:px-0 ">
              Wir haben die Erfahrung und das Fingerspitzengefühl, Ihnen schnell die
              richtige Person zu vermitteln.
              <span className="block md:inline">  Einzige bekannte Risiken und
                Nebenwirkungen: Unsere Begeisterung kann ansteckend sein.</span>

            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 p-4 md:p-0 ">
              {/* Left Card */}
              <div
                className="border border-[#003049] rounded-lg p-8 relative border-2 md:mb-0 mb-8 cursor-pointer"
                onClick={() => navigate('/bewerber')}
              >
                {/* Top Border with Gap for Icon */}
                <div className="flex items-center justify-center -mt-20 mb-4">
                  <img
                    src={require('../Assets/manlogo.png')}
                    alt="Für Bewerber Icon"
                    className="md:w-24 md:h-24 w-[70.06px] h-[74.51px] bg-white p-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents event from bubbling up
                      navigate('/bewerber');
                    }}
                  />
                </div>
                <h3 className="font-bold text-[20px] md:text-xl mb-4 text-[#003049]">FÜR BEWERBER</h3>
                <p className="text-[#003049] text-[14px] md:text-base mb-8 text-center">
                  Ist Ihr Traumjob dabei? <br /> Entdecken Sie unsere spannenden Stellenangebote und bewerben Sie sich noch heute.
                </p>
                <button
                  className="flex items-center justify-center mx-auto bg-gray-800 text-white md:h-auto md:w-auto h-[26.71px] w-[126.46px] rounded-full md:text-base text-[14.99px] px-6 py-2 hover:bg-gray-700 whitespace-nowrap transition duration-200"
                >
                  LERNE MEHR
                </button>
              </div>

              {/* Right Card */}
              <div
                className="border border-[#003049] rounded-lg p-8 relative border-2 cursor-pointer"
                onClick={() => navigate('/unternehmen')}
              >
                {/* Icon Section */}
                <div className="flex items-center justify-center -mt-20 mb-4">
                  <img
                    src={require('../Assets/houselogo.png')}
                    alt="Für Unternehmen Icon"
                    className="md:w-18 md:h-24 w-[120.51px] h-[74.51px] bg-white pl-6 pr-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents event from bubbling up
                      navigate('/unternehmen');
                    }}
                  />
                </div>

                {/* Card Content */}
                <h3 className="font-bold text-xl mb-4 text-[#003049]">FÜR UNTERNEHMEN</h3>
                <p className="text-[#003049] text-[14px] md:text-base mb-8 text-center">
                  Wir kümmern uns mit Herzblut, dass Ihr Betrieb gut aufgehoben und mit qualifiziertem Personal
                  <br className="hidden md:block" /> {/* Visible only on desktop */}
                  ausgestattet ist.
                </p>

                <button
                  className="flex items-center justify-center mx-auto bg-gray-800 text-white md:h-auto md:w-auto h-[26.71px] w-[126.46px] rounded-full md:text-base text-[14.99px] px-6 py-2 hover:bg-gray-700 whitespace-nowrap transition duration-200"
                >
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
            <div className="flex items-center justify-center mb-12 md:mb-24 ">
              <div className="flex-grow border-t border-white md:w-auto w-[100px] md:-ml-24"></div>
              <h2 className="md:text-5xl whitespace-nowrap text-[22px] font-light text-center px-4 md:px-8">ÜBER KETA</h2>
              <div className="flex-grow border-t border-white md:w-auto w-[100px] md:-mr-24"></div>
            </div>


            {/* THIS IS THE HIDDEN IN MOBILE ONE */}
            <div className="hidden md:flex flex-col md:flex-row items-center md:justify-between gap-12">
              {/* Hexagonal Image */}
              <div className="w-full md:w-1/2 flex hidden md:block">
                <img
                  src={require('../Assets/Polygon.png')} // Replace with the actual path to the image
                  alt="Über Keta Image"
                  className="w-[90%] md:w-[734px] h-auto"
                />
              </div>

              {/* Text Content */}
              <div className="w-[1000px] text-left md:pl-8 text-lg">
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

            {/* THIS IS THE HIDDEN IN DESKTOP ONE */}
            <div className="md:hidden">
              <div className="text-[12px]">
                <p className="mb-4">
                  Wir sind seit 2013 in den Diensten der Menschheit tätig. Unser Kerngeschäft
                  konzentrierte sich zunächst auf die Personalvermittlung und den Personalverleih im Gesundheitswesen.
                </p>
                <p className="mb-4">
                  Aufgrund des Bedarfs an professionellen Fachkräften in anderen Branchen
                  haben wir uns entschieden, zusätzliche Fachbereiche anzubieten.
                </p>
              </div>
              <div className="w-full flex pt-8 pb-8">
                <img
                  src={require('../Assets/Polygon.png')} // Replace with the actual path to the image
                  alt="Über Keta Image"
                  className="w-[360px] h-[360px]"
                />
              </div>
              <div className="text-[12px]">
                <p className="mb-4">
                  Wir bieten Ihnen verschiedene Anstellungsmöglichkeiten, sowohl Festanstellungen als auch temporäre Einsätze.
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


            {/* hidenn */}
            <div className="hidden md:flex items-center justify-center mb-12">
              <div className="flex-grow border-t border-white -ml-24"></div>
              <h2 className="text-4xl font-light text-center px-8">
                PROFITIEREN SIE VON <br />UNSERER SPRECHSTUNDE
              </h2>
              <div className="flex-grow border-t border-white -mr-24"></div>
            </div>
            {/* hidenn */}




            <div className="flex items-center mb-6 md:hidden">
              {/* Line to the left */}
              <div className="flex-grow h-[1px] bg-white -ml-4"></div>
              {/* Text */}
              <h2 className="text-[22px] md:text-5xl font-light md:pb-10 text-white px-4 tracking-wider text-center">
                <span className="block md:inline">PROFITIEREN SIE</span>
                <span className="block md:inline">  VON UNSERER </span>
                <br className="hidden md:block" />
                <span className="block md:inline"> SPRECHSTUNDE</span>
              </h2>
              {/* Line to the right */}
              <div className="flex-grow h-[1px] bg-white -mr-4"></div>
            </div>




            {/* Card Section */}
            <div className="bg-[#011627] rounded-2xl relative overflow-hidden">
              {/* Image */}
              <div className="hidden md:block md:w-full md:h-full">
                <img
                  src={require('../Assets/talkative-cute-businesswoman-talking-mobile-phone-smiling-having-happy-conversation-standing-white-background 1.png')} // Replace with the actual path to the image
                  alt="Sprechstunde Image"
                  className="w-[365px] h-[211px] md:w-full md:h-full object-cover rounded-lg" // Add rounded-lg here to match the container
                />
              </div>




              <div className="block md:hidden w-full h-auto">
                <img
                  src={require('../Assets/beatygirl.png')} // Replace with the actual path to the image
                  alt="Sprechstunde Image"
                  className="w-[365px] h-[211px] object-cover rounded-lg"
                />
              </div>



              {/* Text and Button Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white">
                <p className="hidden md:block mb-6 text md:text-lg whitespace-nowrap max-w-sm">
                  Können wir Ihnen helfen? Gerne beraten wir Sie <br /> unverbindlich. Rufen Sie uns
                  jetzt an oder <br /> schreiben Sie uns.
                </p>

                <p className=" text-[12px] -ml-[22px] -mt-4 pb-4 block md:hidden">
                  Können wir Ihnen helfen?<br /> Gerne beraten wir Sie <br /> unverbindlich. Rufen Sie <br /> uns
                  jetzt an oder schreiben <br /> Sie uns.
                </p>


                <button
                  onClick={() => {
                    navigate('/kontakt');
                    window.scrollTo(0, 0);
                  }}
                  className="hidden md:block bg-[#003049] text-white px-8 py-3 rounded-full hover:bg-[#002635] transition duration-200 w-fit"
                >
                  KONTAKTIEREN SIE UNS
                </button>


                <button
                  onClick={() => {
                    navigate('/kontakt');
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center justify-center mt-4 -ml-6 md:hidden bg-[#003049] w-[137px] md:w-auto md:h-auto h-[24px] text-white whitespace-nowrap text-[8px] md:text-base px-8 py-3 rounded-full hover:bg-[#002635] transition duration-200 w-fit"
                >
                  KONTAKTIEREN SIE UNS
                </button>

              </div>
            </div>

          </div>

        </div>
        <div className="bg-[#003049] text-white py-16">
          {/* Title Section */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-white mx-4 md:mx-20"></div>
            <h2 className="text-center text-[22px] md:text-4xl tracking-wide">
              <span className="block md:inline">UNSERE</span> {/* Break on mobile, inline on desktop */}
              <span className="block md:inline">UNTERNEHMEN</span>
            </h2>
            <div className="flex-grow border-t border-white mx-4 md:mx-20"></div>
          </div>


          {/* Boxes Section */}
          <div className="hidden md:flex flex-nowrap justify-center items-center p-6 overflow-x-auto">
            {/* First Box */}
            <div className="p-4 text-center -mt-4">
              <div className="text-6xl mb-4">
                <a href="https://www.ketaestate.com/">
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

          <div className="block md:hidden grid grid-cols-2 gap-4 justify-center px-8 items-center pl-12">
            {/* First Box */}
            <div className="w-[133px] h-[138px] flex items-center justify-center bg-[#003049] rounded-lg ">
              <a href="https://ketajob.ch">
                <img
                  src={KetaPromologo}
                  alt="Box 1"
                  className="object-contain rounded-lg"
                />
              </a>
            </div>

            {/* Second Box */}
            <div className="w-[133px] h-[138px] flex items-center justify-center bg-[#003049] rounded-lg">
              <a href="https://www.instagram.com/keta.promo/">
                <img
                  src={KetaRealEstatelogo}
                  alt="Box 1"
                  className="object-contain rounded-lg"
                />
              </a>
            </div>

            {/* Third Box */}
            <div className="w-[133px] h-[138px] flex items-center justify-center bg-[#003049] rounded-2xl">
              <a href="https://www.instagram.com/ketaimmotreu?igsh=MWg5dThzMm5razh3Yw==">
                <img
                  src={KetaAGlogo}
                  alt="Box 1"
                  className="object-contain rounded-lg"
                />
              </a>
            </div>

            {/* Fourth Box */}
            <div className="w-[133px] h-[138px] flex items-center justify-center bg-[#003049] rounded-lg">
              <a href="https://ketacoin.io/">
                <img
                  src={KetaCoinicon}
                  alt="Box 1"
                  className="object-contain rounded-lg"
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
