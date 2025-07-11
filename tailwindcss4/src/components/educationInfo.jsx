import React from "react";
import { useState } from "react";

export default function EducationInfo({ education, setEducation }) {
  const [degree, setDegree] = useState(education.degree || "");
  const [fieldOfStudy, setFieldOfStudy] = useState(education.fieldOfStudy || "");
  const [school, setSchool] = useState(education.school || "");
  const [graduationYear, setGraduationYear] = useState(education.graduationYear || "");
  const [description, setDescription] = useState(education.description || "");

  function handleDegree(e) {
    setDegree(e.target.value);
    setEducation((prev) => ({
      ...prev,
      degree: e.target.value,
    }));
  }
  function handleFieldOfStudy(e) {
    setFieldOfStudy(e.target.value);
    setEducation((prev) => ({
      ...prev,
      fieldOfStudy: e.target.value,
    }));
  }
  function handleGraduationYear(e) {
    setGraduationYear(e.target.value);
    setEducation((prev) => ({
      ...prev,
      graduationYear: e.target.value,
    }));
  }
  function handleSchool(e) {
    setSchool(e.target.value);
    setEducation((prev) => ({
      ...prev,
      school: e.target.value,
    }));
  }
  function handleDescription(e) {
    setDescription(e.target.value);
    setEducation((prev) => ({
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
                Degree
              </div>
              <input
                type="text"
                value={degree}
                onChange={handleDegree}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Field of Study
              </div>
              <input
                type="text"
                value={fieldOfStudy}
                onChange={handleFieldOfStudy}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                School
              </div>
              <input
                type="text"
                value={school}
                onChange={handleSchool}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Graduation Year or expected
              </div>
              <input
                type="text"
                value={graduationYear}
                onChange={handleGraduationYear}
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
