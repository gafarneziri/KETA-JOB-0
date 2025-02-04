import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Anfrageformular() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firm: '',
    message: '',
    job: '',
    ort: '',
    plz: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully! We will reach out as soon as possible.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          firm: '',
          message: '',
          job: '',
          ort: '',
          plz: '',
        });
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an issue sending your email. Please try again later.');
    }
  };


  return (
    <div className="min-h-screen bg-[#003049] flex justify-center items-center py-12">
      <Link
        to="/unternehmen"
        className="absolute top-[115px] top-8  left-4 text-white text-[40px] hover:text-gray-300 transition block md:top-44 md:left-16 md:text-[50px]"
        style={{ transform: 'scaleY(1.7)', lineHeight: '1' }}
      >
        &lt;
      </Link>


      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[30px] shadow-lg p-12  w-[351px] md:w-full md:max-w-[1160px] mt-10 md:mt-24"
      >
        {/* Title */}
        <h2 className="text-[#003049] text-center text-3xl font-semibold mb-10 uppercase hidden md:block">
          Anfrageformular
        </h2>

        {/* Kontaktadaten Section */}
        <div className="mb-10 ">
          <h3 className="text-[#003049] font-bold -ml-6 mb-4 text-[16px]  md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
            Kontaktadaten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8 ml-2">
            <div className='-ml-8 md:ml-0'>
              <label className="block text-[#003049]  mb-2">
                Firmenname
              </label>
              <input
                type="text"
                name="firm"
                value={formData.firm}
                onChange={handleChange}
                placeholder="Firmennamen"
                className="  w-[303px] h-[30px] pl-4  md:w-[300px] md:h-12 md:p-4 border border-gray-300 rounded-full"
              />
            </div>
            <div className="  -ml-8 md:-ml-52">
              <label className="block text-[#003049]  mb-2">
                Ihr Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ihr Name"
                className="  w-[303px] h-[30px] pl-4  md:w-[300px] md:h-12 md:p-4 border border-gray-300 rounded-full"
              />
            </div>
            <div className='-ml-8 md:ml-0'>
              <label className="block text-[#003049]  mb-2">
                E-Mail Adresse
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className=" w-[303px] h-[30px] pl-4  md:w-[300px] md:h-12 md:p-4 border border-gray-300 rounded-full"
              />
            </div>
            <div className=" -ml-8  md:-ml-52">
              <label className="block text-[#003049]  mb-2">
                Mobil
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="E.g. +1 300..."
                className=" w-[303px] h-[30px] pl-4  md:w-[300px] md:h-12 md:p-4 border border-gray-300 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Adresse and Job Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  g md:gap-8 mb-10">
          {/* Adresse */}
          <div className="mb-10 gap-4 ">
            <h3 className="text-[#003049] font-bold -ml-6 mb-4 text-[16px]  md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
              Adresse
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className='-ml-6 md:ml-0'>
                <label className="block text-[#003049]  mb-2">
                  Ort
                </label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleChange}
                  placeholder="Ort"
                  className=" w-[303px] h-[30px] pl-4 md:w-[223px] md:p-4 md:h-12 border border-gray-300 rounded-full"
                />
              </div>
              <div className=" -ml-6  md:0">
                <label className="block text-[#003049]  mb-2">
                  PLZ
                </label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  placeholder="PLZ"
                  className="  w-[303px] h-[30px] pl-4 md:w-[223px] md:p-4 md:h-12 border border-gray-300 rounded-full"
                />
              </div>
            </div>
            <div className="mt-6 hidden sm:block">
              <label className="block text-[#003049]  mb-2">
                Mitteilung
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Weitere Informationen hinzufügen"
                className="w-full p-4 border border-gray-300 rounded-[20px] h-32"
              />
            </div>

            {/* Job Details Mobile */}
            <div className="block md:hidden ml-2 mt-8 ">
              <h3 className="text-[#003049] font-bold -ml-6 mb-4 text-[16px]  md:text-lg uppercase md:mb-6 md:ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
                Job Details
              </h3>
              <div className="w-[223px] -ml-8  md:0 mt-6">
                <label className="block text-[#003049]  mb-2">
                  Berufe
                </label>
                <select
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  className=" w-[303px] h-[30px] pl-4 md:w-[223px] md:p-4 md:h-12 border border-gray-300 rounded-full"
                >
                  <option value="">Job</option>
                  <option value="job1">Job 1</option>
                  <option value="job2">Job 2</option>
                  <option value="job3">Job 3</option>
                </select>
              </div>
            </div>

          </div>

          {/* Job Details */}
          <div className="ml-2 hidden sm:block">
            <h3 className="text-[#003049] font-bold text-lg uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
              Job Details
            </h3>
            <div className="w-[223px]">
              <label className="block text-[#003049]  mb-2">
                Berufe
              </label>
              <select
                name="job"
                value={formData.job}
                onChange={handleChange}
                className="w-full p-2 h-12 border border-gray-300 rounded-full"
              >
                <option value="">Job</option>
                <option value="job1">Job 1</option>
                <option value="job2">Job 2</option>
                <option value="job3">Job 3</option>
              </select>
            </div>
          </div>

          {/* Mitteilung Mobile */}
          <div className="block md:hidden -ml-6  md:0   mt-6 ">
            <label className="block text-[#003049]  mb-2">
              Mitteilung
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Weitere Informationen hinzufügen"
              className="w-[303px] h-[150px] p-4 border text-[8.63px]  border-gray-300 rounded-[20px] h-32"
            />
          </div>

        </div>

        {/* Terms and Send Button */}
        <div className="flex items-center space-x-4 mb-16 ml-2">
          <input
            type="radio"
            className="md:h-5 md:w-5 h-[8.12px] w-[8.12px] text-[#003049] border-gray-300 rounded"
            required
          />
          <label className="text-[#003049] md:text-sm text-[8.63px]">
            Ich erkläre mich mit den AGB einverstanden.
          </label>
        </div>
        <div className=" flex justify-center md:justify-start md:ml-2">
          <button
            type="submit"
            className="w-[155px] h-[32px] md:w-auto md:h-auto bg-[#003049] text-[8px] text-center flex justify-center items-center whitespace-nowrap md:text-base text-white uppercase px-10 py-4 rounded-full hover:bg-[#002136] transition"
          >
            Bewerbung Senden
          </button>
        </div>
      </form>
    </div>
  );
}

export default Anfrageformular;
