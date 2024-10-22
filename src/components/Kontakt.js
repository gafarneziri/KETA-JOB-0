import React from 'react'

const Page5 = () => {
  return (
    <div className="bg-[#003049]">
     <div className="relative overflow-hidden h-[350px] w-full">
  {/* Background Image */}
  <img
    src={require('../Assets/beautiful-young-blonde-woman-talking-mobile-phone-against-grey-background 1.png')} // Replace with the actual path to your background image
    alt="Background Image"
    className="absolute inset-0 w-full h-full object-cover pt-8
     mb-24"
  />

  {/* Text and Lines Overlay */}
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
<div>
    <h1>.<br/> .<br/>  . <br/> .<br/> .</h1>
   
  
    </div>
    <div className="  flex items-center justify-center ">
  <div className="w-full max-w-6xl border-t border-gray-200"></div>
</div>
<div className="relative w-full h-screen bg-[#003049]">
  {/* Background Image */}
  <img
    src={require('../Assets/kate-trysh-70vza4NysS8-unsplash 2.png')} // Replace with actual path to your background image
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Form Container */}
  <div className="relative max-w-5xl mx-auto py-24 px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 text-white">
    {/* Form Section */}
    <div className="flex flex-col gap-8 -ml-16">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2 text-xl">Name, Vorname</label>
          <input
            type="text"
            id="name"
            placeholder="NAME, VORNAME"
            className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
          />
        </div>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 text-xl">Email Adresse</label>
          <input
            type="email"
            id="email"
            placeholder="EMAIL"
            className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
          />
        </div>
      </div>

      {/* Mobile and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile Field */}
        <div>
          <label htmlFor="mobile" className="block mb-2 text-xl">Mobil</label>
          <input
            type="text"
            id="mobile"
            placeholder="E.G. +1300..."
            className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
          />
        </div>
        {/* Location Field */}
        <div>
          <label htmlFor="location" className="block mb-2 text-xl">Ort</label>
          <input
            type="text"
            id="location"
            placeholder="ORT"
            className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block mb-2">Mitteilung</label>
        <textarea
          id="message"
          rows="4"
          placeholder="WEITERE INFORMATIONEN HINZUFÜGEN"
          className="w-full bg-transparent border border-white p-3 rounded-2xl placeholder-white placeholder-opacity-50"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="bg-white text-[#003049] px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-200 self-start">
        BEWERBUNG SENDEN
      </button>
    </div>

    {/* Vertical Line */}
    <div className="hidden md:block w-px bg-white opacity-50 ml-12 -me-24"></div>

    {/* Contact Information Section */}
    <div className="flex flex-col gap-4 text-lg mt-8 pl-36 ">
      <div>
        <p className="font-bold">Mobil :</p>
        <p>+41 41 252 18 18</p>
        <p>+41 41 252 18 19</p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Email :</p>
        <p>info@ketajob.ch</p>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={require('../Assets/2.png')} // Replace with actual Facebook logo path
            alt="Facebook Icon"
            className="w-8 h-8 filter invert contrast-4 brightness-900"
          />
          <p>@ketajob</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={require('../Assets/3.png')} // Replace with actual Instagram logo path
            alt="Instagram Icon"
            className="w-8 h-8 filter invert contrast-4 brightness-900"
          />
          <p>@ketajob</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={require('../Assets/1.png')} // Replace with actual LinkedIn logo path
            alt="LinkedIn Icon"
            className="w-8 h-8 filter invert contrast-4 brightness-900"
          />
          <p>@ketajob</p>
        </div>
      </div>
    </div>
  </div>
</div>


  
    </div>
  )
}

export default Page5
