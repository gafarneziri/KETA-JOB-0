import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddJobss() {
  const navigate = useNavigate();
  const [newJob, setNewJob] = useState({ title: "", location: "", type: "" });
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin/dashboard"); // ✅ Send back if not logged in
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = () => {
    if (newJob.title && newJob.location && newJob.type) {
      const updatedJobs = [...jobs, { id: Date.now(), ...newJob }];
      setJobs(updatedJobs);
      setNewJob({ title: "", location: "", type: "" });
    }
  };

  // ✅ Delete job function
  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003049] text-white p-6">
      <h2 className="text-lg mb-2">Neue Stelle hinzufügen</h2>
      <input
        type="text"
        placeholder="Jobtitel"
        value={newJob.title}
        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        className="p-2 bg-gray-800 border border-white rounded mr-2"
      />
      <input
        type="text"
        placeholder="Ort"
        value={newJob.location}
        onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
        className="p-2 bg-gray-800 border border-white rounded mr-2"
      />
      <input
        type="text"
        placeholder="Anstellungstyp"
        value={newJob.type}
        onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
        className="p-2 bg-gray-800 border border-white rounded"
      />
      <button onClick={addJob} className="ml-2 bg-white text-[#003049] p-2 rounded">
        Hinzufügen
      </button>

      {/* List of Jobs */}
      <div className="mt-6 w-full">
        <h2 className="text-lg">Gespeicherte Stellen</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-300 mt-2">Keine Stellen vorhanden.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {jobs.map((job) => (
              <li key={job.id} className="border border-white p-2 rounded flex justify-between items-center">
                <div>
                  <strong>{job.title}</strong> - {job.location} ({job.type})
                </div>
                <button 
                  onClick={() => deleteJob(job.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded">
                  Löschen
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddJobss;
