# Interactive Quiz Application

An engaging React-based quiz application featuring gamification elements, real-time feedback, and a dynamic scoring system.

## 🔗 Live Demo

- **Development Link**: [Quiz App ]()

## 📸 Screenshots

### Start Screen
![Start Screen](</Screensort/StartScreen.png>)

### Gameplay
![Game Play](</Screensort/Gameplay.png>)

### Results Screen
![Result](</Screensort/Result.png>)

## 🌟 Features

### Gamification Elements
- **Lives System**: Players start with 3 lives
- **Streak Counter**: Track consecutive correct answers
- **Score System**:
  - Positive points for correct answers
  - Negative marking for incorrect answers
- **Timer**: 15-minute time limit for completing the quiz
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Performance Analytics**: End-screen statistics and performance breakdown

### User Interface
- Clean, modern design with intuitive navigation
- Responsive layout that works on all devices
- Animated transitions
- Real-time score and progress updates
- Custom background and visual themes

### Game States
1. **Start Screen**
   - Quiz overview and rules
   - Start button to begin the quiz
   - Display of total questions and time limit

2. **Playing State**
   - Current question display
   - Multiple choice options
   - Real-time stats (Score, Lives, Timer, Streak)
   - Progress indicator

3. **End Screen**
   - Final score display
   - Performance breakdown
   - Option to restart
   - Answer review

## 🚀 Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/saksham25022004/quiz-app.git
cd quiz-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── QuizApp.js        # Main application component
│   │   ├── QuizHeader.js     # Quiz header component
│   │   ├── StartScreen.js    # Initial screen component
│   │   ├── QuestionCard.js   # Question display component
│   │   ├── GameStats.js      # Stats display component
│   │   ├── ProgressBar.js    # Progress indicator component
│   │   └── EndScreen.js      # Final results component
│   ├── utils/
│   │   └── QuizUtils.js      # Utility functions
│   ├── Images/
│   │   └── bg.png           # Background image
│   └── App.js               # Root component
├── public/
└── package.json
```

## 🎮 How to Play

1. **Starting the Quiz**
   - Click "Start Quiz" on the welcome screen
   - Review the rules and time limit
   - Begin answering questions

2. **During the Quiz**
   - Read each question carefully
   - Select your answer from the multiple choices
   - Keep an eye on your remaining lives and time
   - Try to maintain answer streaks for bonus points

3. **Scoring System**
   - Correct Answer: +[configured points]
   - Incorrect Answer: -[configured negative marks]
   - Lose a life for each incorrect answer
   - Quiz ends when all lives are lost or time expires

4. **Completing the Quiz**
   - Finish all questions or continue until lives/time run out
   - Review your performance on the end screen
   - Option to restart and try to beat your score



## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop computers
- Tablets
- Mobile devices
