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
            <h2 className="text-white text-[70px] font-light px-8 whitespace-nowrap">
              KONTAKTIEREN SIE UNS
            </h2>
            <div className="flex-grow border-t border-white"></div>
          </div>
        </div>
      </div>
      <div>
        <h1>.<br /> .<br />  . <br /> .<br /> .</h1>


      </div>
      {/* Spacer */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-6xl border-t border-gray-200"></div>
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

      {/* Solid Background Section */}
      <div className="bg-[#003049] pt-16 pb-16">
        {/* Find Us on Google Maps Section */}
        <div className="col-span-full flex items-center justify-center -mt-[80px] relative  ">
          <div className="flex-grow border-t border-white ml-24"></div>
          <h2 className="px-8 text-4xl  text-center text-white">FINDEN SIE UNS AUF GOOGLE MAPS</h2>
          <div className="flex-grow border-t border-white mr-24"></div>
        </div>


        {/* Address Section */}





        {/* First Location Section */}

        <div className="col-span-full mt-8 flex justify-center bg-[#003049] py-8 pl-12 pr-12 rounded-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.862670489217!2d8.429576676108958!3d47.14825207257426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a52c9d10e71%3A0xe18fd43e7e1de764!2sBirkenstrasse%2047%2C%206343%20Rotkreuz%2C%20Switzerland!5e0!3m2!1sen!2s!4v1699023561701!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-span-full flex justify-center mt-8 text-3xl text-white">
          <p className="flex items-center gap-2 font-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 21 12 21C12 21 19 13.25 19 9C19 5.13401 15.866 2 12 2Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
              />
            </svg>
            Birkenstrasse 47, 6343 Rotkreuz, Schweiz
          </p>
        </div>
      

        {/* Second Location Section */}
        <div className="col-span-full mt-8 flex justify-center bg-[#003049] py-8 pl-12 pr-12 rounded-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.935764728746!2d8.552244476103232!3d47.36559457916806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bdbb196fa31%3A0xe252f58b68922107!2sOthmarstrasse%208%2C%208008%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2s!4v1699023648912!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>



        <div className="col-span-full flex justify-center mt-8 text-3xl text-white">
          <p className="flex items-center gap-2 font-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 21 12 21C12 21 19 13.25 19 9C19 5.13401 15.866 2 12 2Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
              />
            </svg>
            Othmarstrasse 8, 8008 Zürich, Schweiz
          </p>
        </div>
       


      </div>
    </div>
  );
};

export default Page5;
