import React from 'react';
import react from 'react';
import { useState } from 'react';
import PersonalInfo from './personalInfo';


export default function App() {
    const [editor, setEditor] = useState(null);
    const [preview, setPreview] = useState(null);

    return (
        <react.StrictMode>
           
      
            <div className="App">
                <h1>CV Builder</h1>
                <PersonalInfo />
                <div className="preview">
                    <h2>Preview</h2>
                    <div dangerouslySetInnerHTML={{ __html: preview }} />
                </div>
            </div>
        </react.StrictMode>
    );
}