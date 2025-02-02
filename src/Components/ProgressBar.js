import React from 'react';

const ProgressBar = ({ current, total }) => (
  <div className="w-full bg-gray-200 rounded-full h-3">
    <div 
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full h-3 transition-all duration-500 ease-out"
      style={{ width: `${(current) / total * 100}%` }}
    />
  </div>
);
export default ProgressBar;