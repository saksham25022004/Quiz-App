import React from 'react';

const EndScreen = ({ score, answers, streak, message, onRestart }) => (
  <div className="text-center space-y-6 animate-fade-in">
    <h2 className="text-2xl font-semibold mb-4 animate-bounce-subtle bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      {message}
    </h2>
    <div className="flex flex-col items-center gap-4">
      <span className="text-6xl animate-trophy">🏆</span>
      <p className="text-xl animate-count-up font-bold text-purple-600">Final Score: {score}</p>
      <div className="space-y-2">
        <p className="transform transition hover:translate-x-2 text-indigo-600 font-medium">
          Questions Attempted: {Object.keys(answers).length}
        </p>
        <p className="transform transition hover:translate-x-2 text-pink-600 font-medium">
          Highest Streak: {streak}
        </p>
      </div>
      <button 
        onClick={onRestart}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transform transition duration-200 hover:scale-105 font-bold shadow-lg hover:shadow-xl"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default EndScreen;