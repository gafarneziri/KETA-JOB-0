import React, { useState } from 'react';
import LocationIcon from '../Assets/locationicon.svg';
import NewImageKontakt from '../Assets/bwerbennewimage.png';

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
      <div className="relative w-full mt-10">
        <img
          src={NewImageKontakt}
          alt="kontakt"
          className="w-full md:w-full h-[117.31px] md:h-[252px] sm:h-auto object-cover"
        />

        {/* Centered Title on Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <hr className="border-t-2 border-white w-[76px] md:w-1/6" />
            <p className="font-Montserrat text-center text-[22px] sm:text-[70px] mx-2 sm:mx-4 text-white whitespace-nowrap">
              <span className="block sm:inline">KONTAKTIEREN</span>
              <span className="block sm:inline sm:ml-2">SIE UNS</span>
            </p>

            <hr className="border-t-2 border-white w-[76px] md:w-1/6" />
          </div>
        </div>
      </div>
      <div className='hidden sm:block'>
        <h1>.<br /> .<br />  . <br /> .<br /> .</h1>


      </div>
      {/* Spacer */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-6xl border-t border-gray-200"></div>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full pb-16">
        {/* Background Image */}
        <img
          src={require('../Assets/kate-trysh-70vza4NysS8-unsplash 2.png')}
          alt="Background"
          className="absolute inset-0 w-[500px] h-[1100px] md:w-full md:h-full object-cover  mb-24"
        />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto py-24 px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 text-white z-10">
          <div className="flex flex-col gap-8">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:-ml-[150px]   gap-[40px] md:gap-8  ">
              <div>
                <label htmlFor="name" className="block mb-2 text-xl whitespace-nowrap">Name, Vorname</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME, VORNAME"
                  className="w-full bg-transparent w-[320px]  md:w-[350px] h-[33px] md:h-[60px] border border-white p-3 rounded-[272.13px]  placeholder-white placeholder-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-xl whitespace-nowrap">Email Adresse</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  className="w-full bg-transparent w-[351px]  md:w-[350px] h-[33px] md:h-[60px] border border-white p-3 rounded-[272.13px]  placeholder-white placeholder-opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  md:-ml-[150px] gap-8">
              <div>
                <label htmlFor="phone" className="block mb-2 text-xl">Mobil</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.G. +1300..."
                  className="w-full bg-transparent w-[351px]  md:w-[350px] h-[33px] md:h-[60px] border border-white p-3 rounded-[272.13px]  placeholder-white placeholder-opacity-50"
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
                  className="w-full bg-transparent w[351px]  md:w-[350px] h-[33px] md:h-[60px] border border-white p-3 rounded-[272.13px]  placeholder-white placeholder-opacity-50"
                />
              </div>
            </div>

            <div className='-ml-2  md:-ml-[150px]'>
              <label htmlFor="message" className="block mb-2">Mitteilung</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="WEITERE INFORMATIONEN HINZUFÜGEN"
                className=" w-[350px] md:w-[803px] h-[135px] md:h-[206px] text-[10px] md:text-base bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-white text-[#003049] px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-200 self-center md:self-start"
            >
              BEWERBUNG SENDEN
            </button>
          </div>

          <hr className="w-[350px] -ml-2 border-t border-white sm:hidden mx-auto" />

          {/* Vertical Line */}
          <div className=" -mr-24 w-px bg-white opacity-50"></div>

          {/* Contact Information Section */}
          <div className="flex flex-row md:flex-col   gap-[50px] md:gap-4 text-lg">
          <div className='ml-2 md:ml-0 pt-18 md:mt-6 flex flex-col'>
  <div>
    <p className="">Mobil :</p>
    <a href="tel:+41412521818">
      <p>+41 41 252 18 18</p>
    </a>
    <a href="tel:+41412521819">
      <p>+41 41 252 18 19</p>
    </a>
  </div>
  <div className="mt-4">
    <p className="">Email :</p>
    <a href="mailto:info@ketajob.ch">
      <p>info@ketajob.ch</p>
    </a>
  </div>
</div>



            <div className=" mt-6 -ml-6 md:-ml-0 md:mt-8 flex flex-col  gap-4">
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/p/KETA-Job-61558074714938/?locale=gn_PY">
                  <img src={require('../Assets/facebook.png')} alt="Facebook Icon" className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/p/KETA-Job-61558074714938/?locale=gn_PY">
                <p className='whitespace-nowrap'>Keta Job</p>
                </a>
              </div>
              <div className="flex items-center gap-4 ">
                <a href="https://www.instagram.com/ketajob.ch/">
                  <img src={require('../Assets/instagram1.png')} alt="Instagram Icon" className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/p/KETA-Job-61558074714938/?locale=gn_PY">
                <p className='whitespace-nowrap -mr-8 md:-mr-0'>@ketajob.ch</p>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/101913576/admin/dashboard/">
                  <img src={require('../Assets/in.png')} alt="LinkedIn Icon" className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/p/KETA-Job-61558074714938/?locale=gn_PY">
                <p className='whitespace-nowrap'>Keta Job</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Solid Background Section */}
      <div className="bg-[#003049] -mt-[36px]  pb-16">
        {/* Find Us on Google Maps Section */}
        <div className="col-span-full flex items-center justify-center -mt-[80px] mt-4 relative  ">
          <div className="flex-grow border-t border-white w-[100px] ml-6 md:ml-24"></div>
          <h2 className="md:px-8  text-[25px] md:text-4xl  text-center text-white">FINDEN SIE UNS  AUF GOOGLE MAPS</h2>
          <div className="flex-grow border-t border-white w-[100px] mr-6 md:mr-24"></div>
        </div>


        {/* Address Section */}


        {/* First Location mobile*/}
        <div className='flex flex-col sm:hidden pt-8 mb-2 gap-2'>
          <img src={LocationIcon} alt='locationicon' className='w-[16.33] h-[21px]' />
          <p className='text-white text-center uppercase text-[12px]'> Birkenstrasse 47, 6343 Rotkreuz, Schweiz</p>
        </div>




        {/* First Location Section */}
        <div className="col-span-full mt-8 flex justify-center bg-[#003049]  py-6 px-6 sm:pl-12 sm:pr-12 rounded-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.862670489217!2d8.429576676108958!3d47.14825207257426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a52c9d10e71%3A0xe18fd43e7e1de764!2sBirkenstrasse%2047%2C%206343%20Rotkreuz%2C%20Switzerland!5e0!3m2!1sen!2s!4v1699023561701!5m2!1sen!2s"
            className="w-[400px] h-[200px] sm:w-full sm:h-[500px]"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


        <div className="col-span-full flex justify-center mt-8 text-3xl text-white hidden sm:flex">
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


        {/* First Location mobile*/}
        <div className='flex flex-col sm:hidden pt-8 mb-2 gap-2'>
          <img src={LocationIcon} alt='locationicon' className='w-[16.33] h-[21px]' />
          <p className='text-white text-center uppercase text-[12px]'> Othmarstrasse 8, 8008 Zürich, Schweiz</p>
        </div>



        {/* Second Location Section */}
        <div className="col-span-full mt-8 flex justify-center bg-[#003049] py-8 px-6 sm:pl-12 sm:pr-12 rounded-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.935764728746!2d8.552244476103232!3d47.36559457916806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bdbb196fa31%3A0xe252f58b68922107!2sOthmarstrasse%208%2C%208008%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2s!4v1699023648912!5m2!1sen!2s"
            className="w-[400px] h-[200px] sm:w-full sm:h-[500px]"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>




        <div className="col-span-full flex justify-center mt-8 text-3xl text-white hidden sm:flex">
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
