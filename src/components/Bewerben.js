import React from 'react';
import Uberuns1 from '../Assets/Bewerben.png';

const Bewerben = () => {
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



      <div className="bg-[#003049] text-white py-10 px-4 font-Montserrat">
  {/* Form Container */}
  <div className="bg-white rounded-lg shadow-lg p-10 max-w-5xl mx-auto">
    
    {/* Personal Information Section */}
    <div className="flex items-start mb-8">
      <h3 className="text-[#003049] text-lg font-semibold w-1/3 pr-4">PERSÖNLICHE INFORMATIONEN</h3>
      <div className="grid grid-cols-2 gap-4 w-2/3">
        <input type="text" placeholder="Vorname" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="text" placeholder="Nachname" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="email" placeholder="Email Adresse" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="tel" placeholder="Mobil" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
      </div>
    </div>

    {/* Address Section */}
    <div className="flex items-start mb-8">
      <h3 className="text-[#003049] text-lg font-semibold w-1/3 pr-4">ADRESSE</h3>
      <div className="grid grid-cols-3 gap-4 w-2/3">
        <input type="text" placeholder="Strasse / Hausnummer" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="text" placeholder="Ort" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="text" placeholder="PLZ" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
      </div>
    </div>

    {/* Job Details Section */}
    <div className="flex items-start mb-8">
      <h3 className="text-[#003049] text-lg font-semibold w-1/3 pr-4">JOB DETAILS</h3>
      <div className="grid grid-cols-3 gap-4 w-2/3">
        <input type="text" placeholder="Gewünschtes Pensum (z.B. 60%)" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="date" placeholder="Datum Von" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
        <input type="date" placeholder="Datum Bis" className="border border-gray-300 rounded-full px-4 py-2 w-full text-black placeholder-gray-500" />
      </div>
    </div>

    {/* Documents Section */}
    <div className="flex items-start mb-8">
      <h3 className="text-[#003049] text-lg font-semibold w-1/3 pr-4">DOKUMENTE</h3>
      <div className="grid grid-cols-2 gap-4 w-2/3">
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#003049]">Bewerbungsschreiben</label>
          <button className="bg-[#003049] text-white rounded-full px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#003049]">Arbeitszeugnisse / Diplome</label>
          <button className="bg-[#003049] text-white rounded-full px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#003049]">Bild Hochladen</label>
          <button className="bg-[#003049] text-white rounded-full px-6 py-2">DATEI HOCHLADEN</button>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#003049]">CV</label>
          <button className="bg-[#003049] text-white rounded-full px-6 py-2">DATEI HOCHLADEN</button>
        </div>
      </div>
    </div>

    {/* Message Field */}
    <textarea
      placeholder="Weitere Informationen hinzufügen"
      className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-6 h-24 text-black placeholder-gray-500"
    ></textarea>

    {/* Agreement Checkbox */}
    <div className="flex items-center mb-6">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#003049]">ICH ERKLÄRE MICH MIT DEN AGB EINVERSTANDEN.</span>
    </div>

    {/* Submit Button */}
    <button className="bg-[#003049] text-white rounded-full px-10 py-3 w-full">BEWERBUNG SENDEN</button>
  </div>
</div>


    </div>




  )
}

export default Bewerben;
