import React from 'react'
import { Link } from 'react-router-dom';
const anfrageformular2 = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", // Optional: adds a smooth scrolling effect
        });
      };
      
      
      window.scrollTo(0, 0);
  return (
    <div className="min-h-screen bg-[#003049] flex justify-center items-center py-12">
             {/* Back Arrow */}
             <Link
  to="/bewerber" // Update this to redirect to FurBewerben.js
  className="absolute top-44 left-16 text-white text-[50px] hover:text-gray-300 transition"
  style={{ transform: 'scaleY(1.7)', height: '60px' }} // Adjust height here
>{scrollToTop}
  &lt;
</Link>



      <div className="bg-white rounded-[30px] shadow-lg p-12 w-full max-w-[1160px] mt-20">
   
        {/* Title */}
        <h2 className="text-[#003049] text-center text-3xl font-semibold mb-10 uppercase -mt-4 ">
          Anfrageformular
        </h2>

        {/* Persönliche Informationen Section */}
        <div className="mb-10">
          <h3 className="text-[#003049] font-bold text-lg uppercase mb-6 ml-2 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
            Persönliche Informationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
            <div>
              <label className="block text-[#003049] font-light mb-2">Vorname</label>
              <input type="text" placeholder="Vorname" className="w-[300px] h-12 p-4 border border-gray-300 rounded-full" />
            </div>
            <div className='-ml-52'>
              <label className="block text-[#003049] font-light mb-2">Nachname</label>
              <input type="text" placeholder="Nachname" className="w-[300px] h-12 p-4 border border-gray-300 rounded-full" />
            </div>
            <div>
              <label className="block text-[#003049] font-light mb-2">E-Mail Adresse</label>
              <input type="email" placeholder="Email" className="w-[300px] h-12 p-4 border border-gray-300 rounded-full" />
            </div>
            <div className='-ml-52'>
              <label className="block text-[#003049] font-light mb-2">Mobil</label>
              <input type="text" placeholder="E.g. +1 300..." className="w-[300px] h-12 p-4 border border-gray-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Adresse and Job Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Adresse */}
          <div className="ml-2">
            <h3 className="text-[#003049] font-bold text-lg uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">Adresse</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#003049] font-light mb-2">Ort</label>
                <input type="text" placeholder="Ort" className="w-[223px] h-12 p-4 border border-gray-300 rounded-full" />
              </div>
              <div>
                <label className="block text-[#003049] font-light mb-2">PLZ</label>
                <input type="text" placeholder="PLZ" className="w-[223px] h-12 p-4 border border-gray-300 rounded-full" />
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="ml-2">
            <h3 className="text-[#003049] font-bold text-lg uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">Job Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#003049] font-light mb-2">Berufe</label>
                <select className="w-[223px] h-12 px-4 border border-gray-300 rounded-full text-[#003049] text-base leading-tight">
                  <option value="">Job</option>
                  <option value="job1">Job 1</option>
                  <option value="job2">Job 2</option>
                  <option value="job3">Job 3</option>
                </select>
              </div>
              <div>
                <label className="block text-[#003049] font-light mb-2">Anstellungsstart</label>
                <select className="w-[223px] h-12 px-4 border border-gray-300 rounded-full text-[#003049] text-base leading-tight">
                  <option value="">-</option>
                  <option value="start1">Sofort</option>
                  <option value="start2">1 Monat</option>
                  <option value="start3">3 Monate</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Dokumente Section */}
        <div className="ml-2 mb-10">
  <h3 className="text-[#003049] font-bold text-lg uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#003049]">
    Dokumente
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
    {['CV', 'Diplome', 'Arbeitszeugnisse', 'Bild Hochladen', 'Sonstiges'].map((doc, index) => (
      <div key={index}>
        <label className="block text-[#003049] font-light ">{doc}</label>
        <button className="bg-[#003049] text-white uppercase w-[200px] py-3 rounded-full font-light hover:bg-[#002136] transition duration-200 mt-[3px]">
          Datei hochladen
        </button>
      </div>
    ))}
  </div>
</div>


        {/* Mitteilung Section */}
        <div className="ml-2 mb-10">
          <label className="block text-[#003049] font-semibold mb-2">Mitteilung</label>
          <textarea placeholder="Weitere Informationen hinzufügen" className="w-[480px] h-32 p-4 border border-gray-300 rounded-[20px]"></textarea>
        </div>

        {/* Terms and Send Button */}
        <div className="flex items-center space-x-4 mb-8 ml-2">
          <input type="checkbox" className="h-5 w-5 text-[#003049] border-gray-300 rounded" />
          <label className="text-[#003049] text-sm">Ich erkläre mich mit den AGB einverstanden.</label>
        </div>
        <div className="flex justify-start ml-2">
          <button className="bg-[#003049] text-white uppercase px-10 py-4 rounded-full font-semibold hover:bg-[#002136] transition">
            Bewerbung Senden
          </button>
        </div>
      </div>
    </div>
  )
}

export default anfrageformular2
