import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formular2 = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    phone: '',
    ort: '',
    plz: '',
    beruf: '',
    start: '',
    mitteilung: '',
  });

  const [selectedFiles, setSelectedFiles] = useState({});

  // Handle text input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e, label) => {
    setSelectedFiles({
      ...selectedFiles,
      [label]: e.target.files[0],
    });
  };

  // Remove selected file
  const handleFileRemove = (label) => {
    const updatedFiles = { ...selectedFiles };
    delete updatedFiles[label];
    setSelectedFiles(updatedFiles);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();

    // Add form fields
    Object.keys(formData).forEach((key) => {
      formDataObject.append(key, formData[key]);
    });

    // Add uploaded files
    Object.keys(selectedFiles).forEach((key) => {
      formDataObject.append(key, selectedFiles[key]);
    });
    

    try {
     const response = await fetch('https://keta-job-0.onrender.com/send-email-formular2', {

        method: 'POST',
        body: formDataObject, // Ensure multipart/form-data is sent
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          vorname: '',
          nachname: '',
          email: '',
          phone: '',
          ort: '',
          plz: '',
          beruf: '',
          start: '',
          mitteilung: '',
        });
        setSelectedFiles({});
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };


  const [checked, setChecked] = useState(false); // Checkbox state
  
    const handleClick = () => {
      setChecked(!checked); // Toggle checkbox state
    };

  return (
    <div className="min-h-screen bg-[#003049] flex justify-center items-center py-12">
      {/* Back Arrow */}
      <Link
              to="/bewerber"
              className="absolute top-[115px] top-8  left-4 text-white text-[40px] hover:text-gray-300 transition block md:top-44 md:left-16 md:text-[50px]"
              style={{ transform: 'scaleY(1.7)', lineHeight: '1' }}
            >
              &lt;
            </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[30px] shadow-lg p-12 w-[351px] md:w-[1200px] md:h-[993px] mt-10 md:mt-[24px]"

      >
        {/* Title */}
        <h2 className="text-[#003049] text-center text-3xl font-semibold mb-10 uppercase -mt-4 hidden md:block  ">
          Anfrageformular
        </h2>

        {/* Persönliche Informationen Section */}
        <div className="mb-10">
          <h3 className="text-[#003049] font-bold -ml-6 md:mb-4 mb-6 text-[16px]   md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
            Persönliche Informationen
          </h3>
          <div className="grid grid-cols-1 md:flex md:space-x-8 md:ml-2 -ml-6 md:gap-0 gap-2">
  <div className='md:flex-1'>
    <label className="block text-[#003049] font-light mb-2">Vorname</label>
    <input
      type="text"
      name="vorname"
      value={formData.vorname}
      onChange={handleInputChange}
      className="w-[303px] h-[30px] pl-4 md:w-[240px] md:h-[42px] md:p-4 border border-gray-300 rounded-full"
      placeholder="Vorname"
    />
  </div>
  <div className='md:flex-1'>
    <label className="block text-[#003049] font-light mb-2">Nachname</label>
    <input
      type="text"
      name="nachname"
      value={formData.nachname}
      onChange={handleInputChange}
      className="w-[303px] h-[30px] pl-4 md:w-[240px] md:h-[42px] md:p-4 border border-gray-300 rounded-full"
      placeholder="Nachname"
    />
  </div>
  <div className='md:flex-1'>
    <label className="block text-[#003049] font-light mb-2">E-Mail Adresse</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="w-[303px] h-[30px] pl-4 md:w-[240px] md:h-[42px] md:p-4 border border-gray-300 rounded-full"
      placeholder="Email"
    />
  </div>
  <div className='md:flex-1'>
    <label className="block text-[#003049] font-light mb-2">Mobil</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      className="w-[303px] h-[30px] pl-4 md:w-[240px] md:h-[42px] md:p-4 border border-gray-300 rounded-full"
      placeholder="E.g. +1 300..."
    />
  </div>
</div>

        </div>

        {/* Adresse and Job Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-10">
          {/* Adresse */}
          <div className="ml-2 mt-6 md:mt-0">
            <h3 className="text-[#003049] font-bold -ml-6 md:mb-4 mb-6 text-[16px]   md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
              Adresse
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              <div className='-ml-8 md:ml-0'>
                <label className="block text-[#003049] font-light mb-2">Ort</label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleInputChange}
                  className=" w-[303px] h-[30px] pl-4 md:w-[223px] md:h-12 md:p-4 border border-gray-300 rounded-full"
                  placeholder="Ort"
                />
              </div>
              <div className='-ml-8 md:ml-0' >
                <label className="block text-[#003049] font-light mb-2">PLZ</label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleInputChange}
                  className="w-[303px] h-[30px] pl-4  md:w-[223px] md:h-12 md:p-4 border border-gray-300 rounded-full"
                  placeholder="PLZ"
                />
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="ml-2 mt-6 md:mt-0">
            <h3 className="text-[#003049] font-bold -ml-6 md:mb-4 mb-6 text-[16px]   md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
              Job Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              <div className='-ml-8 md:ml-0' >
                <label className="block text-[#003049] font-light mb-2">Berufe</label>
                <select
                  name="beruf"
                  value={formData.beruf}
                  onChange={handleInputChange}
                  className="w-[303px] h-[30px] pl-4 md:w-[223px] md:h-12 md:px-4 border border-gray-300 rounded-full text-[#003049] text-base leading-tight"
                >
                  <option value="">--</option>
                <option value="Medical">Medical</option>
                <option value="Kader Höhere Angestellte">Kader Höhere Angestellte</option>
                <option value="Technische Berufe">Technische Berufe</option>
                <option value="Informatik, Werbung, Grafik, Marketing">Informatik, Werbung, Grafik, Marketing</option>
                <option value="Verkaufsberufe">Verkaufsberufe</option>
                <option value="Kaufmannische Berufe">Kaufmannische Berufe</option>
                <option value="Bank- und Versicherungswesen">Bank- und Versicherungswesen</option>
                <option value="Dienstleistungs Berufe">Dienstleistungs Berufe</option>
                </select>
              </div>
              <div className='-ml-8 md:ml-0' >
                <label className="block text-[#003049] font-light mb-2">Anstellungsstart</label>
                <select
                  name="start"
                  value={formData.start}
                  onChange={handleInputChange}
                  className="w-[303px] h-[30px] pl-4 md:w-[223px] md:h-12 md:px-4 border border-gray-300 rounded-full text-[#003049] text-base leading-tight"
                >
                  <option value="">--</option>
                  <option value="start1">Sofort</option>
                  <option value="start2">1 Monat</option>
                  <option value="start3">3 Monate</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        {/* Dokumente Section */}
        <div className="ml-2 md:mb-10 mt-8 md:mt-0">
          <h3 className="text-[#003049] font-bold -ml-6 md:mb-4 mb-6 text-[16px]   md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
            Dokumente
          </h3>
          <div className="grid grid-cols-1 gap-y-6 md:flex md:flex-wrap md:gap-4 mx-auto md:justify-between">
  {['CV', 'Diplome', 'Arbeitszeugnisse', 'Bild Hochladen', 'Sonstiges'].map((doc, index) => (
    <div className="flex flex-col items-center md:items-start md:w-[18%] lg:w-[18%]" key={index}>
      {/* Center the label */}
      <label className="block text-[#003049] font-light mb-2 text-center md:text-left">
        {doc}
      </label>
      <input
        type="file"
        id={`file-upload-${index}`}
        onChange={(e) => handleFileChange(e, doc)}
        className="hidden"
      />
      <label htmlFor={`file-upload-${index}`} className="flex justify-center">
        {/* Center the button */}
        <div className="w-[170px] h-[28px] md:h-auto bg-[#003049] text-white text-xs md:text-sm uppercase md:w-[170px] md:py-2 rounded-[62.15px] md:rounded-full font-light hover:bg-[#002136] transition duration-200 text-center cursor-pointer flex justify-center items-center">
  Datei hochladen
</div>

      </label>
      {selectedFiles[doc] && (
        <div className="mt-2 flex items-center justify-center md:justify-start w-full">
          <p className="text-sm text-gray-600 truncate">{selectedFiles[doc].name}</p>
          <button
            type="button"
            onClick={() => handleFileRemove(doc)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>
      )}
    </div>
  ))}
</div>




        </div>



        {/* Mitteilung Section */}
        <div className="ml-2 md:mb-10 -ml-[20px]  md:-ml-0  mt-6 md:mt-0">
          <label className="block text-[#003049] -ml-[30px] md:-ml-0  mb-4 md:mb-4 md:mb-2">Mitteilung</label>
          <textarea
            name="mitteilung"
            value={formData.mitteilung}
            onChange={handleInputChange}
            placeholder="Weitere Informationen hinzufügen"
            className="w-[303px] h-[150px] md:w-[630px] md:h-32 -ml-[35px] md:-ml-0 p-4 border border-gray-300 rounded-[20px]"
          ></textarea>
        </div>
        <div className="flex items-center space-x-4 mb-16 ml-2">
          <input
            type="radio"
            className="md:h-5 md:w-5 h-[8.12px] w-[8.12px] text-[#003049] border-gray-300 rounded"
            checked={checked}
            onClick={handleClick} // This allows toggling
            readOnly // Prevents default behavior, so we control it manually
          />
          <label
            className="text-[#003049] md:text-sm text-[8.63px] cursor-pointer"
            onClick={handleClick}
          >
            Ich erkläre mich mit den AGB einverstanden.
          </label>
        </div>

        {/* Submit Button */}
        <div className=" flex justify-center md:justify-start md:ml-2">
          <button
            type="submit"
            className="w-[155px] h-[32px] md:w-auto md:h-auto bg-[#003049] text-[8px] text-center flex justify-center items-center whitespace-nowrap md:text-base text-white uppercase px-10 py-4  rounded-full hover:bg-[#002136] transition"
          >
            Bewerbung Senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular2;
