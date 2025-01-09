import React, { useState } from 'react';
import Navbar from './Navbar';
import { PythonQuestions } from './PythonQuestions';
import { PythonAnswers } from './PythonAnswers';
import { JavaScriptQuestions } from './JavaScriptQuestions';
import { JavaScriptAnswers } from './JavaScriptAnswers';
import '../styles/QuestionPage.css';

export default function QuestionPage({ language, onBackToLanguages }) {
    const levels = [1, 2, 3, 4];
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [showSolution, setShowSolution] = useState(null);

    const questions =
        language === 'Python'
            ? PythonQuestions[selectedLevel - 1]
            : JavaScriptQuestions[selectedLevel - 1];

    const answers =
        language === 'Python'
            ? PythonAnswers[selectedLevel - 1]
            : JavaScriptAnswers[selectedLevel - 1];

    return (
        <div className="question-page">
            <Navbar
                levels={levels}
                selectedLevel={selectedLevel}
                onSelectLevel={(level) => {
                    setSelectedLevel(level);
                    setShowSolution(null);
                }}
                onBack={onBackToLanguages}
            />
            <div className="questions">
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        <p>{question}</p>
                        <button
                            onClick={() =>
                                setShowSolution(showSolution === index ? null : index)
                            }
                        >
                            {showSolution === index ? 'Hide Solution' : 'Show Solution'}
                        </button>
                        {showSolution === index && (
                            <pre className="solution">{answers[index]}</pre>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}