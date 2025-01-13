import React, { useState, useEffect } from 'react';
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
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [answeredQuestions, setAnsweredQuestions] = useState({}); // Tracks answered questions across all levels

    const questions = PythonQuestions[selectedLevel - 1];
    const solutions = PythonAnswers[selectedLevel - 1];

    // Initialize the answeredQuestions state for all levels
    useEffect(() => {
        const initialAnsweredQuestions = {};
        levels.forEach((level) => {
            initialAnsweredQuestions[level] = {};
        });
        setAnsweredQuestions((prev) => ({ ...initialAnsweredQuestions, ...prev }));
    }, []);

    const handleLevelSelect = (level) => {
        if (level === 4 && points < 200) return; // Prevent access to Level 4 if points < 200
        setSelectedLevel(level);
        setActiveQuestion(null);
        setUserAnswer('');
        setFeedback('');
        setShowModal(false);
    };

    const handleSubmit = (questionIndex, correctAnswer) => {
        if (userAnswer.trim() === correctAnswer.trim()) {
            const earnedPoints = selectedLevel * 10;
            setPoints((prev) => prev + earnedPoints);
            setFeedback(`Correct! You earned ${earnedPoints} points.`);

            setAnsweredQuestions((prev) => ({
                ...prev,
                [selectedLevel]: { ...prev[selectedLevel], [questionIndex]: true },
            }));
        } else {
            setFeedback('Incorrect. Try again!');
        }
    };

    const handleGiveUp = (solution) => {
        setModalContent(solution);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent('');
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
                                        className="give-up-button"
                                        onClick={() => handleGiveUp(solutions[index])}
                                    >
                                        Give Up
                                    </button>
                                    <button
                                        className="submit-button"
                                        onClick={() => handleSubmit(index, solutions[index])}
                                        disabled={answeredQuestions[selectedLevel]?.[index] || false}
                                    >
                                        {answeredQuestions[selectedLevel]?.[index]
                                            ? 'Answered'
                                            : 'Submit'}
                                    </button>
                                </div>
                                {feedback && <p className="feedback">{feedback}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Solution</h3>
                        <div className="solution-content">
                            {modalContent.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                        <button className="close-modal" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
