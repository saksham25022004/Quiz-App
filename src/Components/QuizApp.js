import React, { useState, useEffect } from 'react';
import QuizHeader from './QuizHeader';
import StartScreen from './StartScreen';
import GameStats from './GameStats';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import EndScreen from './EndScreen';
import bgImage from '../Images/bg.png';
import { fetchQuizData, formatTime, getScoreMessage } from '../utils/QuizUtils';

const QuizApp = () => {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //fetch the data
  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchQuizData();
        setQuizData(data);
        setTimer(15 * 60);
      } catch (err) {
        setError('Failed to load quiz. Please try again later.');
        setQuizData(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadQuizData();
  }, []);

  //change the counter every sec
  useEffect(() => {
    let interval;
    if (gameState === 'playing' && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, timer]);

  //funtion to start the quiz
  const startQuiz = () => {
    if (!quizData) return;
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setTimer(15 * 60);
    setStreak(0);
    setAnswers({});
  };

  //check if any is correct or not and do operation on that
  const handleAnswer = (selectedOptionIndex) => {
    if (!quizData) return;
    
    const question = quizData.questions[currentQuestion];
    const isCorrect = selectedOptionIndex >= 0 && question.options[selectedOptionIndex].is_correct;
    
    setAnswers(prev => ({
      ...prev,
      [question.id]: selectedOptionIndex
    }));

    if (isCorrect) {
      const correctPoints = parseFloat(quizData.correct_answer_marks);
      const totalPoints = correctPoints;
      setScore(prev => prev + totalPoints);
      setStreak(prev => prev + 1);
    } else {
      const negativePoints = parseFloat(quizData.negative_marks);
      setScore(prev => prev - negativePoints);
      setStreak(0);
      setLives(prev => prev - 1);
      if (lives <= 1) {
        setGameState('finished');
        return;
      }
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  };

  //restart the quiz
  const handleRestart = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setStreak(0);
    setAnswers({});
  };

  //if data is not fetched properly then retry
  const handleRetry = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchQuizData();
      setQuizData(data);
      setTimer(15 * 60);
    } catch (err) {
      setError('Failed to load quiz. Please try again later.');
      setQuizData(null);
    } finally {
      setIsLoading(false);
    }
  };

  //it display when data is been fetched
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="animate-spin text-7xl">⏳</div>
      </div>
    );
  }

  //it display when there is an error
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-sm max-w-md w-full">
          <h3 className="text-lg font-semibold mb-2">Error</h3>
          <p className="text-sm">{error}</p>
          <button 
            onClick={handleRetry}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  //it display when quizdata is not fetched
  if (!quizData) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No quiz data available</p>
          <button 
            onClick={handleRetry}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
          >
            Reload Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    //landing page
    <div className="max-w-5xl mx-auto my-5 w-full">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-purple-200" 
           style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center' }}>
        
        {/*header of the quiz*/}
        <QuizHeader title={quizData?.title} topic={quizData?.topic} />
        
        {/*Starting screen of the quiz*/}
        <div className="p-6">
          {gameState === 'start' && (
            <StartScreen quizData={quizData} onStart={startQuiz}/>
          )}

          {gameState === 'playing' && (
            <div className="space-y-6 animate-fade-in">
              <GameStats timer={timer} score={score} streak={streak} lives={lives} formatTime={formatTime}/>
              <ProgressBar current={currentQuestion} total={quizData.questions.length} />
              <QuestionCard question={quizData.questions[currentQuestion]} onAnswer={handleAnswer}/>
            </div>
          )}

          {gameState === 'finished' && (
            <EndScreen score={score} answers={answers} streak={streak} message={getScoreMessage(score)} onRestart={handleRestart}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;