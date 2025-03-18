import React, { useState } from 'react';
import Uberuns1 from '../Assets/Bewerben.png';
import Kontakt from '../Assets/beautiful-young-blonde-woman-talking-mobile-phone-against-grey-background 1.png';
import NewImageKontakt from '../Assets/bwerbennewimage.png';

const Bewerben = () => {
  const [selectedFiles, setSelectedFiles] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle file selection
  const handleFileChange = (e, fieldName) => {
    setSelectedFiles({
      ...selectedFiles,
      [fieldName]: e.target.files[0], // Store the selected file in the state
    });
  };

  // Function to remove the selected file
  const removeFile = (fieldName) => {
    const updatedFiles = { ...selectedFiles };
    delete updatedFiles[fieldName]; // Remove the file from the state
    setSelectedFiles(updatedFiles);
  };



  // Function to toggle the radio button state
  const toggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (

    <div>
      <div className="Uberuns bg-[#003049] text-white font-Montserrat relative">
        {/* Top Section with Background Image and Centered Title */}
        <div className="relative w-full pt-10  ">
          <img
            src={NewImageKontakt}
            alt="kontakt"
            className="w-full h-[117.31px] md:h-[252px] sm:h-auto object-cover"
          />

          {/* Centered Title on Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center mt-6 md:mt-0 justify-center w-full">
              <hr className="border-t-2 border-white w-[110px] md:w-[480px]" />
              <p className="font-Montserrat text-[22px] sm:text-[70px] mx-2 sm:mx-4  text-white whitespace-nowrap">BEWERBEN</p>
              <hr className="border-t-2 border-white w-[110px] md:w-[480px]" />
            </div>
          </div>
        </div>

        {/* Lower Section with Subtitle and Text Content */}
        <div className="bg-[#003049] py-8 md:py-16 px-6">
          <div className="flex items-center justify-center mb-8">
            <hr className="border-t-2 border-white w-[120px] md:w-[380px]" />
            <span
              className="text-white  text-center uppercase text-[22px] sm:text-[40px] whitespace-nowrap sm:whitespace-normal font-Montserrat font-normal mx-6 md:mx-8"
            >
              BEWERBEN SIE
              <span className="block sm:inline"> SICH JETZT</span>
            </span>

            <hr className="border-t-2 border-white w-[120px] md:w-[380px]" />
          </div>

          {/* Text Content Below Subtitle */}
          <div className="text-left md:max-w-4xl text-[10px] md:text-[22px] lg:px-[45px] leading-relaxed md:pl-8 md:pt-8">
            <p className="whitespace-normal md:whitespace-nowrap">
              Wir freuen uns darauf, Ihnen zu helfen, den perfekten Job zu finden, der zu Ihren Fähigkeiten und Ambitionen passt.
            </p>
            <p className="mt-2 md:mt-6 whitespace-normal md:whitespace-nowrap">
              Bitte füllen Sie das untenstehende Formular mit Ihren Angaben aus und laden Sie die erforderlichen Dokumente hoch.<br />
              Unser Team wird Ihre Bewerbung prüfen und sich umgehend bei Ihnen melden.
            </p>
            <p className="mt-2 md:mt-6 whitespace-normal md:whitespace-nowrap">
              Wenn Sie Fragen haben oder Unterstützung benötigen, zögern Sie nicht, uns zu kontaktieren.
            </p>
          </div>

        </div>

        <div className=" flex md:block items-center justify-center min-h-screen bg-[#003049] text-white py-8 md:py-12 px-16 font-Montserrat">
          {/* Form Container */}
          <div className="bg-white rounded-[29px] shadow-lg p-20 w-[350px] md:w-[1400px]  h-[1700px] md:h-[933px] mx-auto">

            {/* Personal Information Section */}
            <div className="flex flex-col  mb-12">
              <h3 className="text-[#003049] text-[18px] -ml-14 md:-ml-0 md:text-[20px] font-semibold md:mb-8 whitespace-nowrap relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">PERSÖNLICHE INFORMATIONEN</h3> {/* Increased mb-8 for spacing */}
              <div className="grid grid-cols-1 md:grid-cols-4  gap-y-[2px] md:gap-y-6 gap-x-24 md:gap-x-[300px] w-2/3 mx-auto md:mx-0">
                <div className="flex flex-col mt-4 md:mt-[0px] ">
                  <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0  md:text-[18px]">Vorname</label>
                  <input
                    type="text"
                    placeholder="Vorname"
                    className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0  text-[8.63px] md:text-base w-[303px] md:w-[280px]  md:h-[42px] h-[28.49px]  px-4 py-2 text-black   placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-[0px] ">
                  <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0  md:text-[18px]">Nachname</label>
                  <input
                    type="text"
                    placeholder="Nachname"
                    className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0  text-[8.63px] md:text-base w-[280px] md:w-[280px] h-[28.49px] md:h-[42px] px-4 py-2 text-black   placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-[0px]">
                  <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 whitespace-nowrap  md:text-[18px]">E-Mail Adresse</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0  text-[8.63px] md:text-base w-[303px] md:w-[280px] h-[28.49px] md:h-[42px] px-4 py-2 text-black   placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-0">
                  <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0  md:text-[18px]">Mobil</label>
                  <input
                    type="text"
                    placeholder="E.G. +1 300...."
                    className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0  text-[8.63px] md:text-base w-[303px] md:w-[280px] h-[28.49px] md:h-[42px] px-4 py-2 text-black   placeholder-gray-500"
                  />
                </div>
              </div>

            </div>



            <div className="block md:flex">
              {/* Address Section */}
              <div className="flex flex-col md:flex-row mb-12 md:mb-0 pr-0 md:pr-8 ">
                <h3 className="text-[#003049] text-[18px] -ml-14 md:-ml-0 md:text-[20px] font-semibold md:mb-8 whitespace-nowrap relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]  ">ADRESSE</h3> {/* Increased mb-8 for spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[2px] md:gap-y-0 gap-x-18 md:gap-x-0 w-2/3 mx-auto  pt-0 md:pt-6">
                  <div className="flex flex-col mt-4 md:mt-4 -ml-0 md:-ml-[120px]">
                    <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 md:text-[18px] pt-0 md:pt-4">ORT</label>
                    <input
                      type="text"
                      placeholder="Ort"
                      className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0 text-[8.63px] md:text-base w-[303px] md:w-[228.55px] h-[28.49px] md:h-[42px] px-4 py-2 text-black placeholder-gray-500"
                    />
                  </div>
                  <div className="flex flex-col mt-4 md:mt-4 -ml-0 md:-ml-[10px]  ">
                    <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 pt-0 md:pt-4 md:text-[18px]">PLZ</label>
                    <input
                      type="text"
                      placeholder="PLZ"
                      className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0 text-[8.63px] md:text-base w-[303px] md:w-[228.55px] h-[28.49px] md:h-[42px] px-4 py-2 text-black placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Job Details Section */}
              <div className="flex flex-col md:flex-row mb-12 md:mb-0">
                <h3 className="text-[#003049] -ml-14   md:-mr-20 text-[18px] md:text-[20px] font-semibold md:mb-8 whitespace-nowrap relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049] text-left md:text-right md:ml-auto">
                  JOB DETAILS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[2px] mt-0 md:mt-4 md:gap-y-0 md:gap-x-0 w-2/3 mx-auto">
                  <div className="flex flex-col mt-4 md:mt-6 -ml-0 md:-ml-[120px] ">
                    <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 md:text-[18px] whitespace-nowrap pt-0 md:pt-4">
                      Gewünschtes Pensum
                    </label>
                    <input
                      type="text"
                      placeholder="z.B. 80%"
                      className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0 text-[8.63px] md:text-base w-[303px] md:w-[228.55px] h-[28.49px] md:h-[42px] px-4 py-2 text-black placeholder-gray-500"
                    />
                  </div>
                  <div className="flex flex-col mt-4 md:mt-6 -ml-0 md:-ml-[40px] ">
                    <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 md:text-[18px] whitespace-nowrap pt-0 md:pt-4">
                      Datum Von
                    </label>
                    <input
                      type="date"
                      className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0 text-[8.63px] md:text-base w-[303px] md:w-[228.55px] h-[28.49px] md:h-[42px] px-4 py-2 text-black placeholder-gray-500"
                    />
                  </div>
                  <div className="flex flex-col mt-4 md:mt-6 -ml-0 md:-ml-[-40px]">
                    <label className="text-[#003049] text-[18px] -ml-[80px] md:-ml-0 md:text-[18px] whitespace-nowrap pt-0 md:pt-4">
                      Datum Bis
                    </label>
                    <input
                      type="date"
                      className="border border-gray-300 rounded-[236.29px] -ml-[90px] md:-ml-0 text-[8.63px] md:text-base w-[303px] md:w-[228.55px] h-[28.49px] md:h-[42px] px-4 py-2 text-black placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>





            {/* Documents Section */}
            <div className="flex flex-col mb-12">
              <h3 className="text-[#003049] text-[18px] -ml-12 md:-ml-0 md:text-[23.28px] font-semibold md:mb-8 whitespace-nowrap relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049] pt-0 md:pt-8">DOKUMENTE</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 whitespace-nowrap   gap-0 md:gap-[220px]  md:gap-y-0 gap-y-6 pt-8 md:pt-0  w-2/3 mx-auto md:mx-[100px]">
                {[
                  { label: 'Bewerbungsschreiben', fieldName: 'bewerbungsschreiben' },
                  { label: 'Arbeitszeugnisse / Diplome', fieldName: 'arbeitszeugnisse' },
                  { label: 'Bild Hochladen', fieldName: 'bild' },
                  { label: 'CV', fieldName: 'cv' },
                ].map(({ label, fieldName }) => (
                  <div key={fieldName} className="flex flex-col items-center">
                    <label className="text-[#003049]  text-center text-[12.09px] md:text-[16px] mb-2">{label}</label>
                    <input
                      type="file"
                      id={fieldName}
                      onChange={(e) => handleFileChange(e, fieldName)}
                      className="hidden"
                    />
                    <label htmlFor={fieldName}>
                      <div className="bg-[#003049] text-white text-[8.63px] md:text-[16px] rounded-[236.29px] w-[193px] md:w-[226.21px] h-[28px] md:h-[42.71px] flex items-center justify-center md:px-6  text-center md:text-left cursor-pointer">
                        Datei Hochladen
                      </div>

                    </label>
                    {selectedFiles[fieldName] && (
                      <div className="mt-2 flex items-center">
                        <p className="text-sm text-gray-600">{selectedFiles[fieldName].name}</p>
                        <button
                          type="button"
                          onClick={() => removeFile(fieldName)}
                          className="ml-4 text-red-500 hover:text-red-700 text-[16px] font-semibold"
                        >
                          X
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Message Field */}
            <div className="flex flex-col items-start ml-6 md:ml-0 mb-2 md:mb-6   mx-auto  m md:mt-6">
              <label className="text-[#003049] text-[12.09px] -ml-20  md:-ml-0 md:text-[16px] mb-2">Mitteilung</label>
              <textarea placeholder="Weitere Informationen hinzufügen" className="border border-gray-300 -ml-20  md:-ml-0 text-[8.63px] md:text-base rounded-[23.01px] w-[303px] md:w-[659px] h-[133px] md:h-[132pxpx] px-4 py-4 text-black placeholder-gray-500 resize-none"></textarea>
            </div>

            {/* Agreement Checkbox */}
            <div
              className="flex items-center justify-center md:-ml-[15px] md:justify-start  mb-16 md:mb-10 w-2/3 mx-auto cursor-pointer"
              onClick={toggleCheck}
            >
              <input
                type="radio"
                className="mr-2 h-5 w-5 cursor-pointer"
                checked={isChecked}
                readOnly
              />
              <span className="text-[#003049] text-[10px] whitespace-nowrap md:text-[16px] cursor-pointer">
                ICH ERKLÄRE MICH MIT DEN AGB EINVERSTANDEN.
              </span>
            </div>


            {/* Submit Button */}
            <div className=" mx-auto flex md:justify-start justify-center">
              <button className="bg-[#003049] text-light rounded-full px-10 py-3 w-[155px] md:w-[205px] h-[32px] md:h-[46px] text-[10px] md:text-[14px] text-center whitespace-nowrap flex items-center justify-center">
                BEWERBUNG SENDEN
              </button>
            </div>

          </div>
        </div>
      </div>



    </div>




  )
}

export default Bewerben;