"use client";

import React from "react";

const AlertBox = ({ open, onClose }) => {
  if (!open) return null; // Hide if not open

  return (
    <div className="fixed bottom-5 right-5 bg-white border border-gray-300 p-4 rounded-lg shadow-lg z-50">
      <p className="text-sm font-medium mb-3">
        How do you want to view the resume?
      </p>
      <div className="flex gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          rel="noopener noreferrer"
        >
          View in Browser
        </a>
        <a
          href="/resume.pdf"
          download="Manurbhav_Arya_Resume.pdf"
          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
        >
          Download
        </a>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
