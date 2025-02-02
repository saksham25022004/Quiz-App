import React from 'react';

const QuestionCard = ({ question, onAnswer }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium transform transition-all duration-300 text-indigo-800">
      {question.description}
    </h3>
    {question.photo_url && (
      <img 
        src={question.photo_url} 
        alt="Question"
        className="max-w-full rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg" 
      />
    )}
    <div className="grid gap-3">
      {question.options.map((option, idx) => (
        <button
          key={option.id}
          className="border-2 border-purple-200 rounded-lg p-4 text-left transition-all duration-200 transform hover:scale-102 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-md active:scale-98 text-indigo-700"
          onClick={() => onAnswer(idx)}
        >
          {option.description}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;