import React from "react";
import { useState } from "react";
import data from "./data";

export default function Preview() {
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
                {data.personalInfo.name}
              </div>

            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
                {data.personalInfo.email}
              </div>
        
            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
               {data.personalInfo.location}
              </div>

            </div>
            
            <div className="space-y-2">
              <div className="block text-color-for-label text-lg font-medium text-props">
               {data.personalInfo.linkedIn}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

}