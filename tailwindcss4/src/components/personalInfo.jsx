import { useState } from "react";
export default function PersonalInfo({personalInfo, setPersonalInfo}) {
  const [name, setName] = useState(personalInfo.name || "");
  const [email, setEmail] = useState(personalInfo.email || "");
  const [location, setLocation] = useState(personalInfo.location || "");
  const [linkedIn, setLinkedIn] = useState(personalInfo.linkedIn || "");






function handleName (e){
  setName(e.target.value)
  setPersonalInfo((prev) => ({
    ...prev,
    name: e.target.value
  }))
}
function handleEmail (e){
  setEmail(e.target.value)
  setPersonalInfo((prev) => ({
    ...prev,
    email: e.target.value
  }))
}
function handleLocation (e){
  setLocation(e.target.value)
  setPersonalInfo((prev)=>({
    ...prev,
    location: e.target.value
  }))
}
function handleLinkedIn (e){
  setLinkedIn(e.target.value)
  setPersonalInfo((prev) => ({
    ...prev,
    linkedIn: e.target.value
  }))
}
  return (
    <div className="min-h-2 flex items-center justify-center p-4 w-[60vw] min-w-[320px] max-w-[700px] p-5 mx-auto mt-[5vh]" id="main-container">
      <div className="w-full">
        <div 
          className="bg-gradient-to-b from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg w-full"
          style={{
            border: '3px solid #4A90E2',
            boxShadow: '0 8px 32px rgba(74, 144, 226, 0.3)'
          }}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="block  text-lg font-medium text-color-for-label text-props">
                Full name
              </div>
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
    
              />
            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                E-mail
              </div>
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"

              />
            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                Location
              </div>
              <input
                type="text"
                value={location}
                onChange={handleLocation}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                LinkedIn
              </div>
              <input
                type="text"
                value={linkedIn}
                onChange={handleLinkedIn}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
         
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}