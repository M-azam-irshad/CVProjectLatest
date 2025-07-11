import React from 'react';


export default function Preview({ personalInfo, experience, education }) {
  const cleanText = (text) => {
    return text.replace(/^e\.g\s+/i, '').trim();
  };

  return (
    <div className=" mt-5 mb-5 max-w-4xl mx-auto p-8 bg-blue-50 shadow-lg rounded-lg border" style={{ boxShadow: '6px 6px  #0077df, 11px 14px #00417a' }}>
      {/* Header Section */}
      <div className="text-center mb-8 pb-6 border-b-2 border-blue-500">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {cleanText(personalInfo.name)}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            {cleanText(personalInfo.email)}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {cleanText(personalInfo.location)}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 2.42 4.055 1.077 1.5 0.5 1.128.395.74.428.394.662.048.896-.085 1.345.044 1.738c.262.805.725 1.527 1.344 2.088.619.56 1.37.993 2.185 1.264zm10.839 0h1.946c.089-1.546.383-2.97.837-4.118.862-2.462 2.811-3.805 5.366-4.382.372-.105.76-.072 1.106.162.346.234.479.683.35 1.076-.262.805-.725 1.527-1.344 2.088-.619.56-1.37.993-2.185 1.264z" clipRule="evenodd"/>
            </svg>
            <a href={cleanText(personalInfo.linkedIn)} className="text-blue-600 hover:underline">
              LinkedIn Profile
            </a>
          </span>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm-2 2v6h12V8H4zm2-2h8V5a1 1 0 00-1-1H7a1 1 0 00-1 1v1z" clipRule="evenodd"/>
          </svg>
          Professional Experience
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-blue-500 shadow-md ">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {cleanText(experience.position)}
              </h3>
              <p className="text-lg text-blue-600 font-medium">
                {cleanText(experience.company)}
              </p>
            </div>
            <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm">
              {cleanText(experience.yearsInService)}
            </span>
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            {cleanText(experience.description)}
          </p>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Key Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {cleanText(experience.skills).split(',').map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-blue-500 shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {cleanText(education.degree)}
              </h3>
              <p className="text-lg text-blue-600 font-medium">
                {cleanText(education.school)}
              </p>
              <p className="text-gray-600">
                {cleanText(education.fieldOfStudy)}
              </p>
            </div>
            <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm">
              {cleanText(education.graduationYear)}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {cleanText(education.description)}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
