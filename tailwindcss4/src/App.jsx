import React from 'react';
import react from 'react';
import { useState } from 'react';
import PersonalInfo from './personalInfo';
import Preview  from './preview';
import { div } from 'three/tsl';


export default function App() {
    const [preview, setPreview] = useState(false);

    return (
        <react.StrictMode>
            <div className="App">
                <button id='previewButton' className='ring-blue-500 ring-2 absolute font-sans top-2.5 right-1.5 bg-gradient-to-tr from-white to-blue-300 w-[clamp(50px,20vw,200px)] text-[clamp(12px,2vw,20px)] text-black p-1.5 px-2.5 rounded-md border-none cursor-pointer' onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</button>
                {!preview ? <PersonalInfo /> : <h1>Preview</h1>}
            </div>
        </react.StrictMode>
    );
}