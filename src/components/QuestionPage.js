import React, { useState } from 'react';
import Navbar from './Navbar';
import { PythonQuestions } from './PythonQuestions';
import { JavaScriptQuestions } from './JavaScriptQuestions';
import '../styles/QuestionPage.css';

export default function QuestionPage({ language, onBackToLanguages }) {
    const levels = [1, 2, 3, 4];
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [showSolution, setShowSolution] = useState(null);

    const questions =
        language === 'Python'
            ? PythonQuestions[selectedLevel - 1]
            : JavaScriptQuestions[selectedLevel - 1];

    return (
        <div className="question-page">
            <Navbar
                levels={levels}
                selectedLevel={selectedLevel}
                onSelectLevel={(level) => {
                    setSelectedLevel(level);
                    setActiveQuestion(null);
                    setShowSolution(null);
                }}
                onBack={onBackToLanguages}
            />
            <div className="questions">
                {questions.map((question) => (
                    <div key={question.number} className="question-item">
                        <div
                            className="question-header"
                            onClick={() =>
                                setActiveQuestion(
                                    activeQuestion === question.number ? null : question.number
                                )
                            }
                        >
                            Question {question.number}
                        </div>
                        {activeQuestion === question.number && (
                            <div className="question-content">
                                <p>{question.description}</p>
                                <button
                                    className="solution-button"
                                    onClick={() =>
                                        setShowSolution(
                                            showSolution === question.number ? null : question.number
                                        )
                                    }
                                >
                                    Show Solution
                                </button>
                                {showSolution === question.number && (
                                    <pre className="solution">{question.solution}</pre>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
