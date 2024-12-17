import React, { useState } from 'react';

const Page5 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email-page5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: '',
        });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className="bg-[#003049] flex flex-col min-h-screen">
      {/* Top Section */}
      <div className="relative overflow-hidden h-[350px] w-full">
        <img
          src={require('../Assets/beautiful-young-blonde-woman-talking-mobile-phone-against-grey-background 1.png')}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover pt-8 mb-24"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center w-full px-8">
            <div className="flex-grow border-t border-white"></div>
            <h2 className="text-white text-5xl font-light px-8 whitespace-nowrap">
              KONTAKTIEREN SIE UNS
            </h2>
            <div className="flex-grow border-t border-white"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full pb-16">
        <div className="relative max-w-5xl mx-auto py-24 px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 text-white">
          <div className="flex flex-col gap-8">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block mb-2 text-xl">Name, Vorname</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME, VORNAME"
                  className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-xl">Email Adresse</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="phone" className="block mb-2 text-xl">Mobil</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.G. +1300..."
                  className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="location" className="block mb-2 text-xl">Ort</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="ORT"
                  className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Mitteilung</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="WEITERE INFORMATIONEN HINZUFÜGEN"
                className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-white text-[#003049] px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-200 self-start"
            >
              BEWERBUNG SENDEN
            </button>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-white opacity-50"></div>

          {/* Contact Information Section */}
          <div className="flex flex-col gap-4 text-lg">
            <div>
              <p className="font-bold">Mobil :</p>
              <p>+41 41 252 18 18</p>
              <p>+41 41 252 18 19</p>
            </div>
            <div className="mt-4">
              <p className="font-bold">Email :</p>
              <p>info@ketajob.ch</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src={require('../Assets/facebook.png')} alt="Facebook Icon" className="w-8 h-8" />
                <p>@ketajob</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={require('../Assets/instagram1.png')} alt="Instagram Icon" className="w-8 h-8" />
                <p>@ketajob</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={require('../Assets/in.png')} alt="LinkedIn Icon" className="w-8 h-8" />
                <p>@ketajob</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
