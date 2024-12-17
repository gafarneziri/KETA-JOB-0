import React from 'react';
import Uberuns1 from '../Assets/Uberuns.png';
import nidaImage from '../Assets/NidaImage.png';
import nathalieImage from '../Assets/NathaleImage.png';
import fatimeImage from '../Assets/FatimeImage.png';
import emailIcon from '../Assets/emailIcon.png';
import phoneIcon from '../Assets/phoneIcon.png';
import languageIcon from '../Assets/languageIcon.png';


const Uberuns = () => {
  return (
<div className="Uberuns bg-[#003049] text-white py-10 font-Montserrat relative">
  {/* Full-width Image */}
  <div className="relative w-full">
    <img src={Uberuns1} alt="uberuns" className="w-full h-auto" />

    {/* Centered Title on Image */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <hr className="border-t-2 border-white w-2/6" />
        <p className="  font-Montserrat  text-[70px] mx-4">ÜBER UNS</p>
        <hr className="border-t-2 border-white w-2/6" />
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center text-center py-16 px-4">
    {/* Text Content */}
    <p className="text-white text-left text-lg mt-8 text-[28px] ml-4 mr-4 leading-relaxed">
      So denken und handeln wir: Menschen sehen wir nie nur als Kostenfaktoren. Vielmehr sind es die richtigen Mitarbeiter, die für einen gesunden Betrieb sorgen.
      <br /><br />
      Unsere Dienstleistungen beginnen wir wie Ärzte mit einer Anamnese: Wir möchten wissen, wo der Schuh drückt.
      <br /><br />
      Daraufhin suchen wir schnell und unkompliziert eine Lösung für Ihr Problem. Wir ermöglichen kurzfristige Einsätze von Fachkräften.
      <br /><br />
      Obwohl wir professionell vorgehen und uns mit Zahlen und Fakten auskennen, sind wir überzeugt, dass man letztlich nur mit dem Herzen gut sieht. Darum investieren wir viel Zeit darin, Menschen wahrzunehmen, sie zu unterstützen und den richtigen Job für sie zu finden.
      <br /><br />
      Wir leisten gerne einen Sondereinsatz, damit Ihr Betrieb auf Hochtouren laufen kann. Wir legen einen großen Wert auf faire Löhne und Arbeitsbedingungen sowie ein vertrauensvolles Miteinander. Das zählt sich langfristig für alle aus.
    </p>
  </div>




  <div className="flex justify-center space-x-8 py-10">
  {/* Profile 1 */}
  <div className="text-white p-6">
    <img src={nidaImage} alt="Nida Hamiti" className="w-96 h-auto object-cover rounded-lg mx-auto mb-4" />
    <h2 className="text-center text-xl ">Frau</h2>
    <h3 className="text-center text-2xl font-semibold">Nida Hamiti</h3>
    <p className="text-center text-md mb-2">CEO</p>
    <hr className="border-t border-gray-400 my-4 mx-14" />
    <div className="flex items-center justify-center space-x-2">
      <img src={languageIcon} alt="Language Icon" className="w-5 h-5" />
      <p className="text-sm">Deutsch, Englisch, Albanisch</p>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
      <a href="mailto:nida@keta-group.ch" className="text-sm">nh@keta-group.ch</a>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
      <a href="tel:+41412521818" className="text-sm">+41 41 252 18 18</a>
    </div>
  </div>

  {/* Profile 2 */}
  <div className="text-white p-6">
    <img src={nathalieImage} alt="Nathalie Dellspreger" className="w-96 h-auto object-cover rounded-lg mx-auto mb-4" />
    <h2 className="text-center text-xl ">Frau</h2>
    <h3 className="text-center text-2xl font-semibold">Nathalie Dellspreger</h3>
    <p className="text-center text-md mb-2">Stv. Geschäftsführerin</p>
    <hr className="border-t border-gray-400 my-4 mx-14" />
    <div className="flex items-center justify-center space-x-2">
      <img src={languageIcon} alt="Language Icon" className="w-5 h-5" />
      <p className="text-sm">Deutsch, Englisch, Portugiesisch</p>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
      <a href="mailto:nathalie@keta-group.ch" className="text-sm">nd@keta-group.ch</a>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
      <a href="tel:+41412521818" className="text-sm">+41 41 252 18 18</a>
    </div>
  </div>

  {/* Profile 3 */}
  <div className="text-white p-6">
    <img src={fatimeImage} alt="Fatime Hamiti" className="w-96 h-auto object-cover rounded-lg mx-auto mb-4" />
    <h2 className="text-center text-xl ">Frau</h2>
    <h3 className="text-center text-2xl font-semibold">Fatime Hamiti</h3>
    <p className="text-center text-md mb-2">CFO</p>
    <hr className="border-t border-gray-400 my-4 mx-14" />
    <div className="flex items-center justify-center space-x-2">
      <img src={languageIcon} alt="Language Icon" className="w-5 h-5" />
      <p className="text-sm">Deutsch, Englisch, Albanisch</p>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
      <a href="mailto:fatime@keta-group.ch" className="text-sm">fh@keta-group.ch</a>
    </div>
    <div className="flex items-center justify-center space-x-2 mt-4">
      <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
      <a href="tel:+41412521818" className="text-sm">+41 41 252 18 18</a>
    </div>
  </div>
</div>




</div>



  


  )
}

export default Uberuns ;
