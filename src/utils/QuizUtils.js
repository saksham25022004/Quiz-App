// Fetch quiz data from the given api
export const fetchQuizData = async () => {
    try {
      const response = await fetch(
        'https://api.allorigins.win/get?url=https://api.jsonserve.com/Uw5CrX',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }
      );
      if (!response.ok) throw new Error('Failed to fetch quiz data');
      const data = await response.json();
      return JSON.parse(data.contents);
    } 
    catch (error) {
      throw new Error('Failed to load quiz. Please try again later.');
    }
  };
  
  //format the time given into min:sec
  export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  //get message after completion of quiz
  export const getScoreMessage = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return "Outstanding! You're a Biology Expert! 🏆";
    if (percentage >= 75) return "Great job! Keep up the good work! 🌟";
    if (percentage >= 50) return "Good effort! Room for improvement! 📚";
    return "Keep studying! You'll get there! 💪";
  };