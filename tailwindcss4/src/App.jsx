import React from 'react';
import react from 'react';
import { useState } from 'react';
import PersonalInfo from './components/personalInfo';
import ExperienceInfo from './components/experienceInfo';
import Preview  from './components/preview';


export default function App() {
    const [preview, setPreview] = useState(false);
    const [experience, setExperience] = useState({
        company: "e.g ABC Corp",
        position: "e.g Software Engineer",
        yearsInService: "e.g 2 years",
        skills: "e.g JavaScript, React, Node.js",
        description: "e.g Developed web applications"
    });
    const [personalInfo, setPersonalInfo] = useState({
    name: "e.g John Doe",
    email: "e.g john.doe@example.com",
    location: "e.g New York",
    linkedIn: "e.g https://www.linkedin.com/in/johndoe"
  });
    return (
        <react.StrictMode>
            <div className="App">
                <button id='previewButton' className='ring-blue-500 ring-2 absolute font-sans top-2.5 right-1.5 bg-gradient-to-tr from-white to-blue-300 w-[clamp(50px,20vw,200px)] text-[clamp(12px,2vw,20px)] text-black p-1.5 px-2.5 rounded-md border-none cursor-pointer' onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</button>
                {!preview ? <>
               <div> <h1 className='mt-5'>Personal Information</h1>
               <PersonalInfo  personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} /></div>
                <div> <h1 className='mt-5'>Experience Information</h1></div>
               <ExperienceInfo  experience={experience} setExperience={setExperience} />
                 </>

                : <Preview personalInfo={personalInfo} experience={experience} />}
            </div>
        </react.StrictMode>
    );
}