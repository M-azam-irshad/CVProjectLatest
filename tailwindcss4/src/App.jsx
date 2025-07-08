import React from 'react';

import { useState } from 'react';
import PersonalInfo from './components/personalInfo';
import Preview  from './components/preview';


export default function App() {
    const [preview, setPreview] = useState(false);
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
                {!preview ? <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} /> : <Preview personalInfo={personalInfo}/>}
            </div>
        </react.StrictMode>
    );
}