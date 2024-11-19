import React from 'react';
import Uberuns1 from '../Assets/Bewerben.png';

const Bewerben = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: adds a smooth scrolling effect
    });
  };
  
  
  window.scrollTo(0, 0);

  return (
    <div className="Uberuns bg-[#003049] text-white font-Montserrat relative">
      {/* Top Section with Background Image and Centered Title */}
      <div className="relative w-full">
        <img src={Uberuns1} alt="uberuns" className="w-full h-auto" />

        {/* Centered Title on Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <hr className="border-t-2 border-white" style={{ width: '500px' }} />
            <p className="font-Montserrat text-[60px] mx-4 font-normal">BEWERBEN</p>
            <hr className="border-t-2 border-white" style={{ width: '500px' }} />
          </div>
        </div>
      </div>

      {/* Lower Section with Subtitle and Text Content */}
      <div className="bg-[#003049] py-10 px-6">
        <div className="flex items-center justify-center mb-8">
          <hr className="border-t-2 border-white" style={{ width: '464px' }} />
          <span className="text-white uppercase text-[30px] font-Montserrat font-normal mx-4">
            BEWERBEN SIE SICH JETZT
          </span>
          <hr className="border-t-2 border-white" style={{ width: '464px' }} />
        </div>

        {/* Text Content Below Subtitle */}
        <div className="text-left max-w-4xl text-[22px] leading-relaxed pl-8 pt-8">
          <p className="whitespace-nowrap">
            Wir freuen uns darauf, Ihnen zu helfen, den perfekten Job zu finden, der zu Ihren Fähigkeiten und Ambitionen passt.
          </p>
          <p className="mt-6 whitespace-nowrap">
            Bitte füllen Sie das untenstehende Formular mit Ihren Angaben aus und laden Sie die erforderlichen Dokumente hoch.<br /> Unser Team wird Ihre Bewerbung prüfen und sich umgehend bei Ihnen melden.
          </p>
          <p className="mt-6 whitespace-nowrap">
            Wenn Sie Fragen haben oder Unterstützung benötigen, zögern Sie nicht, uns zu kontaktieren.
          </p>
        </div>
      </div>

      <div className="bg-[#003049] text-white py-32 px-16 font-Montserrat">
  {/* Form Container */}
  <div className="bg-white rounded-lg shadow-lg p-20 max-w-[1800px] h-auto mx-auto">

    {/* Personal Information Section */}
    <div className="flex flex-col mb-12">
      <h3 className="text-[#003049] text-[27.28px] font-semibold mb-8 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">PERSÖNLICHE INFORMATIONEN</h3> {/* Increased mb-8 for spacing */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-24 w-2/3 mx-auto">
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">Vorname</label>
          <input type="text" placeholder="Vorname" className="border border-gray-300 rounded-[236.29px] w-[420px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">Nachname</label>
          <input type="text" placeholder="Nachname" className="border border-gray-300 rounded-[236.29px] w-[420px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">E-Mail Adresse</label>
          <input type="email" placeholder="Email" className="border border-gray-300 rounded-[236.29px] w-[420px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">Mobil</label>
          <input type="tel" placeholder="Tel: z.B. +43…" className="border border-gray-300 rounded-[236.29px] w-[420px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
      </div>
    </div>

    {/* Address Section */}
    <div className="flex flex-col mb-12">
      <h3 className="text-[#003049] text-[27.28px] font-semibold mb-8 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049] ">ADRESSE</h3> {/* Increased mb-8 for spacing */}
      <div className="grid grid-cols-3 gap-y-10 gap-x-64 w-2/3 mx-auto">
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px] whitespace-nowrap">Strasse / Hausnummer</label>
          <input type="text" placeholder="Adresse" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">Ort</label>
          <input type="text" placeholder="Ort" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px]">PLZ</label>
          <input type="text" placeholder="PLZ" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
      </div>
    </div>

    {/* Job Details Section */}
    <div className="flex flex-col mb-12">
      <h3 className="text-[#003049] text-[27.28px] font-semibold mb-8 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">JOB DETAILS</h3> {/* Increased mb-8 for spacing */}
      <div className="grid grid-cols-3 gap-y-10 gap-x-64 w-2/3 mx-auto">
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px] whitespace-nowrap">Gewünschtes Pensum</label>
          <input type="text" placeholder="z.B. 80%" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px] whitespace-nowrap">Datum Von</label>
          <input type="date" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#003049] text-[27.28px] whitespace-nowrap">Datum Bis</label>
          <input type="date" className="border border-gray-300 rounded-[236.29px] w-[320px] h-[63px] px-4 py-2 text-black placeholder-gray-500" />
        </div>
      </div>
    </div>

    {/* Documents Section */}
    <div className="flex flex-col mb-12">
      <h3 className="text-[#003049] text-[27.28px] font-semibold mb-10 mr-10 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">DOKUMENTE</h3> {/* Increased mb-8 for spacing */}
      <div className="grid grid-cols-2 gap-4 w-2/3 mx-auto">
        <div className="flex flex-col">
          <label className="text-[#003049] text-[27px] mb-2">Bewerbungsschreiben</label>
          <button className="bg-[#003049] text-white text-[23px] rounded-[236.29px] w-full h-[72.71px] px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col">
          <label className="text-[#003049] text-[27px] mb-2">Arbeitszeugnisse / Diplome</label>
          <button className="bg-[#003049] text-white text-[23px] rounded-[236.29px] w-full h-[72.71px] px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col">
          <label className="text-[#003049] text-[27px] mb-2">Bild Hochladen</label>
          <button className="bg-[#003049] text-white text-[23px] rounded-[236.29px] w-full h-[72.71px] px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col">
          <label className="text-[#003049] text-[27px] mb-2">CV</label>
          <button className="bg-[#003049] text-white text-[23px] rounded-[236.29px] w-full h-[72.71px] px-6 py-2">DATEI HOCHLADEN</button>
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col items-start mb-6 w-2/3 mx-auto mt-6">
        <label className="text-[#003049] text-[25px] mb-2">Mitteilung</label>
        <textarea placeholder="Weitere Informationen hinzufügen" className="border border-gray-300 rounded-[23.01px] w-full h-[215.24px] px-4 py-4 text-black placeholder-gray-500 resize-none"></textarea>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex items-center mb-16 w-2/3 mx-auto">
        <input type="checkbox" className="mr-2" />
        <span className="text-[#003049] text-[20px]">ICH ERKLÄRE MICH MIT DEN AGB EINVERSTANDEN.</span>
      </div>

      {/* Submit Button */}
      <div className="w-2/3 mx-auto">
        <button className="bg-[#003049] text-light rounded-full px-10 py-3 w-[388.21px] h-[72.71px] text-[27.05px] whitespace-nowrap">BEWERBUNG SENDEN</button>
      </div>
    </div>
  </div>
</div>



    </div>




  )
}

export default Bewerben;