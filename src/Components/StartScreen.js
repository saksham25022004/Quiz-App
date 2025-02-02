import React from 'react';

const StartScreen = ({ quizData, onStart }) => (
  <div className="text-center space-y-6 animate-fade-in">
    <h2 className="text-2xl font-semibold transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      Ready to test your Biology knowledge?
    </h2>
    <div className="space-y-3">
      <p className="transform transition hover:translate-x-2 text-emerald-600 font-medium">
        🎯 Correct answer: +{quizData.correct_answer_marks} points
      </p>
      <p className="transform transition hover:translate-x-2 text-rose-600 font-medium">
        ⚠️ Wrong answer: -{quizData.negative_marks} points
      </p>
      <p className="transform transition hover:translate-x-2 text-blue-600 font-medium">
        ⏱️ Time limit: {quizData.duration} minutes
      </p>
      <p className="transform transition hover:translate-x-2 text-purple-600 font-medium">
        ❤️ 3 lives - be careful!
      </p>
    </div>
    <button 
      onClick={onStart}
      className="animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transform transition duration-200 hover:scale-105 font-bold shadow-lg hover:shadow-xl"
    >
      Start Quiz
    </button>
  </div>
);

export default StartScreen;