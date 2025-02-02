import React from 'react';

const QuizHeader = ({ title, topic }) => (
  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
    <h1 className="text-2xl font-bold flex items-center justify-center gap-2 animate-fade-in text-white mb-5">
      <span className="animate-bounce">🧠</span> {title}
    </h1>
    {topic && (
      <p className="text-lg sm:text-xl flex items-center justify-center text-white/90 animate-fade-in">
        Topic: {topic}
      </p>
    )}
  </div>
);

export default QuizHeader;