import React from "react";
import { useState } from "react";

export default function ExperienceInfo({ experience, setExperience }) {
  const [skills, setSkills] = useState(experience.skills || "");
  const [company, setCompany] = useState(experience.company || "");
  const [position, setPosition] = useState(experience.position || "");
  const [yearsInService, setYearsInService] = useState(experience.yearsInService || "");
  const [description, setDescription] = useState(experience.description || "");

  function handleCompany(e) {
    setCompany(e.target.value);
    setExperience((prev) => ({
      ...prev,
      company: e.target.value,
    }));
  }
  function handlePosition(e) {
    setPosition(e.target.value);
    setExperience((prev) => ({
      ...prev,
      position: e.target.value,
    }));
  }
  function handleYearsInService(e) {
    setYearsInService(e.target.value);
    setExperience((prev) => ({
      ...prev,
      yearsInService: e.target.value,
    }));
  }
  function handleSkills(e) {
    setSkills(e.target.value);
    setExperience((prev) => ({
      ...prev,
      skills: e.target.value,
    }));
  }
  function handleDescription(e) {
    setDescription(e.target.value);
    setExperience((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }
  
  
  return (
    <div
      className="min-h-2 flex items-center justify-center p-4 w-[60vw] min-w-[320px] max-w-[700px] p-5 mx-auto mt-[5vh]"
      id="main-container"
    >
      <div className="w-full">
        <div
          className="bg-gradient-to-b from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg w-full"
          style={{
            border: "3px solid #4A90E2",
            boxShadow: "0 8px 32px rgba(74, 144, 226, 0.3)",
          }}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="block  text-lg font-medium text-color-for-label text-props">
                Skills{" "}
                <span className="text-gray-500 text-[clamp(12px,2vw,16px)]">
                  (comma separated)
                </span>
              </div>
              <input
                type="text"
                value={skills}
                onChange={handleSkills}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Company
              </div>
              <input
                type="text"
                value={company}
                onChange={handleCompany}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Position
              </div>
              <input
                type="text"
                value={position}
                onChange={handlePosition}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Years in Service
              </div>
              <input
                type="text"
                value={yearsInService}
                onChange={handleYearsInService}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Description
              </div>
              <input
                type="text"
                value={description}
                onChange={handleDescription}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
