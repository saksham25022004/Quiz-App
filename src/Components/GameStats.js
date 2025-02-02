import React from 'react';

const GameStats = ({ timer, score, streak, lives, formatTime }) => (
  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg">
    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 text-blue-600 font-bold">
      <span className="animate-pulse">⏱️</span> 
      <span className="font-mono">{formatTime(timer)}</span>
    </div>
    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 text-emerald-600 font-bold">
      🏆 <span className="animate-count-up">{score} pts</span>
    </div>
    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 text-orange-600 font-bold">
      🔥 <span>{streak}</span>
    </div>
    <div className="flex gap-1 transition-all duration-300 hover:scale-110">
      {Array(lives).fill('❤️').map((heart, i) => (
        <span key={i} className="animate-bounce-subtle">{heart}</span>
      ))}
    </div>
  </div>
);

export default GameStats;