import React, { useState } from 'react';
import Navbar from './Navbar';
import { PythonQuestions } from './PythonQuestions';
import { PythonAnswers } from './PythonAnswers';
import '../styles/QuestionPage.css';

export default function QuestionPage({ language, onBackToLanguages }) {
    const levels = [1, 2, 3, 4];
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [points, setPoints] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showSolution, setShowSolution] = useState(false);

    const questions = PythonQuestions[selectedLevel - 1];
    const solutions = PythonAnswers[selectedLevel - 1];

    const handleLevelSelect = (level) => {
        if (level === 4 && points < 200) return; // Prevent access to Level 4 if points < 200
        setSelectedLevel(level);
        setActiveQuestion(null);
        setUserAnswer('');
        setFeedback('');
        setShowSolution(false);
    };

    const handleSubmit = (correctAnswer) => {
        if (userAnswer.trim() === correctAnswer.trim()) {
            let earnedPoints = selectedLevel * 10;
            setPoints((prev) => prev + earnedPoints);
            setFeedback(`Correct! You earned ${earnedPoints} points.`);
        } else {
            setFeedback('Incorrect. Try again!');
        }
    };

    return (
        <div className="question-page">
            <div className="points">
                <h2>Points: {points}</h2>
            </div>
            <Navbar
                levels={levels}
                selectedLevel={selectedLevel}
                onSelectLevel={handleLevelSelect}
                onBack={onBackToLanguages}
                points={points}
            />
            <div className="questions">
                {questions.map((question, index) => (
                    <div key={question.number} className="question-item">
                        <div
                            className="question-header"
                            onClick={() =>
                                setActiveQuestion(
                                    activeQuestion === question.number ? null : question.number
                                )
                            }
                        >
                            Level {selectedLevel} - Question {question.number}
                        </div>
                        {activeQuestion === question.number && (
                            <div className="question-content">
                                <p>{question.description}</p>
                                <textarea
                                    className="user-input"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    placeholder="Type your answer here..."
                                ></textarea>
                                <div className="buttons">
                                    <button
                                        className="solution-button"
                                        onClick={() => setShowSolution(!showSolution)}
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                    <button
                                        className="submit-button"
                                        onClick={() => handleSubmit(solutions[index])}
                                    >
                                        Submit
                                    </button>
                                </div>
                                {showSolution && (
                                    <pre className="solution">
                                        {solutions[index]}
                                    </pre>
                                )}
                                {feedback && <p className="feedback">{feedback}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
