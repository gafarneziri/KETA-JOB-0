import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '../Assets/SearchIcon.png';
import Dropdownicon from '../Assets/dropdownicon.png';

const OffeneStellen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Persist jobs in localStorage
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [
      { id: 1, title: "IT SOFTWARE DEVELOPER", location: "Zurich", type: "Temporär" },
      { id: 2, title: "Frontend Developer", location: "Berlin", type: "Festanstellung" },
      { id: 3, title: "Graphic Designer", location: "London", type: "Festanstellung" },
      { id: 4, title: "Project Manager", location: "Munich", type: "Remote" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // ✅ Search and Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // ✅ Function to filter jobs when clicking "Suchen"
  const handleSearch = () => {
    setFilteredJobs(
      jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (jobType ? job.type === jobType : true) &&
        (locationFilter ? job.location.includes(locationFilter) : true)
      )
    );
  };

  return (
    <div className="page2 bg-[#003049] min-h-screen flex flex-col items-center pb-[60px]">
      {/* Navigation Section */}
      <div>
        <div className="sections flex space-x-4 md:space-x-16 text-white uppercase text-[10px] md:text-[40px] font-Montserrat pt-10 md:pt-20">
          <Link to="/unternehmen" className={`cursor-pointer font-normal ${location.pathname === '/unternehmen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}>
            FÜR UNTERNEHMEN
          </Link>
          <Link to="/bewerber" className={`cursor-pointer font-normal ${location.pathname === '/bewerber' ? 'border-b-2 md:border-b-4 border-white' : ''}`}>
            FÜR BEWERBER
          </Link>
          <Link to="/stellen" className={`cursor-pointer font-normal ${location.pathname === '/stellen' ? 'border-b-2 md:border-b-4 border-white' : ''}`}>
            OFFENE STELLEN
          </Link>
        </div>
        <div className="h-px bg-gray-500 mt-0 w-full md:w-[1250px]"></div>
      </div>

      {/* Search Section */}
      <div className="md:flex md:flex-col items-center min-h-screen text-white bg-[#003049]">
        <div className="w-full md:max-w-6xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center md:mt-20 mt-8  md:mb-16 mb-8">

          {/* Search Bar */}
          <div className="relative md:w-[671px] md:h-[50px] w-[351px] h-[34px]">
            <input
              type="text"
              placeholder="Jobtitel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-4 pr-12 text-white bg-transparent border border-white rounded-full w-full h-full focus:outline-none placeholder-gray-400"
            />
            <img src={SearchIcon} alt="Search Icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Dropdown: Job Type */}
          <div className="relative md:w-[300px] md:h-[50px] w-[351px] h-[34px]">
            <select
              className="p-[5px] pl-6 text-center text-white bg-[#003049] border border-white rounded-full w-full h-full focus:outline-none appearance-none pr-12 leading-none"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="" className="bg-white text-black">Alle Arten</option>
              <option value="Temporär" className="bg-white text-black">Temporär</option>
              <option value="Festanstellung" className="bg-white text-black">Festanstellung</option>
            </select>
            <img src={Dropdownicon} alt="Dropdown Icon" className="absolute md:right-6 right-[109px] top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]" />
          </div>

          {/* Dropdown: Location */}
          <div className="relative md:w-[300px] md:h-[50px] w-[351px] h-[34px]">
            <select
              className="p-[5px] pl-6 text-center text-white bg-[#003049] border border-white rounded-full w-full h-full focus:outline-none appearance-none pr-12 leading-none"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="" className="bg-white text-black">Alle Orte</option>
              <option value="Zurich" className="bg-white text-black">Zurich</option>
              <option value="Berlin" className="bg-white text-black">Berlin</option>
              <option value="London" className="bg-white text-black">London</option>
              <option value="Munich" className="bg-white text-black">Munich</option>
            </select>
            <img src={Dropdownicon} alt="Dropdown Icon" className="absolute md:right-6 right-[109px] top-1/2 transform -translate-y-1/2 pointer-events-none w-[18px]" />
          </div>

          {/* Search Button */}
          <button
            className="bg-white text-[#003049] rounded-full md:w-[300px] md:h-[50px] w-[351px] h-[34px]"
            onClick={handleSearch}
          >
            Suchen
          </button>
        </div>

        {/* Job Listings */}
        <div className="w-[390px]  md:w-[1190px]  gap-4 p-4">
          <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:space-y-8 md:block">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="border border-white p-5 md:rounded-full rounded-[10px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
                  <div className="text-center md:text-left md:ml-6">
                    <h2 className="text-sm md:text-xl font-semibold">{job.title}</h2>
                    <div className="flex md:flex-wrap justify-center md:justify-start md:space-x-4 space-x-1 mt-2 pt-2">
                      <span className="border border-white px-4 py-1 rounded-full md:text-sm text-[8px] font-medium">
                        {job.location}
                      </span>
                      <span className="border border-white px-4 py-1 rounded-full md:text-sm text-[8px] font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/bewerben')}
                    className="bg-white text-[#003049] px-3 mt-4 md:mt-0 md:py-2 rounded-full w-[80px] md:w-[140px] h-[20px] md:h-[45px] text-[10px] text-center md:text-base flex items-center justify-center">
                    BEWERBEN
                  </button>

                </div>
              ))
            ) : (
              <p className="text-gray-300">Keine Jobs gefunden</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffeneStellen;